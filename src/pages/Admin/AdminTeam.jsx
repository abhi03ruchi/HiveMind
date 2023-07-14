import React from 'react';
// import './Project.css';
import Sidebar from './components/Sidebar';
import Project from '../../components/ProjectInfo/Project';
import TopBar from '../../components/TopBar/TopBar';
import TeamM from '../../components/TeamM/TeamM';

export default function Admin() {
    return (
        <div>
            <div className="App">
                <TopBar/>
                <div className="container">
                    <Sidebar />
                    <TeamM/>

                </div>
            </div>

        </div>
    )
}