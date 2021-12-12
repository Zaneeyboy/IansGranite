import styles from "../styles/components/Banner.module.css";
import Image from "next/image";

const Banner = () => {
  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.lead}>
          <p>Suppliers of granite, marble and quartz countertops.</p>
        </div>
        <div className={styles.lead_cta_container}>
          <a className={styles.lead_cta} href="tel:8686204109">
            Call for a free consultation!
          </a>
        </div>
        {/* <Icons /> */}
      </div>

      <Image
        src="/images/brown.jpg"
        width={2000}
        height={750}
        layout="intrinsic"
        alt="Countertop"
        priority={true}
      />
    </section>
  );
};
export default Banner;
