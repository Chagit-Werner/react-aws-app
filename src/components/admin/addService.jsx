import { observer } from "mobx-react"
import { useForm } from 'react-hook-form';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import GlobalStateAdmin from "../../AppStore/GlobalStateAdmin";
import GlobalStateService from "../../AppStore/GlobalStateService";
const AddService = observer(({handleClose}) => {
    const { handleSubmit, register, formState: { errors } } = useForm();

    function Post(data) {
        GlobalStateAdmin.setIsNewService(false)
        GlobalStateService.addService(data)
        handleClose()
    }

    return (<>
        <form onSubmit={handleSubmit(Post)} >
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    {Object.entries(GlobalStateService.service).map(([key, value]) => (
                        <div key={key}>
                           { key!="id" && <TextField
                                id={`outlined-${key}`}
                                label={key}
                                {...register(key, { required: true })}
                            />}
                            {errors[key] && <p>{`${key} is required`}</p>}
                        </div>
                    ))}
                    <Button type="submit" size="small" color="primary" sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkgreen'
                        }
                    }}>
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </form>
    </>)

})
export default AddService