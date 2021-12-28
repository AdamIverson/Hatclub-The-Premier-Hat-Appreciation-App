import './ViewModeButtons.css'
import { Button } from '@mui/material'

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
    <div>
      <Button
        sx={{ m: 2}}
        color="success"
        variant="contained"
        onClick={openDyslexic}>
        OpenDyslexic
      </Button>
      <Button 
        variant="contained"
        onClick={darkMode}>
        Dark Mode
      </Button>
    </div>
  )
}