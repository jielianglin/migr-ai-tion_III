import React from "react";

import Canvas from "../components/Canvas";
import TextInput from "../components/TextForm";
import SubmitButton from "../components/SubmitButton";

import Grid from '@mui/material/Grid';

export default function Home() {

    var style1 = {
        margin: "50px",

        "@media(max-width: 576px)": {
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
        }
    }


    var style3 = {
        marginTop: "30px",
        margin: "0auto",
        display: "flex",
        justifyContent: "center",
    }

    return (
        <div style={style1}>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Canvas />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextInput />
                    </Grid>
                </Grid>
            </div>

            <div style={style3}>
                <SubmitButton />
            </div>
        </div >
    );
}