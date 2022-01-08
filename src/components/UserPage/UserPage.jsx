import React, { useEffect, useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import "./UserPage.css";

function UserPage() {
  const dispatch = useDispatch();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const hats = useSelector((store) => store.setUserHats);


  useEffect(() => {
      dispatch({ type: "GET_USER_HATS" });
  }, [user.id]);

  console.log("UserPage.jsx user.id:", user.id);

  const [editDescription, setEditDescription] = useState("");
  const [editUrl, setEditUrl] = useState("");
  const [editColor, setEditColor] = useState("");
  const [editStyle, setEditStyle] = useState("");
  const [editFabric, setEditFabric] = useState("");
  const [editVibe, setEditVibe] = useState("");
  const [editId, setEditId] = useState("");

  const editDescriptionChange = (e) => {
    console.log("descriptionChange:", e.target.value);
    setEditDescription(e.target.value);
  };

  const editUrlChange = (e) => {
    setEditUrl(e.target.value);
  };

  const editColorChange = (e) => {
    setEditColor(e.target.value);
  };

  const editStyleChange = (e) => {
    setEditStyle(e.target.value);
  };

  const editFabricChange = (e) => {
    setEditFabric(e.target.value);
  };

  const editVibeChange = (e) => {
    setEditVibe(e.target.value);
  };

  const captureID = (e) => {
    setEditId(e.target.id)
  }


  // function clearInputs() {
  //   setEditDescription("");
  //   setEditUrl("");
  //   setEditColor("");
  //   setEditStyle("");
  //   setEditFabric("");
  //   setEditVibe("");
  //   setEditId("");
  // }

  function editHat() {
    e.preventDefault();
    console.log("click editHat");
    dispatch({
      type: "EDIT_HAT",
      payload: {
        description: editDescription,
        photo_url: editUrl,
        hat_color: editColor,
        hat_style: editStyle,
        hat_fabric: editFabric,
        hat_vibe: editVibe,
        id: editId,
      },
    });
    // clearInputs();
  }

  const deleteHat = (id) => {
    console.log("delete button click");
    dispatch({
      type: "DELETE_HAT",
      payload: id,
    });
    dispatch({ type: "GET_USER_HATS" });
  };

  const editBtn = (e) => {
    e.preventDefault();
    // console.log("edit btn click", e.target.id);
    setEditId(e.target.id);
    console.log('e.target.id:', e.target.id);
    console.log('editId:', editId);


    // let element = document.getElementsByClassName("edit-form");
    // element.classList.toggle("hidden");

    // // const editForm = document.getElementById("edit-form");
    // if (editForm.style.display === "none") {
    //   editForm.style.display = "block";
    // } else {
    //   editForm.style.display = "none";
    // }
  }

  // console.log('random hat id:', getRandomHatId(hats.length));
  // console.log(hats[getRandomHatId()].description);
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
            <Button id={hat.id} variant="contained" className="btn" onClick={editBtn}>
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

            <Paper className="edit-form">
              <>
                <h1>Edit Hat</h1>
                <form onSubmit={(e) => editHat(e)}>
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
                    sx={{ m: 2 }}
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
                  <Button type="submit" variant="contained">
                    Submit Edit
                  </Button>
                </form>
              </>
            </Paper>
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
