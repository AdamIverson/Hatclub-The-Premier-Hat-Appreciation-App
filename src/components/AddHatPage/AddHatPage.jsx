import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Paper, TextField } from "@mui/material";
import './AddHatPage.css'
// this is a real ride, folks
// AddHat form uses local state to collect the data from the form inputs

function AddHatPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  let [newDescription, setNewDescription] = useState("");
  let [newPhotoUrl, setNewPhotoUrl] = useState("");
  let [newColor, setNewColor] = useState("");
  let [newStyle, setNewStyle] = useState("");
  let [newFabric, setNewFabric] = useState("");
  let [newVibe, setNewVibe] = useState("");

  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleUrlChange = (e) => {
    setNewPhotoUrl(e.target.value);
  };

  const handleColorChange = (e) => {
    setNewColor(e.target.value);
  };

  const handleStyleChange = (e) => {
    setNewStyle(e.target.value);
  };

  const handleFabricChange = (e) => {
    setNewFabric(e.target.value);
  };

  const handleVibeChange = (e) => {
    setNewVibe(e.target.value);
  };

  const addNewHat = (e) => {
    console.log("addNewHat click");
    e.preventDefault();

    // the old spatchy-spatch
    dispatch({
      type: "ADD_HAT",
      payload: {
        description: newDescription,
        photo_url: newPhotoUrl,
        hat_color: newColor,
        hat_style: newStyle,
        hat_fabric: newFabric,
        hat_vibe: newVibe,
      },
    });
    // redirect user to Hats Time page
    history.push("/hats_time");
  };

  return (
    <>
      <h1>Add One Hat</h1>
      <Paper>
        <form 
          onSubmit={(e) => addNewHat(e)}
          className="editForm">
          <TextField
            sx={{ m: 2 }}
            label="enter description"
            onChange={handleDescriptionChange}
            value={newDescription}
            type="text"
            placeholder="description"
            required
            focused
          />
          {/* <br /> */}
          <TextField
            sx={{ m: 2 }}
            label="enter photo url"
            onChange={handleUrlChange}
            value={newPhotoUrl}
            type="text"
            placeholder="photo url"
            required
            focused
          />
          {/* <br /> */}
          <TextField
            sx={{ m: 2 }}
            label="enter hat color"
            onChange={handleColorChange}
            value={newColor}
            type="text"
            placeholder="hat color"
            required
            focused
          />
          {/* <br /> */}
          <TextField
            sx={{ m: 2 }}
            label="enter hat style"
            onChange={handleStyleChange}
            value={newStyle}
            type="text"
            placeholder="hat style"
            required
            focused
          />
          {/* <br /> */}
          <TextField
            sx={{ m: 2 }}
            label="enter hat fabric"
            onChange={handleFabricChange}
            value={newFabric}
            type="text"
            placeholder="hat fabric"
            required
            focused
          />
          {/* <br /> */}
          <TextField
            sx={{ m: 2 }}
            label="enter hat vibe"
            onChange={handleVibeChange}
            value={newVibe}
            type="text"
            placeholder="hat vibe"
            required
            focused
          />
          {/* <br /> */}
          <Button
            p={30}
            className="edit-btn"
            type="submit" 
            variant="contained">
            Add One Hat
          </Button>
        </form>
      </Paper>
    </>
  );
}

export default AddHatPage;
