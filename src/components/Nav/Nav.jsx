import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import ViewModeButtons from "../ViewModeButtons/ViewModeButtons";
import { Container } from "@mui/material";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <Container className="nav" >
      <Link to="/home">
        <h1 className="nav-title">hatclub</h1>
      </Link>
      <br/>
      <ViewModeButtons />
      <div className="buttons">
        <Link className="navLink" to="/hats_time">
          Hats Time
        </Link>

        <Link className="navLink" to="/about">
          About
        </Link>

        <Link className="navLink" to="/info">
          Info Page
        </Link>

        {/* <Link className="navLink" to="/hats_time">
        Hats Time
      </Link> */}
        {/* <div> */}
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/favorites">
              favorhats
            </Link>

            <Link className="navLink" to="/add_hat">
              Add One Hat
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {/* <Link className="navLink" to="/hats_time">
          Hats Time
        </Link>

        <Link className="navLink" to="/about">
          About
        </Link>

        <Link className="navLink" to="/info">
          Info Page
        </Link> */}
      </div>
    </Container>
  );
}

export default Nav;
