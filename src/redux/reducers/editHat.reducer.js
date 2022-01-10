const editHat = (state = {}, action) => {
  console.log('userHat.reducer action:', action)
  
        switch (action.type) {
            case 'EDIT_HAT':
              return {
                description: 'Testing!'
              };
            default:
              return state;

    }
}

export default editHat;