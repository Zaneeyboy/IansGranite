import styles from "../styles/components/CTA.module.css";
import Image from "next/image";
const CTA = () => {
  return (
    <section className={styles.CTA}>
      <div>
        <h2 className={styles.emphasis_text}>
          Get started on your next project today!
        </h2>
        <a className={styles.button} href="tel:868-620-4109">
          Call Now!
        </a>
      </div>
    </section>
  );
};

export default CTA;
