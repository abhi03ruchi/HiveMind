import React from 'react';
import './Team.css';
import SideBar from '../../components/SideBar/SideBar';
import TeamM from '../../components/TeamM/TeamM';
import TopBar from '../../components/TopBar/TopBar';

export default function Team() {
    return (
        <div>
            <div className="App">
                <TopBar/>
                <div className="container">
                    <SideBar />
                    <TeamM/>
                </div>
            </div>

        </div>
    )
}
