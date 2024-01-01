// import magicAdmin from "@/lib/magic"

import { Magic } from '@magic-sdk/admin';

const Login = async(req  , res) =>{
    try{

        if(req.method === "POST"){
            const token = req.headers.authorization;
            const didToken = token ? token.substr(7) : "  "
            // console.log(magicAdmin)
            // console.log(didToken)

            //magic initializaiton 

            const magic = await Magic.init(process.env.NEXT_PUBLIC_API_KEY_MAGIC_SECRET_KEY );

            const data = await magic.users.getMetadataByToken(didToken)

            console.log(data)
            res.json({
                status : true ,
                token : didToken
            })
        }else{
            res.json({
                status : false ,
                message :"Something went wrong"
            })
        }
      
    }catch(error){
        res.json({
            status : false ,
            message :"Internal Server Error",
            error : error.message
        })
    }

}

export default Login;