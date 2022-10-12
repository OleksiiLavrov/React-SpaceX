import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import styles from "./Favourite.module.scss";

import {clearFavourite} from "../../redux-toolkit/favouriteSlice";
import Card from "../../components/Card/Card";
import {HeroBanner2} from "../../data/images";



function Favourite() {
   const toursData = useSelector(state => state.favourite.tours);
   const fetchedData = useSelector(state => state.fetchedData.data);
   const dispatch = useDispatch();
   const favouriteList = []; // list of items in current page
   fetchedData.forEach(tour => {
      toursData?.forEach(tourId => {
         if (tour.id === tourId) {
            favouriteList.push(tour);
         }
      })
   })

   const clickHandler = () => {
      dispatch(clearFavourite())
      toast.error(`All tours were deleted!`)
   }
   return (
      <div className={styles.container}>
         <div className={styles.container_banner} style={{backgroundImage: `url(${HeroBanner2})`}}>
            <h1 className={styles.container_title}>Favourites</h1>
         </div>
         <div className={styles.container_contentWrapper}>
            {favouriteList.length === 0 ? '' :
               <div className={styles.container_btn}>
                  <button onClick={clickHandler}>Clear all</button>
               </div>
            }
            <div className={styles.container_cards}>
            {favouriteList.length !== 0
               ? favouriteList.map(elem => (
                  <Card
                     key={`Favourite item ${elem.id}`}
                     data={elem}
                     task={'delete'}
                  />
               ))
               : <div className={styles.container_empty}>
                  <p>Your Favourites list is empty!</p>
                 </div>
            }
            </div>
         </div>
      </div>
   );
}

export default Favourite;