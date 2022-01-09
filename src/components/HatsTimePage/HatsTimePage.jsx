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
// import FavBtn from "../FavBtn/FavBtn";

export default function HatsTimePage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const hats = useSelector((store) => store.setHats);
  console.log(hats);
  console.log("user.id:", user.id)

  useEffect(() => {
    dispatch({ type: "GET_HATS" });
  }, []);

  const favHat = (id) => {
    console.log("fav button click", id);
    dispatch({
      type: "ADD_FAV",
      payload: {
        id: id,
      },
    });
  };

  function Test() {
    if (!user.id) {
   return <p>ope</p>
  } else {
    return <Button>Fav</Button>
  }
  }

  // function FavBtn() {
  //   {user.id ? 
  //       <button>FAV</button>
  //   :
  //     <p>NOT FAVE</p>
  // }
  // //   if (user.id) {
  // //   return (
  // //     <Button
  // //       sx={{ m: 1 }}
  // //       onClick={(e) => favHat(hat.id)}
  // //       id={props.id}
  // //       className="photoButton"
  // //       variant="contained"
  // //     >
  // //       FAV
  // //     </Button>
  // //   );
  // // } else {
  // //   return <p>Winner</p>;
  // // }
  // }
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
            <Test />

              {/* <Button
                sx={{ m: 1 }}
                onClick={(e) => favHat(hat.id)}
                id={hat.id}
                className="photoButton"
                variant="contained">
                FAV
              </Button>
              <Button
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
