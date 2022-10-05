import React from 'react';
import styles from "./Btn.module.scss"

function Btn({text}) {
   return (
      <button
         className={styles.button}
         style={text === "sign in" ? {padding: '12px 34px'} : {padding: '12px 112px'}}
      >{text}</button>
   );
}

export default Btn;