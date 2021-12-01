import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./view/Post/Post.jsx";
import Login from "./view/Login/Login.jsx";
import { useState } from "react";
import EmailContext from "./EmailContext";
import IdContext from "./IdContext.js";
import Comments from "./view/Comment/Comment.jsx";
import { Container } from "@mui/material";

function App() {

  const [data, setData] = useState("");
  const [commentsId, setCommentsId] = useState("");

  return (
    <Container data-testid="app" >
      <Router>
        <Switch>
          <Route exact path="/">
            <EmailContext.Provider value={setData}>
              <Login />
            </EmailContext.Provider>
          </Route>
          <Route path="/Post">
            <IdContext.Provider value={setCommentsId}>
              <Post data={data} />
            </IdContext.Provider>
          </Route>
          <Route path="/Comments">
              <Comments data={commentsId} />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
