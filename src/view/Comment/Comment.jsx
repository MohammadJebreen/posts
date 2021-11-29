import React from "react";
import { ListItem } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import CommentServices from "./CommentServices.js";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../Header/Header.jsx";

const CommentItem = (id) => {

  const [comment, setComment] = useState([]);

  useEffect(() => {
    CommentServices(id.data).then((res) => {
      setComment(res);
    });
  }, []);

  return (
    <Container maxWidth="1440px">
    <Header />
      <Box sx={{ display: "flex", gap: "50px" , flexWrap: "wrap"}}>
        {comment.map((item) => {
          return (
            <Card
              sx={{
                border: "1px solid blue",
                padding: "20px",
                hight: "400px",
                maxWidth: "350px",
                justifyContent: "center",
              }}
              key={item.id}
            >
              <Typography variant="h4" sx={{ padding: "15px" }}>
                name : {item.name}
              </Typography>
              <Typography variant="h6" sx={{ padding: "15px" }}>
                email : {item.email}
              </Typography>
              <ListItem key={item.id}> comment : {item.body}</ListItem>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
};

export default CommentItem;
