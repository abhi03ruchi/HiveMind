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
      size="small" 
      sx={{ backgroundColor: "none", color: "black", "&:hover": {color: "white" } }} 
      disableTouchRipple>
        {props.button}
      </Button>
      <Dialog
        sx={{backgroundColor:"rgba(255, 255, 255, 0.6)"}}
        PaperProps={{
          style:{
            backgroundColor:"#1C1A1A",
            boxShadow:"none"
            
          }
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id="alert-dialog-title" sx={{color:'white',fontFamily:'Montserrat'}} >
          <h2>{props.title}</h2>
        </DialogTitle>
        <hr style={{marginTop:"1px", border:"1px solid white"}}/>
        <DialogContent id="alert-dialog-description" sx={{color:'white',overflowY:"hidden"}} >
          <p>{props.content}</p>
        </DialogContent>
        <DialogContent sx={{color:'white',marginLeft:1,overflowX:"hidden"}}>
          {props.children}
        </DialogContent>
        
      </Dialog>
    </div>
  );
}