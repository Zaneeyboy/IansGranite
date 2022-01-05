import styles from "../styles/components/Banner.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Links = () => {
  return (
    <>
      <div className={styles.container}>
        <a href="facebook.com" className={styles.link}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a href="instagram.com" className={styles.link}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="whatsapp.com" className={styles.link}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="tiktok.com" className={styles.link}>
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a href="gmail.com" className={styles.link}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="gmail.com" className={styles.link}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </a>
      </div>
    </>
  );
};

const Banner = () => {
  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.lead}>
          <p>Suppliers of granite, marble and quartz countertops.</p>
        </div>
        <div className={styles.lead_cta_container}>
          <a className={styles.lead_cta} href="tel:8686204109">
            Book a free consultation!
          </a>
        </div>
        <Links />
      </div>

      <Image
        src="/images/brown.jpg"
        width={2000}
        height={800}
        layout="intrinsic"
        alt="Countertop"
        priority={true}
      />
    </section>
  );
};
export default Banner;
