import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";

function FavoritesPage() {
  const dispatch = useDispatch();
  // bring in user info and favorite table
  // favorites for specific user are selected in router,
  //  using user.id, which is attached to the dispatch once or twice
  const user = useSelector((store) => store.user);
  const favs = useSelector((store) => store.setFavs);

  console.log("favs:", favs);

  useEffect(() => {
    dispatch({
      type: "GET_FAVS",
      payload: user.id,
    });
  }, [user.id]);

  return (
    <>
      <h1>Favorhats</h1>
      <div>
        {favs.map((fav) => (
  // this key becomes an issue if duplicates exist on the favorite table
  // the goal is to fix this by rendering an unfav btn after hat is faved by user,
  //  thereby making the duplication of user/hat combos on the favorite table impossible, maybe
          <div key={fav.hat_id}>
            <img src={fav.photo_url}></img>
            <ul>
              <li>{fav.description}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default FavoritesPage;
