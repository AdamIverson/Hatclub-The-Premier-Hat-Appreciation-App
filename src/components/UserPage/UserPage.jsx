import React, { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
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
      payload: e.target.value
    })
  };

  const editUrlChange = (e) => {
    // setEditUrl(e.target.value);
    dispatch({
      type: "EDIT_PHOTO_URL",
      payload: e.target.value
    })
  };

  const editColorChange = (e) => {
    // setEditColor(e.target.value);
    dispatch({
      type: "EDIT_HAT_COLOR",
      payload: e.target.value
    })
  };

  const editStyleChange = (e) => {
    // setEditStyle(e.target.value);
    dispatch({
      type: "EDIT_HAT_STYLE",
      payload: e.target.value
    })
  };

  const editFabricChange = (e) => {
    // setEditFabric(e.target.value);
    dispatch({
      type: "EDIT_HAT_FABRIC",
      payload: e.target.value
    })
  };

  const editVibeChange = (e) => {
    // setEditVibe(e.target.value);
    dispatch({
      type: "EDIT_HAT_VIBE",
      payload: e.target.value
    })
  };

  // const captureID = (e) => {
  //   setEditId(e.target.id)
  // }

  // function clearInputs() {
  //   setEditDescription("");
  //   setEditUrl("");
  //   setEditColor("");
  //   setEditStyle("");
  //   setEditFabric("");
  //   setEditVibe("");
  //   setEditId("");
  // }

  const editHat = (e) => {
    e.preventDefault();
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
    // let el = document.getElementById(e.target.value);
    // el.className = "hidden";
    dispatch({ type: "GET_USER_HATS" });

    // clearInputs();
  }

  const deleteHat = (id) => {
    console.log("delete button click");
    dispatch({
      type: "DELETE_HAT",
      payload: id,
    });
    dispatch({ type: "GET_USER_HATS" });
    // editBtn();
  };

  // const toggleClass = (e) => {
  //   console.log("toggleClass CLICK");
  //   let el = document.getElementById(e.target.value)
  //   // let el = document.getElementById(`${hats[0].id}`);
  //   if (el.className === "hidden") {
  //     el.className = "block";
  //   } else {
  //     el.className = "hidden";
  //   }
  // }

  // the edit button registers the hat id of the photo AND
  // displays the edit form
  // edit btn hides form if clicked again
  const editBtn = (e) => {
    console.log("EDIT BTN CLICK e.target.value:", e.target.value);

    dispatch({
      type: "FETCH_ONE_HAT",
      payload: e.target.value
    })

    let el = document.getElementById(e.target.value);
    if (el.className === "hidden") {
      el.className = "block";
    } else {
      el.className = "hidden";
    }
    // toggleClass();
    // e.target.classList.add("hidden")

    // document.getElementsByClassName("edit-form")[0].toggle("hidden");
    // console.log('element:', element);
    // element.classList.toggle("hidden");

    // const editForm = document.getElementsByClassName("edit-form");
    // if (editForm.style.display === "none") {
    //   editForm.style.display = "block";
    // } else {
    //   editForm.style.display = "none";
    // }
  };

  return (
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
      <p>Your ID is: {user.id}</p>
      <h2>Your Hats</h2>
      <Box>
        {hats.map((hat) => (
          <Box key={hat.id} item xs={6}>
            <img src={hat.photo_url}></img>
            <p>HAT ID: {hat.id}</p>
            <p>Creator ID: {hat.creator_id}</p>
            <p>Description: {hat.description}</p>
            <p>Color: {hat.hat_color}</p>
            <p>Style: {hat.hat_style}</p>
            <p>Fabric: {hat.hat_fabric}</p>
            <p>Vibe: {hat.hat_vibe}</p>

            <Button
              value={hat.id}
              variant="contained"
              className={`${hat.id}`}
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
            >
              DELETE
            </Button>

            <div id={hat.id} className="hidden">
              <Paper>
                <>
                  <h1>Edit Hat</h1>
                  <form
                    // className="edit-form hidden"
                    onSubmit={editHat}
                  >
                    <TextField
                      sx={{ m: 2 }}
                      label="enter new description"
                      onChange={editDescriptionChange}
                      value={hatToEdit.description || ''}
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
                </>
              </Paper>
            </div>
          </Box>
        ))}
        {/* <Button
          variant="contained"
          className="btn"
          onClick={editBtn}>Edit</Button> */}
        {/* <Paper
        className="edit-form hidden">
        <>
      <h1>Edit Hat</h1>
      <form 
        onSubmit={(e) => editHat(e)}>
        <TextField
          sx={{ m: 2 }}
          label="enter new description"
          onChange={editDescriptionChange}
          value={editDescription}
          type="text"
          placeholder="new description"
          focused
        />
        <br />
        <TextField
          sx={{ m: 2}}
          label="enter new photo url"
          onChange={editUrlChange}
          value={editUrl}
          type="text"
          placeholder="new photo url"
          focused
        />
        <br />
        <TextField
          sx={{ m: 2 }}
          label="enter new hat color"
          onChange={editColorChange}
          value={editColor}
          type="text"
          placeholder="new hat color"
          focused
        />
        <br />
        <TextField
          sx={{ m: 2 }}
          label="enter new hat style"
          onChange={editStyleChange}
          value={editStyle}
          type="text"
          placeholder="new hat style"
          focused
        />
        <br />
        <TextField
          sx={{ m: 2 }}
          label="enter new hat fabric"
          onChange={editFabricChange}
          value={editFabric}
          type="text"
          placeholder="new hat fabric"
          focused
        />
        <br />
        <TextField
          sx={{ m: 2 }}
          label="enter new hat vibe"
          onChange={editVibeChange}
          value={editVibe}
          type="text"
          placeholder="new hat vibe"
          focused
        />
        <br />
        <Button 
          type="submit" 
          variant="contained"
          onClick={editHat}
          >
          Submit Edit
        </Button>
      </form>
    </>
        </Paper> */}
      </Box>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
