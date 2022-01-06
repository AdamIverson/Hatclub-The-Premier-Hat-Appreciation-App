import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from '@mui/material';

function FavoritesPage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const favs = useSelector((store) => store.setFavs);

  console.log('favs:', favs);

  useEffect(() => {
    dispatch({ type: "GET_FAVS" });
  }, []);

  return (
    <>
      <h1>Favorhats</h1>
      <div>
        {favs.map((fav) => (
          <img 
            key={fav.id}
            src={fav.photo_url}></img>
        ))}
      </div>
    </>
  )
}

export default FavoritesPage;