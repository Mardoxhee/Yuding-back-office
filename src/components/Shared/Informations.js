import styles from "./informations.module.scss";
import { Icon } from "@iconify/react";
import TimePickers from "./TimePicker";
import { useState, useEffect } from "react";
import authHeader from "../../services/AuthHeader";
import { useLocation } from "react-router-dom";
// import queryString from "query-string";

const Informations = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const token = searchParams.get("userInfo");
  if (token !== null) {
    localStorage.setItem("user", JSON.stringify(token));
  }

  const getRestaurantInformations = async () => {
    try {
      const url = "http://yuding.herokuapp.com/restaurants/by-account";
      const requestoptions = {
        // method: "GET",
        headers: authHeader(),
      };
      const response = await fetch(url, requestoptions);
      console.log(await response.json());
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getRestaurantInformations();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.restaurantNameContenair}>
        <p>Nom du restaurant : </p>
        <label>Yuding</label>
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
      <div className={styles.restaurantNameDescription}>
        <p>Description du restaurant :</p>
        <label>
          Ars restaurant et un retaurant haut de gamme de renommé internationale
          qui reçoit toue sorte de blablabla lance
        </label>
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
      <div className={styles.restaurantNameDescription}>
        <p>Adresse du restaurant :</p>
        <label>AV. kabinda N°15b kinshasa gombe</label>
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
      <div className={styles.coverPicture}>
        <p>Photo de couverture:</p>
        <input type="file" />
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
      <div className={styles.coverPicture}>
        <p>Photo de profile:</p>
        <input type="file" />
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
      <div className={styles.timePicker}>
        <p>Heure d'ouverture :</p>
        <TimePickers />
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
      <div className={styles.timePicker}>
        <p>Heure de fermeture :</p>
        <TimePickers />
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
      <div className={styles.restaurantNameContenair}>
        <p>Pays :</p>
        <label>Congo RD</label>
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
      <div className={styles.restaurantNameContenair}>
        <p>Prix moyen</p>
        <label>50$</label>
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
      <div className={styles.restaurantNameContenair}>
        <p>Reduction</p>
        <label>30%</label>
        <small>
          <Icon icon="bytesize:edit" />
        </small>
      </div>
    </div>
  );
};

export default Informations;
