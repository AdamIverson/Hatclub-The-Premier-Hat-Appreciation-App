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
    dispatch ({ type: "GET_FAVS" })
  }, []);

  // add a hat to favs
  const favHat = (hat) => {
    console.log("fav button click", hat.hat.id);

    for (let fav of favs) {
      console.log('fav', fav);
      if (hat.hat.hat_id === fav.hat_id) {
        return dispatch({
          type: "ADD_FAV",
          payload: {
            hat_id: hat.hat.id,
          },
        });
      } else {
        return window.alert("it's sad to fav ur own photo");
      }
    }
  };

  const unFavHat = (hat) => {
    console.log('on our way, unfav btn', hat.hat.id);
    // dispatch({
    //   type: "DELETE_FAV",
    //   payload: {
    //     id: hat.hat.id,
    //   }
    // })
  }

  // // This code is meant to teach me how okay it is to move code into a component
  // // But this code does not collect the id of the hat, so when it's clicked it only
  // //  submits the user.id - which is frustrating
  function FavBtn(hat) {
    console.log("FavBtn Click:", hat.hat.id);
    console.log("hat:", hat);
    if (!user.id) {
      return <p>Register To Login To Fav</p>;
    } else {
      for (let fav of favs){
        console.log("fav:", fav);
        return <p>hey</p>;
      }
    }
    // } else if (hat.hat.id > 15) {
    //   return (
    //     <Button
    //       id={hat.hat.id}
    //       onClick={(e) => unFavHat(hat)}
    //       variant="contained" 
    //       color="warning">
    //       UNFAV
    //     </Button>
    //   );
    // } else if (user.id < 16) {
    //   return (
    //     <Button
    //       sx={{ m: 1 }}
    //       onClick={(e) => favHat(hat)}
    //       id={hat.hat.id}
    //       className="photoButton"
    //       variant="contained"
    //     >
    //       FavBtn
    //     </Button>
    //   );
    // }
  }

  // dropping a mui grid container
  // mapping through all of the hats
  // rendering said hats as grid items
  // with an image and a Fav Button that only works for users who are logged in
  // would love to remove the Fav Button for guest users, but can't until the component one works
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {hats.map((hat) => (
          <Grid key={hat.id} item xs={6}>
            <img
              src={`${hat.photo_url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${hat.photo_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={hat.description}
              loading="lazy"
              key={hat.id}
            />
            <ButtonGroup className="buttonGroup" size="small">
              <FavBtn hat={hat} />
            </ButtonGroup>
            <ul>
              <li>Creator ID: {hat.creator_id}</li>
              <li>Description: {hat.description}</li>
              <li>Vibe: {hat.hat_vibe}</li>
            </ul>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
