import styles from './homepage.module.css';

type Props = {
  children: React.ReactNode;
};

function Homepage({ children }: Props) {
  return <div className={styles.background}>{children}</div>;
}

export default Homepage;
