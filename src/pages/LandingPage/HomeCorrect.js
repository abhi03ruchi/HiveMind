import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomeCorrect.css";
import NavbarForHome from "./NavbarForHome";

const HomeCorrect = () => {
    

    return (
        <div>
            <div style={{ "padding": "2% 7% 1% 7%", }}>
                <NavbarForHome />
            </div>

            <div className="home-main">
                <div className="home-left-area"></div>
                <div className="home-right-area">
                    <p className="welcome-heading">Welcome to</p>
                    <p className="welcome-heading">Ask Your Seniors</p>
                    <p className="welcome-content">One place for all your queries</p>
                </div>

            </div>

            {/* <Chatbot /> */}
        </div>
    )
}

export default HomeCorrect;