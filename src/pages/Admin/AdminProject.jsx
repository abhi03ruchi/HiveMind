import React, { useState } from 'react';
import './admin.css';
import Sidebar from './components/Sidebar';
import TopBar from '../../components/TopBar/TopBar';
import Table from './components/Table';

import TransitionModal from "../Admin/components/TransitionModal"
import { TextField } from '@material-ui/core';
import { Button, Typography } from '@mui/material';

export default function AdminProject() {

    return (
        <div>
            <div className="App">
                <TopBar />
                <div className="container">

                    <Sidebar />
                    <div className='table'>
                        <TransitionModal
                            title="Create Task Project"
                            button="New Task"
                            content="Unleash the power of words. Spark discussion, share your insights.">
                            <TextField
                                id="outlined-textarea"
                                label="Task Name"
                                placeholder="Task Name"
                                multiline
                                maxRows={3}
                                fullWidth />
                            <br />


                            <Button variant="contained"
                                color="secondary"
                                align="center"
                                sx={{ marginTop: "20px", width: "410px", backgroundColor: "#8152BD", height: "48px" }}
                                type="submit" > Create Task</Button>

                        </TransitionModal>
                        <Table />
                    </div>


                </div>
            </div>

        </div>
    )
}