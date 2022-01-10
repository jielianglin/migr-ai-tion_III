import React from "react";

import UploadForm from "../components/upload/UploadForm";
import Gallery from "../components/discovery/Gallery";

import upload from "../pics/upload.png";
import discovery from "../pics/discovery.png";
import HomeIcon from "../pics/HomeIcon.png";
import SolidarityIcon from "../pics/SolidarityIcon.png";
import WellBeingIcon from "../pics/WellBeingIcon.png";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import { ThemeProvider } from '@miu/material/style';

export default function Home() {
    const [discoveryMode, setDiscoveryMode] = React.useState(false);
    const [uploadMode, setUploadMode] = React.useState(false);

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

    var style8 = {
        backgroundColor: "transparent",
        border: "none",
    }

    var style9 = {
        display: "flex",
        justifyContent: "center",
    }

    const showUpload = () => {
        setUploadMode(true);
    }

    const showDiscovery = () => {
        setDiscoveryMode(true);
    }

    if (uploadMode) {
        return <UploadForm />
    } else {
        if (discoveryMode) {
            return <Gallery />
        } else {
            return (
                <div style={style1}>
                    <div>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={6} style={style6} >
                                <button style={style8} onClick={showUpload}><img src={upload} alt="upload" style={style5} /> </button>
                            </Grid>
                            <Grid item xs={12} md={6} style={style7}>
                                <button style={style8} onClick={showDiscovery}><img src={discovery} alt="discovery" style={style5} /> </button>
                            </Grid>
                        </Grid>
                    </div>
                    <br />
                    <div>
                        <Typography >
                            We are using Expressive-Arts Therapy and Applied Visual Anthropology techniques to collect an anti-colonial dataset about migration.
                            The purpose is to inform the public, AI researchers and businesses about the importance of representing the diverse experiences in the development of emerging technologies. Through our User Research, we designed and developed a special image-annotation tool for
                            communicating migrant experiences, as a way of disseminating personal and collective healing paradigms.
                            <br />
                            <br />
                            {/* Some migration themes that we care about are {""}
                    <b>#home</b>, <b>#solidarity</b> and <b>#well-being</b>! */}
                        </Typography>
                    </div>
                    <Grid container spacing={2} style={style2}>
                        <Grid item xs={12} md={4} style={style9}>
                            <button style={style8}>
                                <img src={HomeIcon} alt="upload" />
                                <br />
                                <Typography>#Home</Typography>
                            </button>
                        </Grid>
                        <Grid item xs={12} md={4} style={style9}>
                            <button style={style8}>
                                <img src={SolidarityIcon} alt="discovery" />
                                <br />
                                <Typography>#Solidarity</Typography>
                            </button>
                        </Grid>
                        <Grid item xs={12} md={4} style={style9}>
                            <button style={style8}>
                                <img src={WellBeingIcon} alt="discovery" />
                                <br />
                                <Typography>#WellBeing</Typography>
                            </button>
                        </Grid>
                    </Grid>
                    <div style={style2}>
                        <Stack spacing={2} direction="column" style={style3}>
                            <Button variant="contained" style={style4}>  Join Our Newsletter!  </Button>
                            <Button variant="contained" style={style4}>  Make a Donation!  </Button>
                        </Stack>
                    </div>
                </div >

            );
        }
    }

}


