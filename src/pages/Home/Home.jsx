import React from 'react';
import styles from "./Home.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import Slider from "../../components/Slider/Slider";
import IconSvgSelector from "../../components/assets/IconSvgSelector";
import Card from "../../components/Card/Card";
import {useSelector} from "react-redux";

function Home() {
   const fetchedData = useSelector(state => state.fetchedData.data);
   return (
      <div className={styles.container}>
         <section className={styles.container_sliderWrapper}>
            <Slider style={"hero-slider"} />
            <div className={styles.container_title}>
               <h2 className={styles.container_titleSmall}>The space is waiting for</h2>
               <h1 className={styles.container_titleBig}>You</h1>
            </div>
            <Link
               activeClass="active"
               to="best-tours"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500}
            >
               <p className={styles.container_text} >
                  <span>Explore tours</span>
                  <IconSvgSelector id={"arrow-down"}/>
               </p>
            </Link>
         </section>

         <section id="best-tours" className={styles.contentWrapper}>
            <div className={styles.contentWrapper_cards}>
               <h3 className={styles.contentWrapper_title}>Popular tours</h3>
               <Slider />
            </div>

         </section>
      </div>
   );
}

export default Home;