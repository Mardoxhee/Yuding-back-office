import styles from "./reservation.module.scss";
import CollapsibleTable from "./ReservationTabs";

const Reservations = () => {
  return (
    <div className={styles.wrapper}>
      <CollapsibleTable />
    </div>
  );
};

export default Reservations;
