import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Header.module.scss";
import FavBtn from "../Buttons/FavBtn/FavBtn";
import Btn from "../Buttons/Btn/Btn";
import {Logo} from "../../data/images/index";

function Header() {
   return (
      <div className={styles.header}>
         <div className={styles.navbar}>
               <Link to="/"><img className={styles.navbar_logo} src={Logo} alt="Logo"/></Link>
               <ul className={styles.navbar_links}>
                  <li className={styles.navbar_link}>
                     <Link to="/">Home</Link>
                  </li>
                  <li className={styles.navbar_link}>
                     <Link to="/tours">Tours</Link>
                  </li>
                  <li className={styles.navbar_link}>
                     <Link to="/about">About</Link>
                  </li>
                  <li className={styles.navbar_link}>
                     <Link to="/help">Help</Link>
                  </li>
               </ul>
               <div className={styles.navbar_btns}>
                  <Link to="/favourite">
                     <FavBtn task={"link"}/>
                  </Link>
                  <Link to="/">
                     <Btn text={"sign in"} />
                  </Link>
               </div>
         </div>
      </div>
   );
}

export default Header;