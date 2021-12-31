import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    var style1 = {
        display: "flex",
        justifyContent: "center",
        margin: "50px",
    }

    var style2 = {
        backgroundColor: "#B272CE",
        borderRadius: '15px',
    }
    return (
        <Stack spacing={2} direction="row" style={style1}>
            <Button variant="contained" style={style2}>  Submit  </Button>
        </Stack>
    );
}