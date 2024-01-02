import { observer } from "mobx-react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm , Controller} from 'react-hook-form';
import GlobalStateAdmin from "../../AppStore/GlobalStateAdmin";
import GlobalStateAppointment from "../../AppStore/GlobalStateAppointment";
import GlobalStateService from "../../AppStore/GlobalStateService";
//-----------Select
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


//---------------------MDP
import * as React from 'react';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const AddAppointment = observer(({handleClose}) => {
    

    const { handleSubmit,  control, register, formState: { errors } } = useForm();
    // const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

    function Post(data) {
        handleClose()
        GlobalStateAppointment.addAppointment(data)
        console.log(("FALSE!"));
    }
    return (<>

        <form onSubmit={handleSubmit(Post)} >
            <Card
                variant="outlined"
                orientation="horizontal"
                sx={{
                    width: 320,
                    '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                }}>
                <CardContent>
                    {/* //בחירת סוג השרות */}
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">select service</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                {...register("serviceType", { required: true })}>
                            
                                {GlobalStateService.listServices?.map((s, index) =>
                                    <MenuItem value={s.name} key={index}>{s.name}</MenuItem>)

                                }
                            </Select>
                        </FormControl>
                    </Box>
                    <br />
                    {/* בחירת תאריך - ע"י שימוש בקונטרולר כי זאת הדרך  היחידה לעשות זאת כשהטופס הוא מסוג useForm */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                            name="dateTime"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <DateTimePicker
                                    {...field}
                                    label="Controlled picker"

                                />
                            )}
                        />
                    </LocalizationProvider>
                    <TextField

                        id="outlined-required"
                        label="clientName"
                        {...register("clientName", { required: true })}
                    />   {errors.clientName && <p>clientName is required field</p>}
                    <br />

                    <TextField

                        id="outlined-required"
                        label="clientPhone"
                        {...register("clientPhone", { required: true })}
                    />
                    {errors.clientPhone && <p>clientPhone is required field</p>}

                    <TextField
                        type="email"
                        id="outlined-required"
                        label="clientEmail"
                        {...register("clientEmail", { required: true })}
                    />
                    {errors.clientEmail && <p>clientEmail is required field</p>}
                    <br />
                    <Button type="submit" size="small" color="primary">
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </form>
    </>)

})
export default AddAppointment