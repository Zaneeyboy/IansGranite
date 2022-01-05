import styles from "../styles/components/Tile.module.css";
import Image from "next/image";

const Tile = (props) => {
  return (
    <div className={styles.tile}>
      <Image
        className={styles.img}
        src={props.src}
        alt={props.alt}
        width={400}
        height={300}
        layout="intrinsic"
      />
    </div>
  );
};

export default Tile;
