import React from 'react';
import IconSvgSelector from "../../assets/IconSvgSelector";

function SliderNavigation({arr, currentIndex, setCurrentIndex}) {
   const nextSlide = () => {
      if (currentIndex !== (arr.length - 1)) {
         setCurrentIndex(prevState => prevState + 1)
      }
   }

   const prevSlide = () => {
      if (currentIndex !== 0) {
         setCurrentIndex(prevState => prevState - 1)
      }
   }

   return (
      <>
         <button onClick={prevSlide}><IconSvgSelector id={"arrow-left"}/></button>
         <button onClick={nextSlide}><IconSvgSelector id={"arrow-right"}/></button>
      </>
   );
}

export default SliderNavigation;