import React from 'react';
import styles from "./Error.module.scss";
import {HeroBanner3} from "../../data/images";

function Error({error}) {
   return (
      <div className={styles.error} style={{backgroundImage: `url(${HeroBanner3})`}}>
         <div className={styles.error_content}>
            <p className={styles.error_text}>Something went wrong...</p>
            <p className={styles.error_message}>{error}</p>
         </div>
      </div>
   )
}

export default Error;