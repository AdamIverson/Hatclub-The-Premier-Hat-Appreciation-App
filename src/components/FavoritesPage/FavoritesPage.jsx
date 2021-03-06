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
      <Grid m={3} container spacing={3} direction="row" justifyContent={"flex"}>
        {favs.map((fav) => (
          <Grid
            className="outer"
            item
            key={fav.hat_id}
            m={3}
            sm={12}
            padding={2}
            display="flex"
            color="#f5f37d"
          >
            <img
              src={`${fav.photo_url}?w=164&h=164&fit=crop&auto=format`}
              alt={`${fav.description}`}
            ></img>
            <table>
              <thead>
                <th>
                  HATCREATOR:
                </th>
                <th>{fav.creator_id}</th>
              </thead>
              <hr />
              <tr>
                <td>Hat Tag:</td>
                <td>{fav.hat_id}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{fav.description}</td>
              </tr>
              <tr>
                <td>Color:</td>
                <td>{fav.hat_color}</td>
              </tr>
              <tr>
                <td>Style:</td>
                <td>{fav.hat_style}</td>
              </tr>
              <tr>
                <td>Fabric:</td>
                <td>{fav.hat_fabric}</td>
              </tr>
              <tr>
                <td>Vibe:</td>
                <td>{fav.hat_vibe}</td>
              </tr>
            </table>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default FavoritesPage;
