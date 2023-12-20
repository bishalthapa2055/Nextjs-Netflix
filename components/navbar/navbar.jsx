import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { magic } from "@/lib/magic-client";
import { useEventCallback } from "@mui/material";

const Navbar = (props) => {
  
  const [showDropdown, setSetDropdown] = useState(false);
  const [email ,setEmail] = useState("")
  const router = useRouter();



  const handleSignOut = (e) =>{
    setSetDropdown(!showDropdown)
  } 


  useEffect(() =>{

    const fetchEmail = async() =>{
      const data = await magic.user.getMetadata()
      console.log(data.email , "magic email ")
      await setEmail(data.email)
    }
    fetchEmail()
  },[])


  const handleLogOut = async(e) =>{
    e.preventDefault()
    try{
      
      const logOUt = await magic.user.logout()
      localStorage.removeItem("accessToken")
      router.push("/login")
    }catch(error){
      console.log(error)
    }
  }
  console.log(props.userName);
  return (
    <>
      <div className={styles.nav__container}>
        <div className={styles.nav__left__container}>
          <div className={styles.nav__logo}>
            <Link href="/">
              <h3 className={styles.netflix}>Netflix</h3>
            </Link>
          </div>
          <div className={styles.nav__lists}>
            <div className={styles.nav__home}>
              <h4 className={styles.home}>Home</h4>
            </div>
            <div className={styles.nav__mylists}>
              <Link href="/browser/my-lists">
                <h4 className={styles.mylists}>Mylists</h4>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={styles.nav__right__container}
          onClick={handleSignOut}
        >
          <h5>{email}</h5>
          <ArrowDropDownOutlinedIcon />
          {showDropdown && (
            <div className={styles.signout}>
              <h4 onClick={handleLogOut}> Sign Out</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
