import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomeCorrect.css";
import NavbarForHome from "./NavbarForHome";
import Footer from "../../components/Footer/Footer";

const HomeCorrect = () => {
    

    return (
        <div>
            <div style={{ "padding": "0%", }}>
                <NavbarForHome />
            </div>

            <div className="home-main">
                <div className="home-left-area"></div>
                <div className="home-right-area">
                    <p className="welcome-heading">HiveMind</p>
                    <p className="welcome-content">The One-Stop Shop for Team Collaboration</p> <br />
                    <p className="welcome-content">A platform for making collaboration and productivity effortless for all administrators , managers and team members.</p>
                  
                </div>
            </div>
            <Footer/>
            
            {/* <Chatbot /> */}
        </div>
    )
}

export default HomeCorrect;