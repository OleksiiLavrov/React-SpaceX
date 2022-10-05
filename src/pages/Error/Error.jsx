import React from 'react';

function Error({error}) {
   return (
      <>
         <div>{error}</div>
         <p>Oops...</p>
      </>
   );
}

export default Error;