import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function HatsTimePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_HATS" });
  }, []);

  return (
    <>
      <h1>HATS TIME</h1>
    </>
  );
}
