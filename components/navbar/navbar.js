import React from 'react'
import styles from "./navbar.module.css"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const Navbar = () => {
    const handleClick = () => {
        alert('Clicked!');
      };
    

  return (
   <>
   <div className={styles.nav__container}>
    <div className={styles.nav__left__container}>
        <div className={styles.nav__logo} onClick={handleClick}>
        
           <h3 className={styles.netflix}  >Netflix</h3>
            
        </div>
        <div className={styles.nav__lists}>
            <div className={styles.nav__home}>
                <h4 className={styles.home} >Home</h4>
            </div>
            <div className={styles.nav__mylists}>
                <h4 className={styles.mylists}>Mylists</h4>
            </div>
        </div>
    </div>
    <div className={styles.nav__right__container}>
    <FormControl variant="standard" sx={{ minWidth: 120 }}>
    <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={"bishal@gmail.com"}
        label="Age"
        className={styles.select}
        >
    <MenuItem value={"signOut"}>Sign Out</MenuItem>
    </Select>
    </FormControl>
    </div>
   </div>
   </>
  )
}

export default Navbar