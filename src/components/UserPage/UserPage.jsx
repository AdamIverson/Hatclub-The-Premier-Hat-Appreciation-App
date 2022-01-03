import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Paper, TextField } from '@mui/material';
import './UserPage.css'

function UserPage() {
  const dispatch = useDispatch();
  event.preventDefault();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const hats = useSelector((store) => store.setHats);

  useEffect(() => {
    getRandomHatId();
    // editBtn();
    dispatch({ type: "GET_HATS" });
  }, []);

  let [editDescription, setEditDescription] = useState("");
  let [editUrl, setEditUrl] = useState("");
  let [editColor, setEditColor] = useState("");
  let [editStyle, setEditStyle] = useState("");
  let [editFabric, setEditFabric] = useState("");
  let [editVibe, setEditVibe] = useState("");

  const editDescriptionChange = (e) => {
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

  const maxHats = hats.length;

  function getRandomHatId(min, max) {

    min = Math.ceil(1);
    max = Math.floor(maxHats)

    return Math.floor(Math.random() * (max - min) + min)
  }

  function editHat() {
    console.log('click editHat');
    dispatch({
      type: 'EDIT_HAT',
      payload: {
        description: editDescription,
        photo_url: editUrl,
        hat_color: editColor,
        hat_style: editStyle,
        hat_fabric: editFabric,
        hat_vibe: editVibe
      }
    });
  };

  function editBtn() {
    console.log('edit btn click');

    let element = document.getElementsByClassName("edit-form")
    console.log(element);
    element[0].classList.toggle("hidden");
    // element.classList.toggle("hidden");

    // const editForm = document.getElementById("edit-form");
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
      <h2>Rando Hat</h2>
      <Box>
        {/* <img
          src={`${hats[getRandomHatId()].photo_url}`}
          alt={`${hats[getRandomHatId()].description}`}>
        </img> */}
        {/* <p>{`${hats[getRandomHatId()].description}`}</p> */}

        {/* {hats.map((hat) => (
          <img
          src={`${hat.photo_url}`}
          alt={hat.description}
          >
          </img>
        ))} */}
      </Box>
      <h2>Your Hats</h2>
      <Box>
        <img src="http://www.adamiversonphotography.com/uploads/1/0/7/0/107020049/film-beetle-convertible-1_orig.jpg"></img>
        <Button
          variant="contained"
          className="btn"
          onClick={editBtn}>Edit</Button>
        <Paper
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
        </Paper>
      </Box>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
