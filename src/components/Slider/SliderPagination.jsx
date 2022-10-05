import React from 'react';
import IconSvgSelector from "../assets/IconSvgSelector";

function SliderPagination({arr, currentIndex, setCurrentIndex, color}) {

   return (
      <>
         {arr.map((elem, index) => {
            if (index === currentIndex) {
               return (
                  <span
                     key={`Pag${index+1}`}
                     onClick={() => setCurrentIndex(index)}
                  >
                     <IconSvgSelector id={`slide-current-${color}`}/>
                  </span>
               )
            } else {
               return (
                  <span
                     key={`Pag${index+1}`}
                     onClick={() => setCurrentIndex(index)}
                  >
                     <IconSvgSelector id={`slide-${color}`}/>
                  </span>
               )
            }
         })}
      </>
   );
}

export default SliderPagination;