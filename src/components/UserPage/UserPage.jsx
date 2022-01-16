import React, { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import "./UserPage.css";

function UserPage() {
  const dispatch = useDispatch();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  // but then all hell breaks loose when our guy adam decides to make this the Profile page
  // now we are rendering all of the hats uploaded by the user
  // we have an edit form so user can adjust details of their hats
  // the goal is to populate the edit hat form with the existing info from db
  // would love to clear inputs and hide form following submit

  const user = useSelector((store) => store.user);
  const hats = useSelector((store) => store.setUserHats);
  const hatToEdit = useSelector((store) => store.editHat);

  console.log("hats", hats);

  useEffect(() => {
    dispatch({ type: "GET_USER_HATS" });
  }, [user.id]);

  console.log("UserPage.jsx user.id:", user.id);

  // const [editDescription, setEditDescription] = useState("");
  // const [editUrl, setEditUrl] = useState("");
  // const [editColor, setEditColor] = useState("");
  // const [editStyle, setEditStyle] = useState("");
  // const [editFabric, setEditFabric] = useState("");
  // const [editVibe, setEditVibe] = useState("");
  // const [editId, setEditId] = useState("");

  const editDescriptionChange = (e) => {
    console.log("descriptionChange:", e.target.value);
    // setEditDescription(e.target.value);
    dispatch({
      type: "EDIT_DESCRIPTION",
      payload: e.target.value,
    });
  };

  const editUrlChange = (e) => {
    // setEditUrl(e.target.value);
    dispatch({
      type: "EDIT_PHOTO_URL",
      payload: e.target.value,
    });
  };

  const editColorChange = (e) => {
    // setEditColor(e.target.value);
    dispatch({
      type: "EDIT_HAT_COLOR",
      payload: e.target.value,
    });
  };

  const editStyleChange = (e) => {
    // setEditStyle(e.target.value);
    dispatch({
      type: "EDIT_HAT_STYLE",
      payload: e.target.value,
    });
  };

  const editFabricChange = (e) => {
    // setEditFabric(e.target.value);
    dispatch({
      type: "EDIT_HAT_FABRIC",
      payload: e.target.value,
    });
  };

  const editVibeChange = (e) => {
    // setEditVibe(e.target.value);
    dispatch({
      type: "EDIT_HAT_VIBE",
      payload: e.target.value,
    });
  };

  const editHat = (e) => {
    // e.preventDefault();
    // console.log("click editHat e.target.value:", e.target.value);
    dispatch({
      type: "EDIT_HAT",
      payload: {
        description: hatToEdit.description,
        photo_url: hatToEdit.photo_url,
        hat_color: hatToEdit.hat_color,
        hat_style: hatToEdit.hat_style,
        hat_fabric: hatToEdit.hat_fabric,
        hat_vibe: hatToEdit.hat_vibe,
        id: hatToEdit.id,
      },
    });
    dispatch({ type: "GET_USER_HATS" });
  };

  const deleteHat = (id) => {
    console.log("delete button click");
    dispatch({
      type: "DELETE_HAT",
      payload: id,
    });
    dispatch({ type: "GET_USER_HATS" });
  };

  // the edit button registers the hat id of the photo AND
  // displays the edit form
  // edit btn hides form if clicked again
  const editBtn = (e) => {
    console.log("EDIT BTN CLICK e.target.value:", e.target.value);

    dispatch({
      type: "FETCH_ONE_HAT",
      payload: e.target.value,
    });

    let el = document.getElementById(e.target.value);
    if (el.className === "hidden") {
      el.className = "block";
    } else {
      el.className = "hidden";
    }
  };

  return (
    <div alignItems="center" className="container">
      <h1>Welcome, {user.username}!</h1>
      {/* <p>Your ID is: {user.id}</p> */}
      <h2>Your Hats</h2>
      <Grid container alignItems="center">
        {hats.map((hat) => (
          <Grid 
            className="photos" 
            key={hat.id} 
            item>
            <img src={hat.photo_url}></img>
            <ul className="list">
              <li>HAT ID: {hat.id}</li>
              <li>Creator ID: {hat.creator_id}</li>
              <li>Description: {hat.description}</li>
              <li>Color: {hat.hat_color}</li>
              <li>Style: {hat.hat_style}</li>
              <li>Fabric: {hat.hat_fabric}</li>
              <li>Vibe: {hat.hat_vibe}</li>
              <li><Button
                value={hat.id}
                variant="contained"
                className={`${hat.id} photoButton`}
                onClick={editBtn}
              >
                Edit
              </Button></li>
              <li>
              <Button
                sx={{ m: 1 }}
                onClick={(e) => deleteHat(hat.id)}
                className="photoButton"
                variant="contained"
                color="warning"
              >
                DELETE
              </Button>
              </li>
            </ul>
            {/* <ButtonGroup
                className="btngrp">
              <Button
                value={hat.id}
                variant="contained"
                className={`${hat.id} photoButton`}
                onClick={editBtn}
              >
                Edit
              </Button>
              <Button
                sx={{ m: 1 }}
                onClick={(e) => deleteHat(hat.id)}
                className="photoButton"
                variant="contained"
                color="warning"
              >DELETE</Button>
            </ButtonGroup> */}

            <div id={hat.id} className="hidden">
              <Paper
                className="paper"
                style={{ width: '400px', justifyContent: 'center', backgroundColor: '#eff0f7'}}>
                <h3>Edit Hat</h3>
                <form
                  className="editForm"
                  // className="edit-form hidden"
                  onSubmit={editHat}
                >
                  <TextField
                    sx={{ m: 2 }}
                    label="enter new description"
                    onChange={editDescriptionChange}
                    value={hatToEdit.description || ""}
                    type="text"
                    // placeholder="new description"
                    focused
                  />
                  <br />
                  <TextField
                    sx={{ m: 2 }}
                    label="enter new photo url"
                    onChange={editUrlChange}
                    value={hatToEdit.photo_url || ""}
                    type="text"
                    placeholder="new photo url"
                    focused
                  />
                  <br />
                  <TextField
                    sx={{ m: 2 }}
                    label="enter new hat color"
                    onChange={editColorChange}
                    value={hatToEdit.hat_color || ""}
                    type="text"
                    // placeholder="new hat color"
                    focused
                  />
                  <br />
                  <TextField
                    sx={{ m: 2 }}
                    label="enter new hat style"
                    onChange={editStyleChange}
                    value={hatToEdit.hat_style || ""}
                    type="text"
                    // placeholder="new hat style"
                    focused
                  />
                  <br />
                  <TextField
                    sx={{ m: 2 }}
                    label="enter new hat fabric"
                    onChange={editFabricChange}
                    value={hatToEdit.hat_fabric || ""}
                    type="text"
                    // placeholder="new hat fabric"
                    focused
                  />
                  <br />
                  <TextField
                    sx={{ m: 2 }}
                    label="enter new hat vibe"
                    onChange={editVibeChange}
                    value={hatToEdit.hat_vibe || ""}
                    type="text"
                    // placeholder="new hat vibe"
                    focused
                  />
                  <br />
                  <Button type="submit" variant="contained">
                    Submit Edit
                  </Button>
                </form>
              </Paper>
            </div>
          </Grid>
        ))}
      </Grid>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
