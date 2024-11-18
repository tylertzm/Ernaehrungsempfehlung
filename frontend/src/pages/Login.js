import React, {useState} from "react";
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, usePassword] = useState("");
}

const handleSubmit = (e) => {
    e.preventDefault;
    console.log("Login submitted ", {email, password});
}

<div class="login-container">
    <h1>Login</h1>

</div>