import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HatsTimePage() {
  const dispatch = useDispatch();
  const hats = useSelector((store) => store.setHats);

  useEffect(() => {
    dispatch({ type: "GET_HATS" });
  }, []);

  return (
    <>
      <h1>HATS TIME</h1>
      <ul>
        {hats.map((hat) => {
          return (
            <li key={hat.id}>
              <img height="300px" src={hat.photo_url}/>
              <button>FAV</button>
              <button>DELETE</button>
            </li>
          )
        })}
      </ul>
    </>
  );
}
