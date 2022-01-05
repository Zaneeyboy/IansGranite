import styles from "../styles/components/Testimonials.module.css";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>What our customers are saying about us</h2>
      <div className={styles.testimonial_box}>
        <Image
          className={styles.image}
          src="/images/white.jpg"
          alt="Granite Countertop"
          width={800}
          height={300}
          layout="intrinsic"
        />
        <div className={styles.text}>
          <p className={styles.testimonial}>
            <span className={styles.apostrophe}>&quot;</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            justo donec enim diam vulputate ut pharetra sit amet.
            <span className={styles.apostrophe}>&quot;</span>
          </p>
          <p className={styles.name}>- Gucci Mohammed</p>
        </div>
      </div>
      <div className={styles.testimonial_box}>
        <div className={styles.text}>
          <p className={styles.testimonial}>
            <span className={styles.apostrophe}>&quot;</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            justo donec enim diam vulputate ut pharetra sit amet.
            <span className={styles.apostrophe}>&quot;</span>
          </p>
          <p className={styles.name}>- Elsa Mohammed</p>
        </div>
        <Image
          className={styles.image}
          src="/images/white_grey.jpg"
          alt="Granite Countertop"
          width={800}
          height={300}
          layout="intrinsic"
        />
      </div>
      <div className={styles.testimonial_box}>
        <Image
          className={styles.image}
          src="/images/grey.jpg"
          alt="Granite Countertop"
          width={800}
          height={300}
          layout="intrinsic"
        />
        <div className={styles.text}>
          <p className={styles.testimonial}>
            <span className={styles.apostrophe}>&quot;</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            justo donec enim diam vulputate ut pharetra sit amet.
            <span className={styles.apostrophe}>&quot;</span>
          </p>
          <p className={styles.name}>- Tobyyet Mohammed</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
