import { observer } from "mobx-react"
import GlobalStateAdmin from "../../AppStore/GlobalStateAdmin"
import GlobalStateService from "../../AppStore/GlobalStateService";
import ServiceToShow from './serviceToShow'
import * as React from 'react';
import AddService from "./addService";
import './designCards.css'

import './services.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Services = observer(() => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (<div>
        {/* אפשרות להוספת שירות לעסק */}
        <div className="a">
            {

                GlobalStateService.listServices?.map((service, k) => <ServiceToShow props={service} key={k} />)
            }
        </div>
        {GlobalStateAdmin.isAdmin && <Button onClick={handleOpen}>
            <Fab color="primary" aria-label="add" sx={{ backgroundColor: 'green', '&:hover': { backgroundColor: 'green' } }}>
                <AddIcon />
            </Fab></Button>}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} style={{ border: 'gray' }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add Servise
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <AddService handleClose={handleClose}></AddService>
                </Typography>
            </Box>
        </Modal>
    </div>)

})

export default Services