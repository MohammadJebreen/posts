import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useContext } from "react";
import EmailContext from "../../EmailContext.js";
import LoginServices from "./LoginServices.js";
import { useState } from "react";

const Login = () => {

  const [user,setUser] = useState("")

  const email = useContext(EmailContext);

  const history = useHistory();

  const change =  (e) => {
    e.preventDefault();
    LoginServices().then((res) => {
      res.data.forEach((element) => {
        if (element.email === user) {
          email(element);
          history.push("/Post");
        }
      });
    });
  };

  return (
    <Container
      data-testid="login"
      component="div"
      sx={{
        height: "99vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "steelblue",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          component="form"
          onSubmit={(e) => {
            change(e);
          }}
        >
          <TextField
            margin="normal"
            type="email"
            required
            fullWidth
            name="email"
            label="Email"
            inputProps={{ "data-testid": "email" }}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            />
          <TextField
            margin="normal"
            type="password"
            required
            fullWidth
            name="password"
            label="password"
          />
          <Button  data-testid="submitLogin" type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default Login;
