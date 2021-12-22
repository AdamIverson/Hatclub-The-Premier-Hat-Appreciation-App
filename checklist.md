### Things to do
  
  [ ] Routes
    [x] Unprotected
      [x] hats time
      [x] documentation
    [x] Protected
      [x] add a hat
      [x] favorhats
    [x] NavBar in header
      [x] Buttons for hats
      [x] Button for favorite hats
      [x] Button for add a hat
      [x] Conditional Render login/logout

  [ ] Add Components
    [ ] Home Component
      [ ] Hat of the day Random Hat
      [ ] Render image and description
      [ ] Button - Fav
    [ ] Favorite Hats
      [ ] Render image and description
      [ ] Button - Fav
        [ ] PUT Route
      [ ] Button - Delete
        [ ] DELETE Route
    [x] Add a hat
      [x] Form
        [x] State for each input
      [x] Inputs
        [x] style
        [x] url - uploader API?
        [x] description
        [x] color
        [x] fabric
        [ ] ALL FIELDS REQUIRED
      [x] Button - Submit
    
    [ ] Documentation
      [ ] W3 - WCAG
      [ ] VoiceOver tutorial
      [ ] Deque

    [ ] Sagas
      [x] Root
        [x] FETCH_HATS, fetchHats
        [x] ADD_HAT, addHats
        [ ] ADD_FAV, addFave - PUT Route RED ALERT
          [ ] check last group project repo for PUT Route
        [ ] DELETE_HAT, deleteHat
    [ ] Reducers
      [x] Store
      [x] Middleware
      [ ] FETCH_HATS
        [ ] this is the big one?
        [ ] the big object with all of the keys
        [ ] user.id should be attached to each automatically?
      [ ] Favs
        [ ] not nearly as dramatic as FETCH hats
        [ ] also I'm not quite sure how to do this

    [ ] a11y
      [ ] Screen Reader
        [ ] JSX in Components written semantically in proper order
        [ ] aria labels
      [ ] Responsive
        [ ] Scalable to 200%
        [ ] Set viewport
        [ ] MUI - sx={}
        [ ] CSS - rem