
import { Magic } from 'magic-sdk';



// Construct with an API key:
 const createMagic  = () =>{
return (
    typeof window !== "undefined" && new Magic(process.env.NEXT_PUBLIC_API_KEY_MAGIC_CLIENT )
    )   
} 


export const magic = createMagic()

