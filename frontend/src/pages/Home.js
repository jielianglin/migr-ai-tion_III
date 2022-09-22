import React from "react";

import UploadFormDemo from "../components/upload/UploadFormDemo";
// import Gallery from "../components/discovery/Gallery";

import upload from "../pics/upload.png";
import discovery from "../pics/discovery.png";
import HomeIcon from "../pics/HomeIcon.png";
import SolidarityIcon from "../pics/SolidarityIcon.png";
import WellBeingIcon from "../pics/WellBeingIcon.png";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';

import "./Home.css";

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

var style11 = {
    zIndex: 3,
}

var style12 = {
    zIndex: 2,
    position: 'relative',
    left: "5px",
    top: "-10px",
    color: "#535252",
}

var style13 = {
    zIndex: 1,
    position: 'relative',
    left: "10px",
    top: "-20px",
    color: "white",
}

//themes text div
var style14 = {
    display: 'flex',
    justifyContent: 'left',

}

//themes text
var style15 = {
    color: "#B272CE",
    fontStyle: "italic",
    textAlign: "left",
    padding: "15px"
}

// intro text div
var style16 = {
    padding: "20px",
}

// 'join open source' 
var style17 = {
    background: "white",
    color: "#B272CE",
    borderRadius: '15px',
}

export default function Home() {
    const [discoveryMode, setDiscoveryMode] = React.useState(false);
    const [uploadMode, setUploadMode] = React.useState(false);
    const [anchorElUpload, setAnchorElUpload] = React.useState(null);
    const [anchorElDiscover, setAnchorElDiscover] = React.useState(null);
    const [homeText, setHomeText] = React.useState(false);
    const [solidarityText, setSolidarityText] = React.useState(false);
    const [wellbeingText, setWellbeingText] = React.useState(false);

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


    const showHomeText = () => {
        setHomeText(true);
    }

    const hideHomeText = () => {
        setHomeText(false);
    }

    const showSolidarityText = () => {
        setSolidarityText(true);
    }

    const hideSolidarityText = () => {
        setSolidarityText(false);
    }

    const showWellbeingText = () => {
        setWellbeingText(true);
    }
    const hideWellbeingText = () => {
        setWellbeingText(false);
    }

    if (uploadMode) {
        return <UploadFormDemo />
    } else {
        if (discoveryMode) {

            return null
            //<Gallery />

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
                                    <Typography sx={{ p: 1 }} style={style10} className="uploadPopOver"><b>Upload</b></Typography>
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
                                    <Typography sx={{ p: 1 }} style={style10} className="discoverPopoverText"><b>Discover</b></Typography>
                                </Popover>
                            </Grid>
                        </Grid>
                    </div>
                    <br />
                    <div style={style16}>

                        <hr />
                        <Typography variant="h7" className="introText">
                            We are using <b>Expressive-Arts Therapy</b> and <b>Applied Visual Anthropology</b> techniques to collect an anti-colonial dataset about migration.
                            The purpose is to inform the public, AI researchers and businesses about the importance of representing the diverse experiences in the development of emerging technologies. Through our <b>User Research</b>, we have designed and developed a special image-annotation tool for
                            communicating migrant experiences, as a way of sharing intercultural knowledge and disseminating personal and collective tools for healing.
                        </Typography>

                        <hr />
                    </div>
                    <Grid container spacing={2} style={style2}>
                        <Grid item xs={12} md={4} style={style9}>
                            <Box>
                                <button style={style8} onMouseEnter={showHomeText} onMouseLeave={hideHomeText}>
                                    <img src={HomeIcon} alt="#Home" className="homeIcon" />
                                    <br />
                                    <Typography style={style11}>#home</Typography>
                                    <Typography style={style12}>#home</Typography>
                                    <Typography style={style13}>#home</Typography>
                                    <div style={style14}>
                                        <br />
                                        {homeText && (
                                            <Typography variant="h7" style={style15} className="themesText">
                                                <hr />
                                                We use creative and healing tools to synthesize notions of what <b>#home</b> means for those living in liminal states.
                                                <hr />
                                            </Typography>)}
                                    </div>
                                </button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4} style={style9}>
                            <Box>
                                <button style={style8} onMouseEnter={showSolidarityText} onMouseLeave={hideSolidarityText}>
                                    <img src={SolidarityIcon} alt="#Solidarity" className="solidarityIcon" />
                                    <br />
                                    <Typography style={style11}>#solidarity</Typography>
                                    <Typography style={style12}>#solidarity</Typography>
                                    <Typography style={style13}>#solidarity</Typography>
                                    <br />
                                    <div style={style14}>
                                        {solidarityText && (

                                            <Typography variant="h7" style={style15} className="themesText">
                                                <hr />
                                                We highlight issues, such as, migration flows, representation, discrimmination, surveillance and labor under the umbrella of <b> #solidarity</b>.
                                                <hr />
                                            </Typography>)}
                                    </div>
                                </button>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4} style={style9}>
                            <Box>
                                <button style={style8} onMouseEnter={showWellbeingText} onMouseLeave={hideWellbeingText}>
                                    <img src={WellBeingIcon} alt="#Well-being" className="wellBeingIcon" />
                                    <br />
                                    <Typography style={style11}>#well-being</Typography>
                                    <Typography style={style12}>#well-being</Typography>
                                    <Typography style={style13}>#well-being</Typography>
                                    <br />
                                    <div style={style14}>
                                        {wellbeingText && (
                                            <Typography variant="h7" style={style15} className="themesText">
                                                <hr />
                                                We research cultural and individual notions and practices of <b>#well-being</b> and connect various threads of knowledge to form intercultural models for being well together.
                                                <hr />
                                            </Typography>)}
                                    </div>
                                </button>
                            </Box>
                        </Grid>
                    </Grid>

                    <div style={style2}>
                        <Stack spacing={2} direction="column" style={style3}>
                            <Button variant="contained" style={style4}>  Sign Up For Our Newsletter!  </Button>
                            <Button variant="contained" style={style17}>  Join Our Open Source Community!  </Button>
                        </Stack>
                    </div>
                </div >

            );
        }
    }

}


