import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? "#8152BD" : "#E9E7FD",
  },
}));


function createData(taskname, status, duedate, assignees, extra, progress) {
  return { taskname, status, duedate, assignees, extra, progress };
}

const rows = [
  createData('Visual Studio Display', 'In Progress', '24-09-2023', "/static/images/avatar/1.jpg", 1, 40),
  createData('Marketing sales review', 'In Progress', '24-09-2023', "/static/images/avatar/2.jpg", 3, 43),
  createData('Sacrifices session', 'In Progress', '26-05-2023', "/static/images/avatar/3.jpg", 2, 60),
  createData('Team Meeting', 'Done', '2-01-2023', "/static/images/avatar/5.jpg", 4, 100),
  createData('Goal Construct', 'In Progress', '23-07-2023', "/static/images/avatar/6.jpg", 7, 39),
];

export default function DenseTable() {
  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 850 }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>TASK NAME </TableCell>
            <TableCell align="left">STATUS</TableCell>           
             <TableCell align="left">PROGRESS</TableCell>
            <TableCell align="right">DUE DATE</TableCell>
            <TableCell align="right">ASSIGNEES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.taskname}
              </TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left"> <BorderLinearProgress variant="determinate" sx={{color:"#E9E7FD"}} value={row.progress} /></TableCell>
              <TableCell align="right">{row.duedate}</TableCell>
              <TableCell align="right"><AvatarGroup total={row.extra}>
                <Avatar alt="Remy Sharp" src={row.assignee} />
                <Avatar alt="Travis Howard" src={row.assignee} />
                <Avatar alt="Cindy Baker" src={row.assignee} />
                <Avatar alt="Agnes Walker" src={row.assignee} />
                <Avatar alt="Trevor Henderson" src={row.assignee} />
              </AvatarGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
