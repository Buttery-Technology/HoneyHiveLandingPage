import { Button, Modal } from "../../Global";
import { useModal } from "../../../hooks";
import butteryai from "../../../assets/logos/butteryai.png";
import styles from "./HomeHero.module.scss";

const HomeHero = () => {
  const { modal, button } = useModal();

  return (
    <>
      <main className={styles.homeHero}>
        <img src={butteryai} alt="ButteryAI" className={styles.butteryai} />
        <h1 className={styles.title}>
          Disrupt the <span className={styles.greenish}>future</span> with the world’s first{" "}
          <span className={styles.blueish}>distributed AI</span> platform
        </h1>
        <p className={styles.intro}>
          Build, grow, or integrate AI into your business with ButteryAI so fast it’ll feel buttery smooth. ButteryAI is
          the only platform for both online and enterprise customers where transparency, privacy, and trust are metrics
          you can verify. Oh, and did we say it’s super fast? Yeah, it’s super fast.
        </p>
        <Button className={styles.button} ref={button}>
          Join Waitlist
        </Button>
      </main>
      <Modal ref={modal} />
    </>
  );
};

export default HomeHero;
