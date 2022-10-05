import React, {useEffect, useState} from 'react';
import styles from "./FavBtn.module.scss";
import toast from 'react-hot-toast';
import IconSvgSelector from "../../assets/IconSvgSelector";
import {useDispatch, useSelector} from "react-redux";
import {addToFavourite, delFromFavourite} from "../../../redux-toolkit/favouriteSlice";



function FavBtn({id, task}) {
   const [isActive, setIsActive] = useState(false);
   const dispatch = useDispatch();
   const toursData = useSelector(state => state.favourite.tours);

   const toggleItem = () => {
      if (toursData.includes(id)) {
         dispatch(delFromFavourite(id))
         setIsActive(false)
         toast.error(`The tour has been deleted from Favourites...`)
      } else {
         dispatch(addToFavourite(id))
         toast.success('The tour has been added to Favourites!')
         setIsActive(true)
      }
   }

   const deleteItem = () => {
      dispatch(delFromFavourite(id))
   };

   let style;
   if (task === "addToFav") {
      if (isActive) {
         style = {backgroundColor: "#DD377D"};
      } else {
         style = {backgroundColor: "#ECECEC"};
      }
   } else {
      style = {backgroundColor: "#ECECEC"};
   }

   useEffect(() => {
      if (toursData.includes(id)) {
         setIsActive(true);
      }
   }, []);


   return (
      <button
         className={styles.favButton}
         onClick={task === "addToFav" ? toggleItem : deleteItem}
         style={style}
      >
         {task === "delete" && <IconSvgSelector id={"delete"} />}
         {task === "link" && <IconSvgSelector id={"fav-list"} />}
         {task === "addToFav" && isActive && <IconSvgSelector id={"fav-list-white"} />}
         {task === "addToFav" && !isActive && <IconSvgSelector id={"fav-list"} />}
      </button>
   );
}

export default FavBtn;