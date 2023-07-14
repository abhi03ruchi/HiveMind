import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} 
      variant="outlined"
      align="center"
      color='secondary'
      sx={{ margin: "5px", width: "300px", color: "#8152BD", height: "48px" }} 
      disableTouchRipple>
        {props.button}
      </Button>
      <Dialog
        sx={{backgroundColor:"rgba(0,0,0, 0.6)"}}
        PaperProps={{
          style:{
            backgroundColor:"#E9E7FD",
            boxShadow:"none"
            
          }
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id="alert-dialog-title" sx={{color:"#8152BD",fontFamily:'Montserrat'}} >
          <h2>{props.title}</h2>
        </DialogTitle>
        <hr style={{marginTop:"1px", border:"1px solid #8152BD"}}/>
        <DialogContent id="alert-dialog-description" sx={{color:"#8152BD",overflowY:"hidden"}} >
          <p>{props.content}</p>
        </DialogContent>
        <DialogContent sx={{color:"#8152BD",marginLeft:1,overflowX:"hidden"}}>
          {props.children}
        </DialogContent>
        
      </Dialog>
    </div>
  );
}