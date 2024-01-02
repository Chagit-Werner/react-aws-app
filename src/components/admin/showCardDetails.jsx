import GlobalStateAdmin from '../../AppStore/GlobalStateAdmin';
import { observer } from 'mobx-react'
import EditIcon from '@mui/icons-material/Edit';
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ShowDetails = observer(() => {

  const handleEdit = () => {
    GlobalStateAdmin.setIsStateSetting(true);
    GlobalStateAdmin.setEnableButtons(true)
  }

  return (

    < div>
      <Card
        id="s"
        variant="outlined"
        orientation="horizontal"
        sx={{
          width: 320,
          '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}>

        <CardContent>
          {Object.entries(GlobalStateAdmin.business).map(([key, value]) => (

            key != "logo" && key != "id" && <Typography level="body-sm" aria-describedby="card-description" mb={1}>
              <b>    {key} : </b>{value}
            </Typography>
          ))}
          {GlobalStateAdmin.isAdmin && <Button size="small" color="primary" onClick={handleEdit}>
            Edit
            <EditIcon />
          </Button>}
        </CardContent>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
          <img src={GlobalStateAdmin.business.logo} />
        </AspectRatio>
      </Card>


    </div>
  )
})


export default ShowDetails