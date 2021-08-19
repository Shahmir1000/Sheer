import React from 'react';
import styles from "./HeroBanner.module.css";
import Button from '../UI/Button/Button';
const HeroBanner = ()=>{
  return (
    <section className={styles.heroBanner}>
      <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
      <h3 className={styles.subHeading}>
        Experience your favourite artists like never before and from the
        comfort of your own home.
      </h3>
      <Button btnType='gradient' size="large">try it now</Button>
    </section>
  )
}

export default HeroBanner;