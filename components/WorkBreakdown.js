import styles from "../styles/components/workbreakdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckPickup,
  faHome,
  faTools,
  faSink,
} from "@fortawesome/free-solid-svg-icons";

const WorkBreakdown = () => {
  return (
    <section className={styles.workbreakdown}>
      <h2 className={styles.heading}>Our Work Process</h2>
      <div className={styles.grid}>
        <div className={styles.box}>
          <div className={styles.grid_section}>
            <i className={styles.icon}>
              <FontAwesomeIcon icon={faHome} />
            </i>
            <p className={styles.grid_title}>Site Visit</p>
          </div>

          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.grid_section}>
            <i className={styles.icon}>
              <FontAwesomeIcon icon={faTools} />
            </i>
            <p className={styles.grid_title}>Fabrication</p>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.grid_section}>
            <i className={styles.icon}>
              <FontAwesomeIcon icon={faTruckPickup} />
            </i>
            <p className={styles.grid_title}>Transportation</p>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.box}>
          <div className={styles.grid_section}>
            <i className={styles.icon}>
              <FontAwesomeIcon icon={faSink} />
            </i>
            <p className={styles.grid_title}>Installation</p>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkBreakdown;
