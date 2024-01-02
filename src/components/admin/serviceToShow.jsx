import * as React from 'react';

import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CardActions from '@mui/material/CardActions';
import './serviceToShow.css'

export default function ServiceToShow({ props }) {
  
    return (
        < div className='service'>

            <Card
                id="card"
                variant="outlined"
                orientation="horizontal"
                sx={{
                    width: 300,
                    color: 'green',
                    backgroundColor: 'white',
                    position: 'relative',
                    marginBottom: 2,
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '0px',
                    marginTop: '50px',
                    fontFamily: 'Arial, sans-serif',
                    '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                }}>

                <CardContent>
                    {Object.entries(props).map(([key, value]) => (
                        key !== "id" && (
                            <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                                <b>{key}  : </b>{value}
                            </Typography>
                        )
                    ))}
                    <CardActions disableSpacing style={{ justifyContent: 'center', flexDirection: 'row' }}>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </CardContent>
                <ThumbUpOffAltIcon />

            </Card>
        </div>

    )
}