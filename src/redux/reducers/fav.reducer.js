const setFavs = (state = [], action) => {
  console.log('fav.reducer action:', action)
  console.log('fav.reducer action.payload:', action.payload);
  
        switch (action.type) {
            case 'SET_FAVS':
              return action.payload;
            default:
              return state;

    }
}

export default setFavs;