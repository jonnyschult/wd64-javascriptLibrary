import React, { useState } from 'react';
import { Form, Label, Input, FormGroup, Button } from 'reactstrap';
import '../styles/Register.css' //Styling

const RegisterComponent = (props) => {

    //challenge: Create the state varaible for the input fields

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    //Challenge: Create the helper functions for the input fields

    const setEmailHelperFunc = (event) => setEmail(event.target.value);
    const setPasswordHelperFunc = (event) => setPassword(event.target.value);
    const setPasswordConfirmHelperFunc = (event) => setPasswordConfirm(event.target.value);

    //Challenge: Create the submit event function which posts the the registration route

    const createUser = (event) => {
        event.preventDefault();

        if (userEmail && userPassword) {
            if (userPassword === passwordConfirm) {
                fetch('http://localhost:8080/user/register', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({
                        email: userEmail,
                        password: userPassword
                    }),
                }).then(response => response.json())
                    .then(body => {
                        fetch('http://localhost:8080/user/login', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "Application/json",
                            },
                            body: JSON.stringify({
                                email: userEmail,
                                password: userPassword
                            }),
                        }).then(response => response.json())
                            .then(body => {
                                props.authenticateUser(body.token);
                                console.log(body.token)
                            })
                            .catch(error => console.log(error));
                    })
                    .catch(error => console.log(error));
            } else {
                //todo: Tooltip instead of alert!!!
                alert('Passwords MUST match!')
            }
        }
    }

    //Think about how to handle a token

    return (
        <div>
            <Form className="authForm" id="registerForm" onSubmit={createUser}>
                <h3>+Yourself</h3>
                <FormGroup>
                    <Label htmlFor="registerEmail" />
                    <Input
                        onChange={setEmailHelperFunc}
                        value={userEmail}
                        type="registerEmail"
                        name="registerEmail"
                        id="registerEmail"
                        className="email"
                        placeholder="email" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password" />
                    <Input
                        onChange={setPasswordHelperFunc}
                        value={userPassword}
                        type="password"
                        name="registerPassword"
                        id="registerPassword"
                        className="password"
                        placeholder="password" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="passwordConfirm" />
                    <Input
                        onChange={setPasswordConfirmHelperFunc}
                        value={passwordConfirm}
                        id="passwordConfirm"
                        type="password"
                        placeholder="confirm password"
                        value={passwordConfirm} />
                </FormGroup>
                <Button color="" id="registerButton">Register</Button>
            </Form>
        </div>
    );
};

export default RegisterComponent;

