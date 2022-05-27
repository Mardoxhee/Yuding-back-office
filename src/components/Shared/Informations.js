import styles from "./informations.module.scss";
import { Icon } from "@iconify/react";
// import TimePickers from "./TimePicker";
import { useState, useEffect } from "react";
import authHeader from "../../services/AuthHeader";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import Moment from "moment";
// import queryString from "query-string";

const Informations = () => {
  const [restaurant, setRestaurant] = useState({});
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = (item) => {
    const { key, value, name } = item;
    setData({ ...data, [key]: value, name });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const token = searchParams.get("userInfo");
  // const restaurantId = searchParams.get("restaurantId");
  // searchParams.delete("userInfo");
  // console.log("restaurantId", restaurantId);
  console.log("token", token);

  if (token !== null) {
    localStorage.setItem("user", token);
  }

  const getRestaurantInformations = async () => {
    try {
      const url = "https://yuding.herokuapp.com/restaurants/by-account";
      const requestoptions = {
        method: "GET",
        headers: authHeader(),
      };
      const response = await fetch(url, requestoptions);
      console.log("response", response);
      const restaurantData = await response.json();
      console.log(restaurantData.restaurant);
      setRestaurant(...restaurantData.restaurant);
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    getRestaurantInformations();
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* {restaurant.slice(0, 1).map((restaurant) => {
        return ( */}
      <Modal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        data={data}
      />
      <div>
        <div className={styles.restaurantNameContenair}>
          <p>Nom du restaurant : </p>
          <label>{restaurant.restaurantName}</label>
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "restaurantName",
                  value: restaurant.restaurantName,
                  name: "restaurantName",
                })
              }
            />
          </small>
        </div>
        <div className={styles.restaurantNameDescription}>
          <p>Description du restaurant :</p>
          <label>{restaurant.description}</label>
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "description",
                  value: restaurant.description,
                  name: "description",
                })
              }
            />
          </small>
        </div>
        <div className={styles.restaurantNameDescription}>
          <p>Adresse du restaurant :</p>
          <label>{restaurant.adress}</label>
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "adress",
                  value: restaurant.adress,
                  name: "adress",
                })
              }
            />
          </small>
        </div>

        <div className={styles.coverPicture}>
          <p>Photo de profile:</p>
          <input type="file" />
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "coverPicture",
                  value: restaurant.coverPicture,
                  name: "coverPicture",
                })
              }
            />
          </small>
        </div>
        <div className={styles.timePicker}>
          <p>Heure d'ouverture :</p>
          <p> {Moment(restaurant.openTime).format("hh:mm:ss A")} </p>
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "openTime",
                  value: restaurant.openTime,
                  name: "openTime",
                })
              }
            />
          </small>
        </div>
        <div className={styles.timePicker}>
          <p>Heure de fermeture :</p>
          <p> {Moment(restaurant.closeTime).format("hh:mm:ss A")} </p>
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "closeTime",
                  value: restaurant.closeTime,
                  name: "closeTime",
                })
              }
            />
          </small>
        </div>
        <div className={styles.restaurantNameContenair}>
          <p>Pays :</p>
          <label>{restaurant.pays}</label>
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "pays",
                  value: restaurant.pays,
                  name: "pays",
                })
              }
            />
          </small>
        </div>
        <div className={styles.restaurantNameContenair}>
          <p>Prix moyen</p>
          <label>{restaurant.prixMoyen}</label>
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "prixMoyen",
                  value: restaurant.prixMoyen,
                  name: "prixMoyen",
                })
              }
            />
          </small>
        </div>
        <div className={styles.restaurantNameContenair}>
          <p>Reduction</p>
          <label>{restaurant.reduction} %</label>
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "reduction",
                  value: restaurant.reduction,
                  name: "reduction",
                })
              }
            />
          </small>
        </div>
        <div className={styles.restaurantNameContenair}>
          <p>Nombre de place</p>
          <label>{restaurant.nbrPlaces}</label>
          <small>
            <Icon
              icon="bytesize:edit"
              onClick={() =>
                handleOpen({
                  key: "nbrPlaces",
                  value: restaurant.nbrPlaces,
                  name: "nbrPlaces",
                })
              }
            />
          </small>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default Informations;
