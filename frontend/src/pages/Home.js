import React from "react";

// import UploadForm from "../components/UploadForm";

import upload from "../pics/upload.png";
import discovery from "../pics/discovery.png";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { flexbox } from "@mui/system";

// import { ThemeProvider } from '@miu/material/style';
// import Typography from '@mui/material/Typography';

export default function Home() {

    var style1 = {
        margin: "50px",
    }

    var style2 = {
        marginTop: "30px",
        margin: "0auto",
        display: "flex",
        justifyContent: "center",
    }

    var style3 = {
        display: "flex",
        justifyContent: "center",
        margin: "50px",
    }

    var style4 = {
        backgroundColor: "#B272CE",
        borderRadius: '15px',
    }

    var style5 = {
        maxWidth: '250px',
    }

    var style6 = {
        display: "flex",
        justifyContent: "right",
    }

    var style7 = {
        display: "flex",
        justifyContent: "left",
    }
    return (
        <div style={style1}>
            <div>
                <Grid container spacing={0} alignItems="center">
                    <Grid item xs={12} md={6} justifyContent="center" style={style6} >
                        <img src={upload} alt="upload" style={style5} />
                    </Grid>
                    <Grid item xs={12} md={6} style={style7}>
                        <img src={discovery} alt="discovery" style={style5} />
                    </Grid>
                </Grid>
            </div>
            <br />
            <div>
                <Typography >
                    We are using Expressive-Arts Therapy and Applied Visual Anthropology techniques to collect an anti-colonial dataset about migration.
                    The purpose is to inform the public, AI researchers and businesses about the importance of representing the diverse experiences of those on the
                    margins in the development of emerging technologies. Through our User Research, we designed and developed a special image-annotation tool for
                    communicating migrant experiences, as a way of disseminating personal and collective healing strategies.
                    <br />
                    <br />
                    Some migration themes that we care about are {""}
                    <b>#home</b>, <b>#solidarity</b> and <b>#well-being</b>!
                </Typography>
            </div>
            <div style={style2}>
                <Stack spacing={2} direction="column" style={style3}>
                    <Button variant="contained" style={style4}>  Join Our Newsletter!  </Button>
                    <Button variant="contained" style={style4}>  Make a Donation!  </Button>
                </Stack>
            </div>
        </div >

    );
}
