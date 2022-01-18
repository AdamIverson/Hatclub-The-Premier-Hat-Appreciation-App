import { Button, ButtonGroup } from "@mui/material";

// code for two buttons: LEXEND FONT and DARK MODE
// I let myself do this way too early as a reward for doing something or another
// probably getting a delete route going or something
// ULTIMATELY ended up using neither button, per se, but the functionality of each is reflected
// in the final product

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
        <Button
          size="small"
          style={{ backgroundColor: '#4d4e9f', color: '#f5f37d' }}
          sx={{ m: 2 }}
          className="btn"
          variant="contained"
          // color="secondary"
          onClick={darkMode}
        >
          light/dark 
        </Button>
    </div>
  );
}
