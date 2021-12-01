import React from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const Header = () => {

  const history = useHistory();

  const handelLogout = () => {
    history.push('/')
  }
  const handelPost = () => {
    history.push('/Post')
  }

  return (
    <div data-testid="header">
      <Button data-testid="Logout" onClick={() =>{handelLogout()}} sx={{ marginRight: "20px", margin: "40px" }} variant="contained">
        Logout
      </Button>
      <Button data-testid="Post"  onClick={() =>{handelPost()}}   variant="contained">
        Posts
      </Button>
    </div>
  );
};

export default Header;
