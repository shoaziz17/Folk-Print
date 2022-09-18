import styles from "../styles/Count.module.scss";
import CountUp from "react-countup";
import { FaInstagram, FaDonate, FaUsers } from "react-icons/fa";
function Count() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.box}>
            <FaInstagram className={styles.icon} />
            <CountUp
              className={styles.number}
              end={15000}
              duration={2.75}
              enableScrollSpy={true}
              useEasing={true}
            />
            <h2>followers</h2>
          </div>
          <div className={styles.box}>
            <FaDonate className={styles.icon} />
            <CountUp
              className={styles.number}
              end={100}
              duration={2.75}
              enableScrollSpy={true}
              useEasing={true}
            />
            <h2>weekly sale</h2>
          </div>
          <div className={styles.box}>
            <FaUsers className={styles.icon} />
            <CountUp
              className={styles.number}
              end={50}
              duration={2.75}
              enableScrollSpy={true}
              useEasing={true}
            />
            <h2>partners</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Count;
