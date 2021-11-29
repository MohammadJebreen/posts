import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <Button sx = {{marginRight:'20px' , margin:'40px'}} variant="contained">
        <Link to="/">Logout</Link>
      </Button>
      <Button variant="contained">
        <Link to="/Post">Posts</Link>
      </Button>
    </>
  );
};

export default Header;
