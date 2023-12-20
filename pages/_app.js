import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [isLoading , setIsloading] = useState(false)
  const router = useRouter()
  useEffect(() =>{

    const checkToken = async() =>{

      const accessToken = await localStorage.getItem("accessToken")
      console.log("access" , accessToken)

      if(accessToken){
        setIsloading(true)

        setTimeout(() =>{
          setIsloading(false)
          router.push("/")
        },5000)
      }else{

        router.push("/login")
      }
    }
    checkToken()
  }, [])
  return isLoading ? <>Loading ....</> : <Component {...pageProps} />
}
