import styles from "./styles/SinglePage.module.css";
import {ArrayList} from "./ArrayList";

export default function SinglePage(props) {
  const { selectedMenu, selectedOption } = props;
  const page = Object.values(ArrayList)[selectedMenu][selectedOption];
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={page.icon} alt="" />
        <h2 className={styles.heading}>{page.name} </h2>
      </div>
    </>
  );
}
