import styles from "./Main.module.css";
// Components
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Navbar from "./components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <Navbar />
          <HeroBanner />
        </div>
      </header>
      <main></main>
      <footer>footer</footer>
    </div>
  );
};

export default Main;
