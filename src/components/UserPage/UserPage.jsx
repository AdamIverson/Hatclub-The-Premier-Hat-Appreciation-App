import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';

function UserPage() {
  const dispatch = useDispatch();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const hats = useSelector((store) => store.setHats);

  useEffect(() => {
    getRandomHatId();
    dispatch({ type: "GET_HATS" });
  }, []);

  const maxHats = hats.length;

  function getRandomHatId(min, max) {

    min = Math.ceil(1);
    max = Math.floor(maxHats)

    return Math.floor(Math.random() * (max - min) + min)
  }

// console.log('random hat id:', getRandomHatId(hats.length));
// console.log(hats[getRandomHatId()].description);
  return (
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
      <p>Your ID is: {user.id}</p>
      <h2>Rando Hat</h2>
      <Box>
        {/* <img
          src={`${hats[getRandomHatId()].photo_url}`}
          alt={`${hats[getRandomHatId()].description}`}>
        </img> */}
        {/* <p>{`${hats[getRandomHatId()].description}`}</p> */}

        {/* {hats.map((hat) => (
          <img
          src={`${hat.photo_url}`}
          alt={hat.description}
          >
          </img>
        ))} */}
      </Box>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
