import React from "react";
import axios from "axios";

const PostServices = async () => {

    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`)

    return (
        data
    )
}

export default PostServices