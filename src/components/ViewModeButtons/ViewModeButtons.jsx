import { Button, ButtonGroup } from "@mui/material";

// code for two buttons: LEXEND FONT and DARK MODE
// I let myself do this way too early as a reward for doing something or another
// probably getting a delete route going or something

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
        {/* <Button
          className="btn"
          sx={{ m: 2 }}
          color="secondary"
          variant="contained"
          onClick={lexendFont}
        >
          Lexend Font
        </Button> */}
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
