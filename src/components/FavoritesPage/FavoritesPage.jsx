import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import "./FavoritesPage.css";

function FavoritesPage() {
  const dispatch = useDispatch();
  // bring in user info and favorite table
  // favorites for specific user are selected in router,
  //  using user.id, which is attached to the dispatch once or twice
  const user = useSelector((store) => store.user);
  const favs = useSelector((store) => store.setFavs);

  console.log("favs:", favs);
  console.log("user.id:", user.id);

  useEffect(() => {
    dispatch({
      type: "GET_FAVS",
      payload: user.id,
    });
  }, [user.id]);

  return (
    <>
      <h1>FAVORHATS</h1>
      <Grid m={3} container spacing={3} direction="row">
        {favs.map((fav) => (
          <Grid
            className="outer"
            item
            key={fav.hat_id}
            m={5}
            padding={5}
            display="flex"
            // sx={{ background: purple[300] }}
          >
            {/* <Paper 
              sx={{ background: purple[300] }}
              className="paper"> */}
              <img
                // width={2}
                sm={12}
                src={`${fav.photo_url}?w=164&h=164&fit=crop&auto=format`}
              ></img>
              <ul>
                <li>Description: {fav.description}</li>
              </ul>
            {/* </Paper> */}
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default FavoritesPage;
