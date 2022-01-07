import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from '@mui/material';

function FavoritesPage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const favs = useSelector((store) => store.setFavs);

  console.log('favs:', favs);

  useEffect(() => {
    dispatch({ 
      type: "GET_FAVS",
      payload: user.id
     });
  }, [user.id]);

  return (
    <>
      <h1>Favorhats</h1>
      <div>
        {favs.map((fav) => (
          <div key={fav.hat_id}>
          <img 
            src={fav.photo_url}></img>
            <ul>
              <li>{fav.description}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default FavoritesPage;