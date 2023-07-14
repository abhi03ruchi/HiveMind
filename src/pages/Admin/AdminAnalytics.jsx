import React, { useState } from 'react';
// import './Project.css';
import Sidebar from './components/Sidebar';
import TopBar from '../../components/TopBar/TopBar';
import Analytics from './components/Analytics'

export default function Admin() {

    return (
        <div>
            <div className="App">
                <TopBar/>
                <div className="container">
                    <Sidebar />
                    <Analytics/>

                </div>
            </div>

        </div>
    )
}
