
import { useState } from 'react'
import Button from '@mui/material/Button';
import ShowDetails from '../admin/showCardDetails';
import Services from '../admin/services';
import AddAppointment from './addAppointment';

//----------dialog------------
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';


function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}
export default function User() {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    return < div >
   

        {/* תצוגת פרטי בעל העסק */}
        <ShowDetails></ShowDetails>

        {/* תצוגת שירותי בעל העסק */}
        <Services></Services>

        {/* הדיאלוג מוצג בדף זה כי בעקרון הוא סגור. בפתחתו עוברים למסך ה-FORM */}
        <Button variant="outlined" onClick={handleClickOpen}> make an appointment  </Button>

       <Dialog
            open={open}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title" >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Subscribe
            </DialogTitle>
            <DialogContent>
                <DialogContentText> 
                    {/* קריאה  לפרום */}
                   <AddAppointment handleClose={handleClose} />
                   
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog> 
    </div>
}