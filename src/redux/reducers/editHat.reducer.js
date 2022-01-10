// not wired in or functional, meant to be used down the line to populate edit form

const editHat = (state = {}, action) => {
  console.log("userHat.reducer action:", action);

  switch (action.type) {
    case "EDIT_HAT":
      return {
        description: "Testing!",
      };
    default:
      return state;
  }
};

export default editHat;
