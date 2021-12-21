import react, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function AddHatPage() {

  const dispatch = useDispatch();
  const history = useHistory();


  
  return (
    <>
      <h1>Add Hat</h1>
      <form>
        <input
        type="text"
        placeholder='description'
        />
        <input
        type="text"
        placeholder='photo url'
        />
        <input
        type="text"
        placeholder='hat color'
        />
        <input
        type="text"
        placeholder='hat style'
        />
        <input
        type="text"
        placeholder='hat fabric'
        />
        <input
        type="text"
        placeholder='hat vibe'
        />
      </form>

    </>
  )
}

export default AddHatPage;