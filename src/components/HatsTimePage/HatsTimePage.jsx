import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HatsTimePage() {
  const dispatch = useDispatch();
  const hats = useSelector((store) => store.setHats);
  console.log(hats);

  useEffect(() => {
    dispatch({ type: "GET_HATS" });
  }, []);

  function favButton() {
    console.log('fav button click');
  }

  function deleteButton() {
    console.log('delete button click');
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
              <button onClick={favButton}>FAV</button>
              <button onClick={deleteButton}>DELETE</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}
