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
  const favs = useSelector((store) => store.setFavs);
  console.log("favs:", favs);
  console.log("hats:", hats);
  console.log("user.id:", user.id);

  useEffect(() => {
    dispatch({ type: "GET_HATS" });
    // dispatch ({ type: "GET_FAVS" })
  }, []);

  // add a hat to favs
  const favHat = (id) => {
    console.log("fav button click", id);
    dispatch({
      type: "ADD_FAV",
      payload: {
        id: id,
      },
    });
  };


  // This code is meant to teach me how okay it is to move code into a component
  // But this code does not collect the id of the hat, so when it's clicked it only
  //  submits the user.id - which is frustrating
  function FavBtn(hat) {
    console.log("FavBtn Click,:", hat);
    console.log("hat:", hat);
    if (!user.id) {
      return <p>Register To Login To Fav</p>;
    } else {
      return (
        <Button
          sx={{ m: 1 }}
          onClick={(e) => favHat(hat.id)}
          id={hat.id}
          className="photoButton"
          variant="contained"
        >
          FavBtn
        </Button>
      );
    }
  }


  //dropping a mui grid container
  // mapping through all of the hats
  // rendering said hats as grid items
  // with an image and a Fav Button that only works for users who are logged in
  // would love to remove the Fav Button for guest users, but can't until the component one works
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {hats.map((hat) => (
          <Grid key={hat.id} item xs={6}>
            {/* <Item> */}
            <img
              src={`${hat.photo_url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${hat.photo_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={hat.description}
              loading="lazy"
              key={hat.id}
            />
            <ButtonGroup className="buttonGroup" size="small">
              <FavBtn hat={hat} />

              <Button
                sx={{ m: 1 }}
                onClick={(e) => favHat(hat.id)}
                id={hat.id}
                className="photoButton"
                variant="contained"
              >
                FAV
              </Button>
              {/* <Button
                sx={{ m: 1 }}
                onClick={(e) => deleteHat(hat.id)}
                className="photoButton"
                variant="contained"
                color="warning"
              >
                DELETE
              </Button> */}
            </ButtonGroup>
            <ul>
              <li>Creator ID: {hat.creator_id}</li>
              <li>Description: {hat.description}</li>
              <li>Vibe: {hat.hat_vibe}</li>
            </ul>
            {/* </Item> */}
          </Grid>
        ))}
      </Grid>
      {/* <ImageList
        cols={3} 
        rowHeight={164}
        // variant="masonry"
        >
        {hats.map((hat) => (
          <ImageListItem key={hat.id}>
            <img
              src={`${hat.photo_url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${hat.photo_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={hat.description}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={hat.description} />
            <Button 
              onClick={favHat}
              variant="contained"
              >
                FAV
            </Button>
            <Button 
              onClick={e => deleteHat(hat.id)}
              variant="outlined"
              color="warning"
              >
                DELETE
            </Button>
          </ImageListItem>
        ))}
      </ImageList> */}
    </Box>

    // <>
    //   <h1>HATS TIME</h1>
    //   <ul>
    //     {hats.map((hat) => {
    //       return (
    //         <li key={hat.id}>
    //           <img height="300px" src={hat.photo_url}/>
    //           <p>{hat.description}</p>
    //           <p>{hat.hat_color}</p>
    //           <p>{hat.hat_style}</p>
    //           <p>{hat.hat_fabric}</p>
    //           <p>{hat.hat_vibe}</p>
    //           <button onClick={favHat}>FAV</button>
    //           <button onClick={e => deleteHat(hat.id)}>DELETE</button>
    //         </li>
    //       )
    //     })}
    //   </ul>
    // </>
  );
}
