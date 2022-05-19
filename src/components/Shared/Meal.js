import styles from "./meal.module.scss";
import MealCard from "./MealCard";

import TextField from "@mui/material/TextField";

const Menu = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.printed}>
        <div className={styles.bloc}>
          <h2>Plats d'entrée</h2>
          <div className={styles.cardContainer}>
            <MealCard />
            <MealCard />
            <MealCard />
            <MealCard />
            <MealCard />
          </div>
        </div>
        <div className={styles.bloc}>
          <h2>Plats Principaux</h2>
          <div className={styles.cardContainer}>
            <MealCard />
            <MealCard />
            <MealCard />
            <MealCard />
          </div>
        </div>
        <div className={styles.bloc}>
          <h2>Desserts</h2>
          <div className={styles.cardContainer}>
            <MealCard />
            <MealCard />
            <MealCard />
            <MealCard />
          </div>
        </div>
      </div>
      <div className={styles.formSide}>
        <form>
          <label>Créer un met</label>
          <div className={styles.inputsWrapper}>
            <TextField
              id="outlined-basic"
              label="Nom du met"
              variant="outlined"
              className={styles.textfieldIpt}
            />

            <TextField
              id="outlined-basic"
              label="Coût minimal"
              variant="outlined"
              className={styles.textfieldIpt}
            />
            <select className={styles.textfieldIpt}>
              <option>choisir le type de met</option>
              <option>principal</option>
              <option>entree</option>
              <option>dessert</option>
            </select>
            <label>Uploader une image de mise en avant</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="file"
              className={styles.textfieldFl}
            />
            <TextField
              label="Description"
              multiline
              variant="outlined"
              rows={4}
              type="input"
              className={styles.textfieldFl}
            />
          </div>
          <button>Créer</button>
        </form>
      </div>
    </div>
  );
};

export default Menu;
