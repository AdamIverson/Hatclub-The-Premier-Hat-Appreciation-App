const setFavs = (state = [], action) => {
  console.log('fav.reducer action:', action)
  
        switch (action.type) {
            case 'SET_FAVS':
              return action.payload;
            default:
              return state;

    }
}

export default setFavs;