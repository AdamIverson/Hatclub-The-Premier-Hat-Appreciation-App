import "./ViewModeButtons.css";
import { Button, ButtonGroup } from "@mui/material";

export default function ViewModeButtons() {
  function openDyslexic() {
    let element = document.body;
    element.classList.toggle("open-dyslexic");
  }

  function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
  return (
    <div>
      <ButtonGroup size="small"
      sx={{ m: 2 }}>
        <Button
          className="btn"
          sx={{ m: 2 }}
          color="success"
          variant="contained"
          onClick={openDyslexic}
        >
          OpenDyslexic
        </Button>
        <Button
          sx={{ m: 2 }}
          className="btn" 
          variant="contained" 
          onClick={darkMode}>
          Daylight Mode
        </Button>
      </ButtonGroup>
    </div>
  );
}
