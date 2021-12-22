const setHats = (state = [], action) => {
  console.log(action)
        switch (action.type) {
            case 'SET_HATS':
              return action.payload;
            default:
              return state;

    }
}

export default setHats;