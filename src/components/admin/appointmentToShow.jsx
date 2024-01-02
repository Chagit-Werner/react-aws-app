import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import PunchClockIcon from '@mui/icons-material/PunchClock'
import Grid from '@mui/material/Grid';

export default function AppointmentToShow({ props, color }) {
    return (
        <div className='appointment-show'>

            <Card
                id="card"
                variant="outlined"
                orientation="horizontal"
                sx={{
                    width: 300,
                    color: color,
                    backgroundColor: 'white',
                    position: 'relative',
                    marginBottom: 2,
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '0px',
                    fontFamily: 'Arial, sans-serif',
                    '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                }}>
                    <CardContent>
                {Object.entries(props).map(([key, value]) => (

                    <Typography level="body-sm" aria-describedby="card-description" mb={1}>
                        <b>    {key} : </b>{value}
                    </Typography>
                ))}
                </CardContent>
                <Grid>
                    <PunchClockIcon />

                </Grid>
            </Card>
        </div>

    )
}