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
import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/styles';

import "./Home.css";


export default function Home() {
    const [discoveryMode, setDiscoveryMode] = React.useState(false);
    const [uploadMode, setUploadMode] = React.useState(false);
    const [anchorElUpload, setAnchorElUpload] = React.useState(null);
    const [anchorElDiscover, setAnchorElDiscover] = React.useState(null);

    const theme = useTheme({

        paper: {
            backgroundColor: 'transparent',
        }

    })

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

    var style10 = {
        fontSize: '60px',
        color: "#535252",
    }

    const showUpload = () => {
        setUploadMode(true);
    }

    const showDiscover = () => {
        setDiscoveryMode(true);
    }

    const showUploadPopover = (event) => {
        setAnchorElUpload(event.currentTarget);
    }

    const hideUploadPopover = () => {
        setAnchorElUpload(null);
    };

    const showDiscoverPopover = (event) => {
        setAnchorElDiscover(event.currentTarget);
    }

    const hideDiscoverPopover = () => {
        setAnchorElDiscover(null);
    };
    const openUploadPopover = Boolean(anchorElUpload);

    const openDiscoverPopover = Boolean(anchorElDiscover);

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
                                <button style={style8} onClick={showUpload}><img src={upload} alt="upload" style={style5} className="uploadIcon" onMouseEnter={showUploadPopover} onMouseLeave={hideUploadPopover} /></button>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',
                                    }}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            backgroundColor:
                                                'transparent'
                                        }
                                    }}
                                    open={openUploadPopover}
                                    anchorEl={anchorElUpload}

                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'center',
                                    }}
                                    onClose={hideUploadPopover}
                                    disableRestoreFocus
                                >
                                    <Typography sx={{ p: 1 }} style={style10}><b>Upload</b></Typography>
                                </Popover>
                            </Grid>
                            <Grid item xs={12} md={6} style={style7}>
                                <button style={style8} onClick={showDiscover}><img src={discovery} alt="discovery" style={style5} className="discoveryIcon" onMouseEnter={showDiscoverPopover} onMouseLeave={hideDiscoverPopover} /></button>
                                <Popover
                                    id="mouse-over-popover"
                                    sx={{
                                        pointerEvents: 'none',

                                    }}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            backgroundColor:
                                                'transparent'
                                        }
                                    }}
                                    open={openDiscoverPopover}
                                    anchorEl={anchorElDiscover}
                                    anchorOrigin={{
                                        vertical: 'center',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'center',
                                        horizontal: 'center',
                                    }}

                                    onClose={hideDiscoverPopover}
                                    disableRestoreFocus
                                >
                                    <Typography sx={{ p: 1 }} style={style10}><b>Discover</b></Typography>
                                </Popover>
                            </Grid>
                        </Grid>
                    </div>
                    <br />
                    <div>
                        <Typography >
                            We are using <b>Expressive-Arts Therapy</b> and <b>Applied Visual Anthropology</b> techniques to collect an anti-colonial dataset about migration.
                            The purpose is to inform the public, AI researchers and businesses about the importance of representing the diverse experiences in the development of emerging technologies. Through our <b>User Research</b>, we designed and developed a special image-annotation tool for
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
                                <img src={HomeIcon} alt="#Home" className="homeIcon" />
                                <br />
                                <Typography>#Home</Typography>
                            </button>
                        </Grid>
                        <Grid item xs={12} md={4} style={style9}>
                            <button style={style8}>
                                <img src={SolidarityIcon} alt="#Solidarity" className="solidarityIcon" />
                                <br />
                                <Typography>#Solidarity</Typography>
                            </button>
                        </Grid>
                        <Grid item xs={12} md={4} style={style9}>
                            <button style={style8}>
                                <img src={WellBeingIcon} alt="#Well-being" className="wellBeingIcon" />
                                <br />
                                <Typography>#Well-being</Typography>
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


