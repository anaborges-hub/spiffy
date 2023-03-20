import React from 'react';
import styles from './homepage.module.css';

// const closet = require('./closet.png');

function Homepage() {
  return (
    <>
      <section>
        <div className={styles.bg}>
          {/* <img src={closet} alt="closet" /> */}
        </div>
        <div className={styles.container}>
          <button type="button" className={styles.stbutton}>
            Get started
          </button>
        </div>
      </section>
    </>
  );
}

export default Homepage;
