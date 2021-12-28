import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import './AddHatPage.css';

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
    history.push("/hats_time");
  };

  return (
    <>
      <h1>Add Hat</h1>
      <form onSubmit={(e) => addNewHat(e)}>
        <TextField
          className="inputField"
          onChange={handleDescriptionChange}
          value={newDescription}
          type="text"
          placeholder="description"
        />
        <TextField
          className="inputField"
          onChange={handleUrlChange}
          value={newPhotoUrl}
          type="text"
          placeholder="photo url"
        />
        <TextField
          className="inputField"
          onChange={handleColorChange}
          value={newColor}
          type="text"
          placeholder="hat color"
        />
        <TextField
          className="inputField"
          onChange={handleStyleChange}
          value={newStyle}
          type="text"
          placeholder="hat style"
        />
        <TextField
          className="inputField"
          onChange={handleFabricChange}
          value={newFabric}
          type="text"
          placeholder="hat fabric"
        />
        <TextField
          className="inputField"
          onChange={handleVibeChange}
          value={newVibe}
          type="text"
          placeholder="hat vibe"
        />
        <Button type="submit"
        variant="outlined">Add One Hat</Button>
      </form>
    </>
  );
}

export default AddHatPage;
