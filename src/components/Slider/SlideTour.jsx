import React from 'react';
import Card from "../Card/Card";

function SlideTour({groupSlides}) {
   return (
      <>
         {groupSlides.map(slide => (
            <Card
               key={slide.id}
               data={slide}
               task={"addToFav"}
            />
         ))}
      </>
   );
}

export default SlideTour;