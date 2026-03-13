
import { createClient } from '@supabase/supabase-js'

const bucket = 'store';

const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {

  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name.replace(/[^\w.-]/g, '_')}`;


  const { data, error } = await supabase.storage.from(bucket).upload(newName, image, {
    cacheControl: '3600'
  });

  if (error) {
    throw new Error(`Image Upload Failed: ${error.message}`);
  }

  if (!data) throw new Error("Image Upload Failed");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
}

export const deleteImage = (url: string) => {
  const imageName = decodeURIComponent(url.split('/').pop() as string);

  if (!imageName) throw new Error("INVALID URL");

  return supabase.storage.from(bucket).remove([imageName]);

}