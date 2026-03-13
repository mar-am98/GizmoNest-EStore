'use server'

import { redirect } from 'next/navigation';
import db from './db';
import { currentUser } from '@clerk/nextjs/server';
import { imageSchema, productSchema, reviewSchema } from './schema';
import { deleteImage, uploadImage } from './supabase';
import { revalidatePath } from 'next/cache';

export const fetchFeaturedProducts = async () => {
    const products = await db.product.findMany({
        where: {
            featured: true,
        }
    });
    return products;

}
export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
    const products = await db.product.findMany({
        where: {
            OR: [
                { title: { contains: search, mode: 'insensitive' } },
                { company: { contains: search, mode: 'insensitive' } },
            ]
        },
        orderBy: {
            createdAt: 'desc',
        }
    });

    return products;
}

export async function fetchSingleProduct(productID: string) {
    const findProduct = await db.product.findUnique({
        where: {
            id: productID,
        }
    })

    if (!findProduct) {
        redirect('/products')
    }

    return findProduct
}


const getAuthUser = async () => {

    const user = await currentUser()

    if (!user) {
        throw new Error("You must be logged in to access this route")
    }

    return user
}

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message : "UnKnown Error Type"
    }
}

export const createProductAction = async (
    prevState: any,
    formData: FormData
): Promise<{ message: string }> => {

    const user = await getAuthUser();
    const rawData = Object.fromEntries(formData);
    const file = formData.get('image') as File;

    const validatedFields = productSchema.safeParse(rawData);
    // const validateFile = imageSchema.safeParse(file);
    const validateFile = imageSchema.safeParse({ image: file });

    if (!validatedFields.success) {
        const errors = validatedFields.error.errors.map((error) => error.message);
        return { message: `Error: ${errors.join(', ')}` };
    }

    if (!validateFile.success) {
        const errors = validateFile.error.errors.map((error) => error.message);
        return { message: `Error: ${errors.join(', ')}` };
    }

    const fullPath = await uploadImage(validateFile.data.image)

    try {
        await db.product.create({
            data: {
                ...validatedFields.data,
                image: fullPath,
                ClerkId: user.id,
            }
        });

        return { message: "Product Created Successfully" }

    }

    catch (e) {
        return renderError(e);
    }

}


const getAdminUser = async () => {
    const user = await getAuthUser();
    if (user.id !== process.env.ADMIN_USER_ID) redirect('/');

    return user;
}

export const fetchAdminProducts = async () => {
    await getAdminUser();

    const products = await db.product.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return products;
}

export const deleteProductAction = async (prevState: { productID: string }) => {
    const { productID } = prevState;
    await getAdminUser();
    try {

        await db.product.delete({
            where: {
                id: productID
            }
        });

        // revalidatePath('/admin/products') /deleted cause it make hard reload
        return { message: "Product Deleted Successfully" }

    }
    catch (e) {
        return renderError(e);
    }
}

// loop products -> id === productId (true)
export const fetchAdminProductDetails = async (productId: string) => {
    await getAdminUser();
    const product = await db.product.findUnique({
        where: {
            id: productId
        }
    });

    // if(!product) redirect("/admin/products");
    return product;
}



export const updateProductAction = async (
    prevState: any,
    formData: FormData
) => {
    await getAdminUser();

    try {

        const productID = formData.get('id') as string;
        const rawData = Object.fromEntries(formData);
        const validatedFields = productSchema.safeParse(rawData);


        if (!validatedFields.success) {

            const errors = validatedFields.error.errors.map((error) => error.message);
            return { message: `Error: ${errors.join(', ')}` };
        }



        await db.product.update({
            where: {
                id: productID
            },
            data: {
                ...validatedFields.data,
            }
        });
        revalidatePath(`/admin/products/${productID}/edit`);
        return { message: "Product Updated Successfully" }


    }


    catch (e) {
        return renderError(e);
    }
}


export const updateImageAction = async (
    prevState: any,
    formData: FormData
) => {

    await getAuthUser();

    try {

        const image = formData.get('image') as File;
        const productID = formData.get('id') as string;
        const oldImage = formData.get('url') as string;

        const validateFile = imageSchema.safeParse({ image: image });

        if (!validateFile.success) {
            const errors = validateFile.error.errors.map((error) => error.message);
            return { message: `Error: ${errors.join(', ')}` };
        }

        const fullPath = await uploadImage(validateFile.data.image);

        deleteImage(oldImage);
        await db.product.update({
            where: {
                id: productID
            },
            data: {
                image: fullPath
            }
        });

        revalidatePath(`/admin/products/${productID}/edit`)
        return { message: 'Product Image updated successfully' };

    }

    catch (e) {
        return renderError(e);
    }

}


// fetch fav ID
export const fetchFavoriteID = async ({ productId }: { productId: string }) => {

    const user = await getAuthUser()

    const favorite = await db.favorite.findFirst({
        where: {
            proudctID: productId,
            ClerkId: user.id,
        },
        select: {
            id: true
        },
    })

    return favorite?.id || null
}

export const toggleFavoriteAction = async (prevState: {
    productId: string;
    favoriteId: string | null
}) => {

    const user = await getAuthUser();
    const { productId, favoriteId } = prevState;
    try {

        if (favoriteId) {
            await db.favorite.delete({
                where: {
                    id: favoriteId
                }
            });
        }
        else {
            await db.favorite.create({
                data: {
                    proudctID: productId,
                    ClerkId: user.id
                }
            })
        }
        revalidatePath("/");

        return { message: favoriteId ? "Removed From Favorites" : "Added To Favorites" }
    }
    catch (e) {
        return renderError(e);
    }


}


export const fetchUserFavorites = async () => {
    const user = await getAuthUser();
    if (!user) return [];
    const favorites = await db.favorite.findMany({
        where: {
            ClerkId: user.id
        },
        include: {
            product: true
        }
    });

    return favorites;
}

export const fetchFavorites = async () => {
    const user = await getAuthUser();
    if (!user) return [];

    const favorites = await db.favorite.findMany({
        where: {
            ClerkId: user.id
        },
        select: {
            id: true,
            proudctID: true,
        }
    });

    return favorites;
}

export const createReviewAction = async (
    prevState: any,
    formData: FormData
) => {
    const user = await getAuthUser();

    try {

        const rawData = Object.fromEntries(formData);
        const validatedFields = reviewSchema.safeParse(rawData);

        if (!validatedFields.success) {
            const errors = validatedFields.error.errors.map((error) => error.message);
            return { message: `Error: ${errors.join(', ')}` };
        }

        await db.review.create({
            data: {
                ...validatedFields.data,
                clerkId: user.id
            }
        });

        revalidatePath(`/products/$${validatedFields.data.productId}`);
        return { message: 'review submitted successfully !' }
    }

    catch (e) {
        return renderError(e);
    }
}

export const fetchProductReviews = async (productId: string) => {
    const reviews = await db.review.findMany({
        where: {
            productId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return reviews;
};


export const fetchProductReviewsByUser = async () => {
    const user = await getAuthUser();
    const reviews = await db.review.findMany({
        where: {
            clerkId: user.id
        },
        select: {
            id: true,
            rating: true,
            comment: true,
            product: {
                select: {
                    image: true,
                    title: true,
                }
            }
        }
    });

    return reviews;
};

export const deleteReviewAction = async (prevState: { reviewId: string }) => {
    const { reviewId } = prevState;
    const user = await getAuthUser();

    try {
        await db.review.delete({
            where: {
                id: reviewId,
                clerkId: user.id
            }
        });

        revalidatePath('/reviews');
        return { message: "Review Deleted Successfully" };
    } catch (e) {
        return renderError(e);
    }
};

export const findExistingReview = async (userId: string, productId: string) => {
    const review = await db.review.findFirst({
        where: {
            clerkId: userId,
            productId: productId
        }
    });

    return review;
};

export const fetchProductRating = async (productId: string) => {
    const result = await db.review.groupBy({
        by: ['productId'],
        _avg: {
            rating: true
        },
        _count: {
            rating: true
        },
        where: {
            productId
        }
    });

    return {
        rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
        count: result[0]?._count.rating ?? 0
    };
};