import React, {useState} from 'react';
import {useSelector} from "react-redux";
import styles from "./Slider.module.scss"
import IconSvgSelector from "../assets/IconSvgSelector";

import {HeroBanner1, HeroBanner2, HeroBanner3} from "../../data/images";
import Card from "../Card/Card";
import SlideTour from "./SlideTour";
import SliderPagination from "./SliderPagination";
import SliderNavigation from "./SliderNavigation";




function Slider({style}) {
   const [toursSliderCurrent, setToursSliderCurrent] = useState(0);
   const [heroSliderCurrent, setHeroSliderCurrent] = useState(0);
   const heroSlides = [HeroBanner1, HeroBanner2, HeroBanner3];
   const toursSlides = useSelector(state => state.fetchedData.convertedData);

   return (
      <>
         {style === "hero-slider"
            ? <div className={styles.swiperHero}>
               <div className={styles.swiperHero_slide} style={{backgroundImage: `url(${heroSlides[heroSliderCurrent]}`}}>
                  <div className={styles.swiperHero_pagination}>
                     <SliderPagination
                        arr={heroSlides}
                        currentIndex={heroSliderCurrent}
                        setCurrentIndex={setHeroSliderCurrent}
                        color={"white"}
                     />
                  </div>
               </div>
            </div>
            : <div className={styles.swiperTours}>
               <div className={styles.swiperTours_navigation}>
                  <SliderNavigation
                     arr={toursSlides}
                     currentIndex={toursSliderCurrent}
                     setCurrentIndex={setToursSliderCurrent}
                  />
               </div>
                  {toursSlides.map((groupSlides, index) => (
                     <div
                        key={`${index}-slides`}
                        className={styles.swiperTours_slider}
                     >
                        {index === toursSliderCurrent ? <SlideTour groupSlides={groupSlides}/> : ''}
                     </div>
                  ))}
               <div className={styles.swiperTours_pagination}>
                  <SliderPagination
                     arr={toursSlides}
                     currentIndex={toursSliderCurrent}
                     setCurrentIndex={setToursSliderCurrent}
                     color={"black"}
                  />
               </div>
            </div>
         }

      </>
   );
}

export default Slider;