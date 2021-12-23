import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HatsTimePage() {
  const dispatch = useDispatch();
  const hats = useSelector((store) => store.setHats);
  console.log(hats);

  useEffect(() => {
    dispatch({ type: "GET_HATS" });
  }, []);

  const favHat = (id) => {
    console.log('fav button click');
  }

  const deleteHat = (id) => {
    console.log('delete button click');
    dispatch ({
      type: 'DELETE_HAT',
      payload: id
    })
  }

  return (
    <>
      <h1>HATS TIME</h1>
      <ul>
        {hats.map((hat) => {
          return (
            <li key={hat.id}>
              <img height="300px" src={hat.photo_url}/>
              <p>{hat.description}</p>
              <p>{hat.hat_color}</p>
              <p>{hat.hat_style}</p>
              <p>{hat.hat_fabric}</p>
              <p>{hat.hat_vibe}</p>
              <button onClick={favHat}>FAV</button>
              <button onClick={e => deleteHat(hat.id)}>DELETE</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}
