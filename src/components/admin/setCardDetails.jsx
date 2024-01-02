
import { observer } from "mobx-react";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

import GlobalStateAdmin from '../../AppStore/GlobalStateAdmin';


const SetDetails = observer(() => {
  function handleChange(value, field) {
    setData(Object.assign(data, { [field]: value }));
  }
  
  const [data, setData] = useState({
    name: GlobalStateAdmin.business.name,
    address: GlobalStateAdmin.business.address,
    phone: GlobalStateAdmin.business.phone,
    owner: GlobalStateAdmin.business.owner,
    logo: GlobalStateAdmin.business.logo,
    description:GlobalStateAdmin.business.description,
  });
  1
  function handleSubmit(e) {
    e.preventDefault()
    GlobalStateAdmin.updateDetailsAdmin(data)
    GlobalStateAdmin.setIsStateSetting(false);
    GlobalStateAdmin.setEnableButtons(false);

    
  }
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  return (

    
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <form onSubmit={handleSubmit} 
    style={style}
    >
      <Card
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}>
        <CardContent>
        {Object.entries(GlobalStateAdmin.business).map(([key, value]) => (
                        key !== "id" && (
                          <TextField

                          id="outlined-required"
                          label={key}
                          onChange={(e)=>handleChange(e.target.value, key)}    
                        />   
                        )
                    ))}
          <br />
          <Button size="small" color="primary" type="submit">
            Submit
          </Button>
        </CardContent>
      </Card>

    </form>
     </Modal>
  )
})
export default SetDetails;