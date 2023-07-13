import React from 'react';
import './Project.css';
import SideBar from '../../components/SideBar/SideBar';
import Project from '../../components/ProjectInfo/Project';
import TopBar from '../../components/TopBar/TopBar';

export default function Team() {
    return (
        <div>
            <div className="App">
                <TopBar/>
                <div className="container">
                    <SideBar />
                    <Project/>
                </div>
            </div>

        </div>
    )
}
