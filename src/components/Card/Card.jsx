import React from 'react';
import styles from "./Card.module.scss"
import Btn from "../Buttons/Btn/Btn";
import FavBtn from "../Buttons/FavBtn/FavBtn";

function Card({data, task}) {
   return (
      <div className={styles.card}>
         <img
            src={data.flight.links.flickr_images[0]}
            className={styles.card_img}
            alt={data.flight.mission_name}
         />
         <div className={styles.card_content}>
            <p className={styles.card_title}>{data.title}</p>
            <p className={styles.card_descr}>{data.flight.mission_name}</p>
            <div className={styles.card_btns} >
               <Btn text={"buy"}/>
               <FavBtn id={data.id} task={task}/>
            </div>
         </div>
      </div>
   );
}

export default Card;