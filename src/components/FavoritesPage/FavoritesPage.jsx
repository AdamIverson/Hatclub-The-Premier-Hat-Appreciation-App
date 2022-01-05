import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from '@mui/material';

function FavoritesPage() {
  const dispatch = useDispatch();
  const favs = useSelector((store) => store.setFavs);
  console.log(favs);

  return (
    <>
      <h1>Favorhats</h1>
    </>
  )
}

export default FavoritesPage;