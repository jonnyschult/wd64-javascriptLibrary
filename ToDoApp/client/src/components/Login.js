// const React = require('react');
import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import '../styles/Login.css';

// Challenge:
// Create 2 state variables, and wire up the two input fields with the state variables

//todo: Build functionality to send info to the api

const LoginComponent = (props) => {
  //      State  State Modifier(function)
  const [userEmail, setEmail] = useState(""); //state variable
  const [userPassword, setPassword] = useState(""); //state variable

  const triggerEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const triggerPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    /* If both the email and password are present, send to the API to verify that this user exists
        If response is okay, take token response (body) and call props.authenticateUser function with token
        If the response is not okay, then display error message, but do nothing. 
        */
    if (userEmail && userPassword) {
      fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      })
        .then((response) => response.json())
        .then((body) => {
          props.authenticateUser(body.token);
          console.log(body.token);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Form className="authForm" id="loginForm" onSubmit={handleLoginSubmit}>
      <h3>Login</h3>
      <FormGroup>
        <Label htmlFor="email" />
        <Input
          onChange={triggerEmailInputChange}
          value={userEmail}
          type="email"
          name="email"
          id="email"
          className="email"
          placeholder="email"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password" />
        <Input
          onChange={triggerPasswordInputChange}
          value={userPassword}
          type="password"
          name="password"
          id="loginPassword"
          className="password"
          placeholder="password"
        />
      </FormGroup>
      <Button color="" id="loginButton">
        Login
      </Button>
    </Form>
  );
};

// Create: Create a LOGIN form that has 2 inputs
// input1: Email
// input2: Password
// take note: for == htmlFor

// module.exports = LoginComponent;
export default LoginComponent;
