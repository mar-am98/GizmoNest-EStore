
import {z, ZodSchema} from 'zod';


export const productSchema = z.object({
    title: z.string()
    .min(4, {message:'name must be at least 4 characters.'})
    .max(100, {message:'name must be less than 100 characters'}),

    company:z.string().min(4,{message:'company name must be at least 4 characters.'}),
    price:z.coerce.number().int().min(0 , {
        message: 'price must be a positive number.'
    }),
    decription: z.string().max(1024),
    featured:z.coerce.boolean(),
});


export function validateWithZodSchema <T> (
    schema: ZodSchema<T>,
    data : unknown
): T{

    const results = schema.safeParse(data);

    if(!results.success) {
        const errros = results.error.errors.map((e)=> e.message); 
        throw new Error(errros.join(',')); 

    }

    return results.data;


}

export const imageSchema = z.object({
    image: validateImageFile(),
})

function validateImageFile(){

    const maxUploadSize = 1024  * 1024;
    const acceptedFileTypes = ['image/'];

    return z.instanceof(File)
                .refine((file)=>{
                    return (!file || file.size <= maxUploadSize);
                }, "File size must be less than 1 MB")
                .refine((file)=>{
                    return (!file  || acceptedFileTypes.some((ex)=>file.type.startsWith(ex)));
                }, "File must be an image")
}


export const reviewSchema = z.object({
        rating: z.coerce
            .number()
            .min(1,{message : "Rating must be at least 1"})
            .max(5,{message:"Rating must be at most 5"}),
        comment: z.string()
            .min(10,{message : "Comment must be at least 10 characters long"})
            .max(100,{message:"Comment must be at most 1000 characters long"}),  
        
        productId: z.string().refine((value)=> value !== '',{
            message: "Product ID cannot be empty"
        }), 
        authorName: z.string().refine((value)=> value !== '',{
            message: "Author name cannot be empty"
        }), 
        authorImageUrl: z.string().refine((value)=> value !== '',{
            message: "Author image URL cannot be empty"
        }),    

});