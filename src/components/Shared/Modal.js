import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styles from "./modal.module.scss";
// import { useState, useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose, data }) {
  console.log(data[data.name]);
  // const handleUpdate = async () => {
  //   const reponse = await fetch();
  // };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} type="form">
          <form className={styles.formContainer}>
            <input defaultValue={data[data.name]}></input>
            <button type="submit">Mettre à jour</button>
          </form>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
        </Box>
      </Modal>
    </div>
  );
}
