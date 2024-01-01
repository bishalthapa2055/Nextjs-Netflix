import { Magic } from '@magic-sdk/admin';

console.log(process.env.NEXT_PUBLIC_API_KEY_MAGIC_SECRET_KEY)
export const magicAdmin =  new Magic(process.env.NEXT_PUBLIC_API_KEY_MAGIC_SECRET_KEY   )

