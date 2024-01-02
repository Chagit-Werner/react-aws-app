import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import GlobalStateLogin from '../../AppStore/GlobalStateLogin';
import GlobalSteteAdmin from '../../AppStore/GlobalStateAdmin';
export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
   
    const handleLogin = async () => {
        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            body: JSON.stringify({
                name, password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            GlobalStateLogin.setIsLogin(true);
            GlobalSteteAdmin.setIsAdmin(true);

        }
        else {
            if (name != "")
               
            setIsInvalidPassword(true);
        }
    }
    return (
        <>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <Button variant="outlined" onClick={handleLogin}>Login</Button>

            </div>
            {isInvalidPassword &&
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Name or password are invalid ! — <strong>check it out!</strong>
                </Alert>}
     
        </>
    )

}