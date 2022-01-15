import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper } from "@mui/material";
import { blue, purple } from "@mui/material/colors";

function FavoritesPage() {
  const dispatch = useDispatch();
  // bring in user info and favorite table
  // favorites for specific user are selected in router,
  //  using user.id, which is attached to the dispatch once or twice
  const user = useSelector((store) => store.user);
  const favs = useSelector((store) => store.setFavs);

  console.log("favs:", favs);
  console.log("user.id:", user.id)

  useEffect(() => {
    dispatch({
      type: "GET_FAVS",
      payload: user.id,
    });
  }, [user.id]);


  return (
    <>
      <h1>FAVORHATS</h1>
    <Grid
      m={3}
      container
      spacing={3}
      direction="row"
      >
        {favs.map((fav) => (
          <Grid 
            item 
            key={fav.hat_id}
            boxShadow={5}
            m={5}
            padding={5}
            sx={{ background: purple[300] }}
            >
            <Paper
              sx={{ backgroundColor: blue[200] }}>
              <img 
                // width={2}
                sm={12}
                src={`${fav.photo_url}?w=164&h=164&fit=crop&auto=format`}>
              </img>
              <ul>
                  <li>Description: {fav.description}</li>
                </ul>
            </Paper>
            </Grid>
        ))}

    </Grid>
    </>
  )
  // return (
  //   <>
  //     <h1>Favorhats</h1>
  //     <div>
  //       {favs.map((fav) => (
  // // this key becomes an issue if duplicates exist on the favorite table
  // // the goal is to fix this by rendering an unfav btn after hat is faved by user,
  // //  thereby making the duplication of user/hat combos on the favorite table impossible, maybe
  //         <div key={fav.hat_id}>
  //           <img src={fav.photo_url}></img>
  //           <ul>
  //             <li>{fav.description}</li>
  //           </ul>
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );
}

export default FavoritesPage;
