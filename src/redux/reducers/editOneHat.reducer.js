const editOneHat = (state = {}, action) => {
  console.log("editOneHat.reducer action:", action);

  switch (action.type) {
    case "SET_ONE_HAT":
      return action.payload;
    default:
      return state;
  }
};

export default editOneHat;