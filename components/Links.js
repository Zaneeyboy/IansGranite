import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components/Links.module.css";

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
export default Links;
