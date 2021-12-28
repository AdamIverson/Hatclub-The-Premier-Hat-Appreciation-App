import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, ImageList, ImageListItem, ImageListItemBar, TextField, NativeSelect } from "@mui/material";


export default function HatsTimePage() {
  const dispatch = useDispatch();
  const hats = useSelector((store) => store.setHats);
  console.log(hats);

  useEffect(() => {
    dispatch({ type: "GET_HATS" });
  }, []);

  const favHat = (id) => {
    console.log("fav button click");
  };

  const deleteHat = (id) => {
    console.log("delete button click");
    dispatch({
      type: "DELETE_HAT",
      payload: id,
    });
  };

  return (
    <Box
      sx={{
        width: 1000,
        height: 900

      }}
    >
      <ImageList 
        sx={{ width: 1000, height: 900 }} 
        cols={3} 
        rowHeight={164}
        // variant="masonry"
        >
        {hats.map((hat) => (
          <ImageListItem key={hat.id}>
            <img
              src={`${hat.photo_url}?w=450&h=450&fit=crop&auto=format`}
              srcSet={`${hat.photo_url}?w=450&h=450&fit=crop&auto=format&dpr=2 2x`}
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
      </ImageList>
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
