import React from "react";
import axios from "axios";

const CommentServices = async (id) => {

    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return (
        data.data
    )
}

export default CommentServices