import { Button, Modal } from "../../Global";
import { useModal } from "../../../hooks";
import butteryai from "../../../assets/logos/butteryai.png";
import melting from "../../../assets/images/melting-footer.svg";
import styles from "./HomeFooter.module.scss";

const HomeFooter = () => {
  const { modal, button } = useModal();

  return (
    <>
      <footer className={styles.homeFooter}>
        <div className={styles.wrapper}>
          <img src={butteryai} alt="ButteryAI" className={styles.butteryai} />
          <h1 className={styles.title}>
            <span>Join</span> ButteryAI today!
          </h1>
          <Button className={styles.button} ref={button}>
            Join Waitlist
          </Button>
        </div>
        <img src={melting} alt="Melting" className={styles.melting} />
        <p className={styles.copyright}>© 2024 Buttery Technology Inc.</p>
      </footer>
      <Modal ref={modal} />
    </>
  );
};

export default HomeFooter;
