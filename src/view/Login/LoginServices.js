import React from "react";

import axios from "axios";


const LoginServices = async () => {

    const data = await axios.get(`https://jsonplaceholder.typicode.com/users`)

    return (
        data
    )


}

export default LoginServices