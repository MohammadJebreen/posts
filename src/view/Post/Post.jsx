import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import PostServices from "./PostServices.js";
import IdContext from "../../IdContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header.jsx";

function Post({ data }) {

  const [post, setPost] = useState([]);
  const idContext = useContext(IdContext);
  const history = useHistory();

  useEffect(() => {
    PostServices().then((res) => {
      const postData = res.data.filter((element) => element.userId === data.id);
      setPost(postData);
    });
  }, []);

  const handelComment = (commId) => {
    idContext(commId);
    history.push("/Comments");
  };

  return (
    <Container component={"div"} maxWidth="1440px">
    <Header />
      <Container
        component={"main"}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
          {post.map((element) => {
            return (
              <Card
                sx={{
                  padding: "20px",
                  hight: "400px",
                  maxWidth: "350px",
                  justifyContent: "center",
                }}
                key={element.id}
              >
                <Typography variant="h3" sx={{ padding: "15px" }}>
                  {element.title}
                </Typography>
                <Typography variant="string">{element.body}</Typography>
                <Typography variant="h5">Comment</Typography>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    handelComment(element.id);
                  }}
                >
                  show comments
                </Button>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Container>
  );
}

export default Post;
