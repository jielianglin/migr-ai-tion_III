import React from "react";
// import axios from "axios";

// import Canvas from "./Canvas";
import CanvasII from "./CanvasII";
import TextForm from "./TextForm";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Chip from "@mui/material/Chip";
import Avatar from '@mui/material/Avatar';

import Yassi_Hormoz from '../../pics/Yassi_Hormoz.jpeg';
import Yassi_Hormoz_annotation from '../../pics/Yassi_Hormoz_annotation.jpeg';
import Popover from '@mui/material/Popover';

import "./UploadFormDemo.css";

export default function Home() {
    const [returnView, setReturnView] = React.useState(false);
    const [progress, setProgress] = React.useState(false);
    const [submitButton, showSubmitButton] = React.useState(true);
    const [annotation, setAnnotation] = React.useState(false);
    const [visibilityButton, setVisibilityButton] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    //upload view div
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
        backgroundColor: '#B272CE',
        borderRadius: '15px',
        zIndex: 5,
        position: "absolute"


    }

    // image div
    var style5 = {
        display: "flex",
        justifyContent: "left",
        marginTop: "10px",
        marginRight: "10px"
    }

    // //pic 1
    // var style6 = {
    //     zIndex: 1,
    //     position: 'absolute',
    //     border: "2px solid #D1C6B6",
    //     borderRadius: "5px",
    //     width: "720px"
    // }

    // //pic 2
    // var style7 = {
    //     zIndex: 2,
    //     border: "2px solid #D1C6B6",
    //     borderRadius: "5px",
    //     position: "absolute",
    //     width: "720px"
    // }

    //typography 
    var style8 = {
        display: "flex",
        justifyContent: "left"
    }

    //return view div
    var style9 = {
        margin: "50px",

    }

    //visibility toggle button
    var style10 = {
        display: "flex",
        justifyContent: "left",
        zIndex: 3,
        position: "relative",
        paddingTop: "20px"
    }

    //user chip 
    var style11 = {
        fontSize: '16px',
        color: "#B272CE",
        border: "2px solid #B272CE",
        backgroundColor: "#e6dac8",
        marginTop: "10px",
        marginRight: "10px",
    }

    //user chip avatar
    var style12 = {
        backgroundColor: "#B272CE",
        color: "White",
        paddingTop: "3px",
        paddingBottom: "3px",
    }

    // tags div
    // var style13 = {
    //     marginTop: "90px",
    //     zIndex: 4,
    //     position: 'absolute'
    // }

    //imageNetChip
    var style14 = {
        fontSize: '16px',
        color: "#57524B",
        border: "2px solid #D1C6B6",
        backgroundColor: "#e6dac8",
        marginTop: "10px",
        marginRight: "10px",
    }

    //imageNet chip avatar
    var style15 = {
        backgroundColor: "#D1C6B6",
        color: "White",
        paddingTop: "3px",
        paddingBottom: "3px",
    }

    //canvas visibility button
    var style16 = {
        border: "1px solid #4F4F4F",
        borderRadius: "1px",
        padding: "0px 2px 0px 2px"
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: "#B272CE",
            },
        }
    });


    const openPopover = Boolean(anchorEl);
    const showPopover = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const hidePopover = () => {
        setAnchorEl(null);
    };

    const showDemo = () => {
        hidePopover();
        console.log("Here!");

        var timer = null;

        setProgress(true);
        showSubmitButton(false);

        timer = setTimeout(() => {
            setProgress(false);
            setReturnView(true);
        }, 1000);

        return () => clearTimeout(timer);
    }

    const showAnnotation = () => {
        setAnnotation(true);
        setVisibilityButton(false);
        // setVisibilityOffButton(true);
    }

    const hideAnnotation = () => {
        setAnnotation(false);
        setVisibilityButton(true);
        // setVisibilityOffButton(false);
    }

    if (returnView) {
        return (
            <div>
                <div style={style9}>
                    <Grid container spacing={9}>
                        <Grid item xs={12} md={6}>
                            <Typography style={style8}> Success! Now compare your tags to the AI tags from ImageNet.</Typography>
                            <div style={style10}>

                                <btn style={style16}> Canvas {visibilityButton ? <VisibilityIcon onClick={showAnnotation} /> : <VisibilityOffIcon onClick={hideAnnotation} />} </btn>

                            </div>
                            <div style={style5}>

                                <img src={Yassi_Hormoz} alt=""
                                    // style={style6} 
                                    class="demoImage1" />

                                {annotation && <img src={Yassi_Hormoz_annotation} alt=""
                                    // style={style7} 
                                    class="demoImage2" />}
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div
                                // style={style13} 
                                class="demoTags">
                                <Typography style={style8}> <b>Your Tags:</b> </Typography>
                                <div>
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="Hormoz"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="Iran"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="colors"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="textures"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="Mars"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="footsteps"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="belonging"
                                        variant="filled"
                                    />

                                </div>
                                <br />
                                <br />
                                <Typography style={style8}> <b>ImageNet Tags:</b> </Typography>
                                <Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="sky"
                                    variant="filled"
                                />
                                <Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="clouds"
                                    variant="filled"
                                /><Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="dirt"
                                    variant="filled"
                                /><Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="bin"
                                    variant="filled"
                                />
                                <Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="plastic bag"
                                    variant="filled"
                                />
                                <Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="bottle"
                                    variant="filled"
                                /><Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="rocks"
                                    variant="filled"
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <Stack>
                    <div style={style3}>
                        <Button variant="contained" style={style4}>  To the Gallery  </Button>
                    </div>
                </Stack> */}

            </div>
        );
    } else {
        return (
            <div style={style1}>
                <div>
                    <Grid container spacing={9}>
                        <Grid item xs={12} md={6}>
                            <CanvasII />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextForm />
                        </Grid>
                    </Grid>
                </div>

                <div style={style2}>
                    <Stack spacing={2} direction="row" style={style3}>
                        {submitButton && <Button variant="contained" style={style4} onClick={showDemo} onMouseEnter={showPopover} onMouseLeave={hidePopover}> Submit  </Button>}
                        <Popover
                            id="mouse-over-popover"
                            sx={{
                                pointerEvents: 'none',
                            }}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    backgroundColor:
                                        "#D1C6B6",
                                    padding:
                                        "8px"
                                }
                            }}
                            open={openPopover}
                            anchorEl={anchorEl}

                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            onClose={hidePopover}
                            disableRestoreFocus
                        ><Typography>Hello! <br /><b><i>The following section is for demo purposes only.</i></b> <br />The database is currently under construction. <br /> Click "Submit" to see our designs.
                            </Typography></Popover>
                        <ThemeProvider theme={theme}>
                            {progress && <CircularProgress />}
                        </ThemeProvider>
                    </Stack>
                </div>
            </div >
        );
    }
}