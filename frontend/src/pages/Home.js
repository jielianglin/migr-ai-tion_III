import React from "react";

import FileInput from "../components/FileInput";
import TextInput from "../components/TextInput";
import Grid from '@mui/material/Grid';
import { flexbox } from "@mui/system";

export default function Home() {

    var style1 = {
        margin: "25px",
        display: "flex",
        justifyContent: "center"
    }

    return (
        <div style={style1}>
            <Grid container spacing={1} columns={2}>
                <Grid item xs={1}>
                    <FileInput />
                </Grid>
                <Grid item xs={1}>
                    <TextInput />
                </Grid>
            </Grid>
        </div>
    );
}