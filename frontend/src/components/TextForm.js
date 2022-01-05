import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from "@mui/material/styles";


export default function TextForm() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#B272CE",
            },
        },
    });

    return (
        <div>
            <Typography>Write about your memory. Then, highlight the important words.</Typography>
            <ThemeProvider theme={theme}>
                <TextField
                    id="filled-multiline-static"
                    label="My Memory"
                    multiline
                    rows={15}
                    variant="filled"
                    margin="normal"
                    fullWidth="true"
                />
            </ThemeProvider>
        </div>
    )
}