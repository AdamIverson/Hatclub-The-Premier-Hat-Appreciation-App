import react from "react";
import { user } from "pg/lib/defaults";

function FavBtn(props) {
  if (user.id) {
    return (
      <Button
        sx={{ m: 1 }}
        onClick={(e) => favHat(hat.id)}
        id={props.id}
        className="photoButton"
        variant="contained"
      >
        FAV
      </Button>
    );
  } else {
    return <p>Winner</p>;
  }
};

export default FavBtn();
