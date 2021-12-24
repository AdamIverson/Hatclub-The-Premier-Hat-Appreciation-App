// import React from "react"

export default function ViewModeButtons() {

  function openDyslexic() {
    let element = document.body;
    element.classList.toggle("open-dyslexic");
  };

  function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
  return (
    <>
      <button onClick={openDyslexic}>
        OpenDyslexic
      </button>
      <button onClick={darkMode}>
        Dark Mode
      </button>
    </>
  )
}