import React from 'react';
import styles from "./Loading.module.scss";
import GifLoader from 'react-gif-loader';

function Loading() {

   return (
      <div className={styles.loading}>
         <div className={styles.loading_content}>
            <p className={styles.loading_text}>Loading</p>
            <div>
               <GifLoader
                  loading={true}
                  imageSrc="https://media.tenor.com/tga0EoNOH-8AAAAM/loading-load.gif"
                  imageStyle={{width: '60px', height: '60px'}}
                  overlayBackground="rgba(0,0,0,0.5)"
               />
            </div>
         </div>
      </div>
   );
}

export default Loading;