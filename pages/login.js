import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from "../styles/login.module.css"
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';
import { magic } from '@/lib/magic-client';


const Login = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [isLoading , setIsloading] = useState(false);

    const router = useRouter()
    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return inputEmail === '' || emailRegex.test(inputEmail);    
    };

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        setError(!validateEmail(inputValue));

    };
    

    const handleSubmit = async(e) =>{
        e.preventDefault(e)
        setIsloading(!isLoading)

        if(!error){
            const response = await magic.auth.loginWithMagicLink({ email: email});
            console.log(response , "magiv Link")

            if(response){
                localStorage.setItem("accessToken" , response)
                router.push("/")
            }

        }
        else {  
            alert("Error occured")
        }
        setIsloading(isLoading)
    }
   
  return (
    <>
    <div>
        <Head>
            <title>Netflix Login</title>
        </Head>
    </div>
    <div>
        <header className={styles.container}>
            <div className={styles.logoNetflix}>
                <h2 className={styles.title}>Netflix</h2>
            </div>
            <main className={styles.main__container}>

            <div className={styles.form__container}>
               <div className={styles.data__container}>
                <div className={styles.data__container__title}>
                    <h3>Sign In</h3>
                </div>
                <div className={styles.data__container__input}>
                <TextField
                        className={styles.input__type}
                        placeholder='email-address'
                        variant="outlined"
                        InputProps={{
                            style: { color: `var(--red10)`, fontSize: '1.25rem', borderRadius: "20px" }
                        }}
                        onChange={handleEmailChange}
                    />
                </div>
                {
                    error  ? 
                    <>
                    <p className={styles.error__message}>please enter valid email</p>
                    </>
                    :
                    <>
                    {}
                    </>
                }
                <div className={styles.data__container__button}>
                    <button className={styles.data__button} disabled={error} onClick={handleSubmit}>
                        {
                            isLoading ? "loading ..." : "Sign In"
                        }
                    </button>
                </div>
               </div>
            </div>
            </main>
        </header>
    </div>
    </>
  )
}

export default Login