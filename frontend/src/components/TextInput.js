import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function TextInput() {
    var style1 = {

    }
    return (
        <div style={style1}>
            <Typography>Write about your memory. Then, highlight the important words.</Typography>
            <TextField
                id="filled-multiline-static"
                label="My Memory"
                multiline
                rows={15}
                variant="filled"
                margin="normal"
                fullWidth="true"
            />
        </div>
    )
}