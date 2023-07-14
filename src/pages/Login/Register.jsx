import React, { useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { GoogleButton } from 'react-google-button'
import './login.css';

import Login from './Login.png'





function Register() {
    


    return (
        <div>
            <div className="lcontainer glass">
                <div className="form right">
                    <Typography variant="h4" color={"white"} align="center">Create Account</Typography>
                    <img class="loginImg" src={Login} alt="" />



                    <TextField class="credentials" id="Name" type="email" fullWidth placeholder="Name" ></TextField>
                    <TextField class="credentials" id="Email" type="email" fullWidth placeholder="Enter Email" ></TextField>
                    <TextField class="credentials" id="Password" type="password" fullWidth placeholder="Enter Password" ></TextField>
                    <Button variant="contained"
                        color="secondary"
                        sx={{ marginTop: "20px", width: "410px", backgroundColor: "#8152BD", height: "48px" }}
                        type="submit" > Create Account</Button>
                        <br/>
                    <p>~ Or ~</p>
                    <div className="Google-Button-cont">
                        <GoogleButton class="google-button" />
                    </div>

                    <Typography variant="h6" color="white" className="register-link">Already have an account ? <a href="login">Login !</a></Typography>

                </div>
                <div >
                    <Typography variant="h1">Join Our Community</Typography>
                </div>

            </div>
        </div>
    );
}

export default Register;