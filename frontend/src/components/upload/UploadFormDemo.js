import React from "react";
// import axios from "axios";

// import Canvas from "./Canvas";
import CanvasII from "./CanvasII";
import TextForm from "./TextForm";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Chip from "@mui/material/Chip";
import Avatar from '@mui/material/Avatar';

import upload from '../../pics/upload.png';
import discovery from '../../pics/discovery.png';

export default function Home() {
    const [returnView, setReturnView] = React.useState(false);
    const [progress, setProgress] = React.useState(false);
    const [submitButton, showSubmitButton] = React.useState(true);
    const [annotation, setAnnotation] = React.useState(false);
    const [visibilityButton, setVisibilityButton] = React.useState(true);
    // const [visibilityOffButton, setVisibilityOffButton] = React.useState(false);

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
        justifyContent: "center",
        marginTop: "10px"
    }

    //pic 1
    var style6 = {
        zIndex: 1,
        position: 'absolute',
        border: "2px solid #D1C6B6",
        borderRadius: "5px",
    }

    //pic 2
    var style7 = {
        zIndex: 2,
        border: "2px solid #D1C6B6",
        borderRadius: "5px",
        position: "absolute"
    }

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
        justifyContent: "center",
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
    var style13 = {


        marginTop: "90px",
        zIndex: 4,
        position: 'absolute'
    }

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

    const theme = useTheme({
        palette: {
            primary: {
                main: "#B272CE",
            },
        }
    });


    const showDemo = () => {
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
                                <Button > {visibilityButton ? <VisibilityIcon onClick={showAnnotation} /> : <VisibilityOffIcon onClick={hideAnnotation} />} </Button>
                            </div>
                            <div style={style5}>

                                <img src={upload} alt="" style={style6} />
                                {annotation && <img src={discovery} alt="" style={style7} />}
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div style={style13}>
                                <Typography style={style8}> Your Tags: </Typography>
                                <div>
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="test"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="test"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="test"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="test"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="test"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="test"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="test"
                                        variant="filled"
                                    />
                                    <Chip
                                        avatar={<Avatar style={style12}><b>#</b></Avatar>}
                                        className="tags-chip"
                                        style={style11}
                                        label="test"
                                        variant="filled"
                                    />
                                </div>
                                <br />
                                <br />
                                <Typography style={style8}> ImageNet Tags: </Typography>
                                <Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="test"
                                    variant="filled"
                                />
                                <Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="test"
                                    variant="filled"
                                /><Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="test"
                                    variant="filled"
                                /><Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="test"
                                    variant="filled"
                                /><Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="test"
                                    variant="filled"
                                /><Chip
                                    avatar={<Avatar style={style15}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style14}
                                    label="test"
                                    variant="filled"
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <br />
                <Stack>
                    <div style={style3}>
                        <Button variant="contained" style={style4}>  To the Gallery  </Button>
                    </div>
                </Stack>

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
                        {submitButton && <Button variant="contained" style={style4} onClick={showDemo}>  Submit  </Button>}
                        <ThemeProvider theme={theme}>
                            {progress && <CircularProgress />}
                        </ThemeProvider>
                    </Stack>
                </div>
            </div >
        );
    }
}