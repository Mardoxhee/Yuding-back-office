import styles from "./restaurant.module.scss";
import * as React from "react";

import BasicTabs from "./../../components/Shared/Tabs";

// import BasicTabs from "./../../components/Shared/Tabs";

const Restaurants = () => {
  return (
    <div className={styles.container}>
      <BasicTabs />
    </div>
  );
};
export default Restaurants;
