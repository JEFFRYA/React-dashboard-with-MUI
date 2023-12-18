import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Password from '@mui/icons-material/Password';

export const LoginPage = () => {

    const { FNLogin } = useContext( AuthContext )
    const navigate = useNavigate();

    const onLogin = () => {

        FNLogin("Jacosta");

        navigate('/', {
            replace: true
        });
    }

    return (
        <>
            <Grid container 
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '100vh' }}
                style={{
                    background: "white"
                }}>
                <Grid item xs={3}
                style={{
                    background: "white",
                    padding: "20px"
                }}>
                    <Box>
                        <h2 style={{
                                fontFamily: "Fira Sans",
                                fontWeight: 500,
                                textAlign: "center"
                            }}>Academia Virtual</h2>

                        <h4 style={{
                                fontFamily: "Fira Sans",
                                fontWeight: 300,
                                textAlign: "center",
                                marginBottom: "30px"
                            }}>Inicio de sesiòn</h4>

                        <FormControl 
                            variant="standard" 
                            style={{
                                width: 300
                            }}>
                            <TextField
                                id="input-with-icon-textfield"
                                label="Nombre de usuario"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                                autoComplete="false"
                                fullWidth
                                style={{
                                    marginBottom: "10px"
                                }}
                            />

                            <TextField
                                id="standard-password-input"
                                label="Password"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                        <Password />
                                        </InputAdornment>
                                    ),
                                }}
                                type="password"
                                variant="standard"
                                autoComplete="false"
                                fullWidth
                                style={{
                                    marginBottom: "10px"
                                }}
                            />
                        </FormControl>
                    </Box>
                </Grid>

                <Grid container 
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center">
                    <Button 
                        variant="contained" 
                        color="success"
                        onClick={onLogin}
                        style={{
                            textAlign: "center",
                            width: 150
                        }}>
                        INICIAR SESION
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}