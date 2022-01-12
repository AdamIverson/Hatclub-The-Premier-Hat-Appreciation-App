// gets only the hats associated with logged in user

const setUserHats = (state = [], action) => {
  console.log("userHat.reducer action.payload:", action.payload);

  switch (action.type) {
    case "SET_USER_HATS":
      return action.payload;
    default:
      return state;
  }
};

export default setUserHats;
