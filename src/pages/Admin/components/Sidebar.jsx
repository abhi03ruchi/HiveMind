import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import user from '../../../data';
import TransitionModal from "./TransitionModal"
import { TextField } from '@material-ui/core';
import { Button, Typography } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sideBarProfile">
          <img src={user[0].image} alt="" className="sideBarProfileImg" />
          <span className="sidebarProfileName">{user[0].name}</span>
          <div className="sideshortDesc">WorkHive Admin</div>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin DashBoard</h3>
          <TransitionModal 
          title="Create New Project" 
          button="New Project"
          content="Unleash the power of words. Spark discussion, share your insights."> 
          <TextField 
           variant='outlined'
           id="outlined-textarea"
           label="Project Name"
           placeholder="Project Name"
           multiline
           maxRows={3}
           fullWidth />
           <br/>
           <Typography sx={{marginTop:3,marginBottom:3}}>Choose assignees</Typography>
           <FormGroup>
      <FormControlLabel control={<Checkbox />} label={user[0].name}  />
      <FormControlLabel control={<Checkbox />} label={user[1].name} />
      <FormControlLabel control={<Checkbox />} label={user[2].name}  />
      <FormControlLabel control={<Checkbox />} label={user[3].name}  />
      <FormControlLabel control={<Checkbox />} label={user[4].name}  />

    </FormGroup>



          <Button variant="contained"
                        color="secondary"
                        align="center"
                        sx={{ marginTop: "20px", width: "410px", backgroundColor: "#8152BD", height: "48px" }}
                        type="submit" > Create Project</Button>  

          </TransitionModal>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Link to="/AdminAnalytics" className="sidebarLink">
                Analytics
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/AdminProject" className="sidebarLink">
                Projects
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/AdminTeam" className="sidebarLink">
                My Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">LogOut</h3>
        </div>
      </div>
    </div>
  );
}
