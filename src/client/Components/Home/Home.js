import React, { useState } from 'react';

import im from '../../assets/systemsdesign.png';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Systems Design Practice</h1>
      <div className={styles.imgcontaner}>
        <img src={im} alt="systems design" />
      </div>
    </div>
  );
};

export default Home;
