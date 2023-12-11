import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const Navbar = (props) => {
  const [showDropdown, setSetDropdown] = useState(false);
  const router = useRouter();

  const handleSignOut = (e) =>{
    setSetDropdown(!showDropdown)
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
          <h5>{props.userName}</h5>
          <ArrowDropDownOutlinedIcon />
          {showDropdown && (
            <div className={styles.signout}>
              <h4>Sign Out</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
