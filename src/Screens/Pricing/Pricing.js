import React from "react";
import Icon from "../../components/UI/Icon/Icon";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Pricing.module.css";
const Pricing = () => {
  return (
    <div className={styles.container}>
      <section className={styles.pricingContainer}>
        <Navbar></Navbar>
        <article className={styles.pricingDescription}>
          <h1 className={styles.title}>Pricing</h1>
          <p>
            Test out our app today! Choose from three subscription Based payment
            models.
          </p>
        </article>
        <section className={styles.pricingTypes}>
          <div className={styles.basic}>
            <div className={styles.pricingTypeTitle}>
              <h2>Basic</h2>
              <hr />
              <h2>Monthly</h2>
              <h1>$9</h1>
            </div>
            <ul>
              <li>Very good</li>
              <li>Amazing</li>
              <li>Perfect job</li>
              <li>Love this</li>
              <li>It's so good</li>
              <li>Features</li>
            </ul>
            <button>Select</button>
          </div>
          <div className={styles.advanced}>
            <div className={styles.pricingTypeTitle}>
              <h2>Advanced</h2>
              <hr />
              <h2>Yearly</h2>
              <h1>$99</h1>
            </div>
            <ul>
              <li>Very very good</li>
              <li>Even Amazing</li>
              <li>Perfect job</li>
              <li>Love this more</li>
              <li>It's so so good</li>
              <li>More Features</li>
            </ul>
            <button>Select</button>
          </div>
          <div className={styles.pro}>
            <div className={styles.pricingTypeTitle}>
              <h2>PRO</h2>
              <hr />
              <h2>Yearly</h2>
              <h1>$120</h1>
            </div>
            <ul>
              <li>Very very good</li>
              <li>Even more</li>
              <li>Perfectjob</li>
              <li>Love this more</li>
              <li>It's so so good</li>
              <li>More Features</li>
            </ul>
            <button>Select</button>
          </div>
        </section>
      </section>
      <section className={styles.perksContainer}>
        <Navbar/>
        <div className={styles.perkTitle}>
          <h1 className={styles.title}>perks</h1>
        </div>
        <article className={styles.textContainer}>
          <div className={styles.perkText}>
            <hr />
            <h3>Subscription Payment Model</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
          <div className={styles.perkText}>
            <hr />
            <h3>No Fee Cancelation Policy</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
          <div className={styles.perkText}>
            <hr />
            <h3>Subscription Payment Model</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
        </article>
        
      </section>
      <footer>
          <div className={styles.email}>
            <Icon icon="envelope" />
            support@experienceconcerts.co
          </div>
          <h4>EXP|CON</h4>
          <h6>
            2019 &copy; All rights Reserved | Speer Technologies incorporated
          </h6>
        </footer>
    </div>
  );
};
export default Pricing;
