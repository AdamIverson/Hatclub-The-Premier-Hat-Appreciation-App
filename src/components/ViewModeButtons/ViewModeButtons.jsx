import { Button, ButtonGroup } from "@mui/material";

export default function ViewModeButtons() {
  function lexendFont() {
    let element = document.body;
    element.classList.toggle("lexend");
  }

  function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }
  return (
    <div>
      <ButtonGroup size="small" sx={{ m: 2 }}>
        <Button
          className="btn"
          sx={{ m: 2 }}
          color="secondary"
          variant="contained"
          onClick={lexendFont}
        >
          Lexend Font
        </Button>
        <Button
          sx={{ m: 2 }}
          className="btn"
          variant="contained"
          color="secondary"
          onClick={darkMode}
        >
          light/dark 
        </Button>
      </ButtonGroup>
    </div>
  );
}
