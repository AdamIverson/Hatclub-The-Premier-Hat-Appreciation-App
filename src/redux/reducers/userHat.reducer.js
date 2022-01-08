const setUserHats = (state = [], action) => {
  console.log('userHat.reducer action:', action)
  
        switch (action.type) {
            case 'SET_USER_HATS':
              return action.payload;
            default:
              return state;

    }
}

export default setUserHats;