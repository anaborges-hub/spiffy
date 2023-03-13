import styles from './homepage.module.css';

function Homepage() {
  return (
    <>
      <div className="bg">this is a picture</div>
      <img src="assets/closet.jpg" alt="closet" />
      <div>
        <button type="button" className={styles.button}>
          Get started
        </button>
      </div>
    </>
  );
}

export default Homepage;
