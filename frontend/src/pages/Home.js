import React from "react";

import FileInput from "../components/FileInput";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";

import Grid from '@mui/material/Grid';

export default function Home() {

    var style1 = {
        margin: "50px",
    }


    var style2 = {
        marginTop: "30px",
        display: "block",
        margin: "0auto",
        display: "flex",
        justifyContent: "center",
    }

    return (
        <div style={style1}>
            <div>
                <Grid container spacing={1} columns={2}>
                    <Grid item xs={1}>
                        <FileInput />
                    </Grid>
                    <Grid item xs={1}>
                        <TextInput />
                    </Grid>
                </Grid>
            </div>

            <div style={style2}>
                <SubmitButton />
            </div>

        </div >
    );
}