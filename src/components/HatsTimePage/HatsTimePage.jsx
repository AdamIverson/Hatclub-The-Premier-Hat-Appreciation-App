import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Grid,
  ListItem,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  TextField,
  NativeSelect,
} from "@mui/material";
import { boxShadow } from '@mui/system'
import "./HatsTime.css";

export default function HatsTimePage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // Bring in the hats
  const hats = useSelector((store) => store.setHats);
  // Bringing in the whole slate of favs on the Hats Time page might not be necessary
  // but won't it be easier to check if a hat already exists in the db?
  // this probably isn't the best way, but I'll be closer to understanding the best way after doing this
  const favs = useSelector((store) => store.setFavs);
  console.log("favs1:", favs);
  console.log("hats:", hats);
  console.log("user.id:", user.id);

  useEffect(() => {
    dispatch({ type: "GET_HATS" });
    dispatch({ type: "GET_FAVS" });
  }, []);

  // add a hat to favs
  const favHat = (hat) => {
    console.log("favHat hat.id:", hat.id);
    return dispatch({
      type: "ADD_FAV",
      payload: {
        hat_id: hat.id,
      },
    });
  };

  const unFavHat = (hat) => {
    console.log("on our way, unfav btn hat.id:", hat.id);
    return dispatch({
      type: "DELETE_FAV",
      payload: {
        hat_id: hat.id,
      },
    });
  };

  // // This code is meant to teach me how okay it is to move code into a component
  // // But this code does not collect the id of the hat, so when it's clicked it only
  // //  submits the user.id - which is frustrating
  function FavBtn({ hat }) {
    console.log("FavBtn Click:", hat.id);
    console.log("hat:", hat);
    if (!user.id) {
      return <a href="/register">Register To Login To Fav</a>;
    } else {
      for (let fav of favs) {
        if (fav.hat_id === hat.id) {
          return (
            <Button
              size="small"
              sx={{ color: "yellow", boxShadow: 10 }}
              id={hat.id}
              onClick={(e) => unFavHat(hat)}
              variant="contained"
              className="photoButton"
              color="error"
            >
              UNFAVORITE
            </Button>
          );
        }
      }
      return (
        <Button
          size="small"
          sx={{ color: "yellow", boxShadow: 10 }}
          onClick={(e) => favHat(hat)}
          id={hat.id}
          className="photoButton"
          variant="contained"
          color="secondary"
        >
          add to favorites
        </Button>
      );
    }
  }

  // dropping a mui grid container
  // mapping through all of the hats
  // rendering said hats as grid items
  // with an image and a Fav Button that only works for users who are logged in
  // would love to remove the Fav Button for guest users, but can't until the component one works
  return (
    <Box
      className="main">
      <h1>hats time!</h1>
      <Grid
        rowSpacing={1}
        columnSpacing={{xs: 1, sm: 2 }}
        alignItems="center"
        direction="row"
        className="grid"
        sx={{ width: 100 }}
        container 
        >
        {hats.map((hat) => (
          <Grid 
            xs={3}
            className="photo"
            key={hat.id} 
            item 
            sx={{ boxShadow: 20, m: 1 }}
            style={{ height:'100%' }}>
            <img
              src={`${hat.photo_url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${hat.photo_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={hat.description}
              loading="lazy"
              key={hat.id}
            />
            <br/>
              <FavBtn hat={hat} />
            <ul>
              <li>Hat ID: {hat.id}</li>
              <li>Creator: FIX THIS PAL</li>
              <li>Description: {hat.description}</li>
              <li>Vibe: {hat.hat_vibe}</li>
            </ul>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
