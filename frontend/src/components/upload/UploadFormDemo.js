import React from "react";
import axios from "axios";

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

import upload from '../../pics/upload.png';
import discovery from '../../pics/discovery.png';

export default function Home() {
    const [returnView, setReturnView] = React.useState(false);
    const [progress, setProgress] = React.useState(false);
    const [submitButton, showSubmitButton] = React.useState(true);
    const [annotation, setAnnotation] = React.useState(false);
    const [visibilityButton, setVisibilityButton] = React.useState(true);
    const [visibilityOffButton, setVisibilityOffButton] = React.useState(false);

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
        backgroundColor: "#B272CE",
        borderRadius: '15px',
    }

    // image div
    var style5 = {
        display: "flex",
        justifyContent: "left",
    }

    //pic 1
    var style6 = {
        zIndex: 1,
        position: 'absolute'
    }

    //pic 2
    var style7 = {
        zIndex: 2,
    }

    //typography 
    var style8 = {
        display: "flex",
        justifyContent: "left"
    }
    var style9 = {


        margin: "50px"

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
        }, 5000);

        return () => clearTimeout(timer);
    }

    const showAnnotation = () => {
        setAnnotation(true);
        setVisibilityButton(false);
        setVisibilityOffButton(true);
    }

    const hideAnnotation = () => {
        setAnnotation(false);
        setVisibilityButton(true);
        setVisibilityOffButton(false);
    }

    if (returnView) {
        return (
            <div>
                <div style={style9}>
                    <Typography style={style8}> Success! Now compare your tags to the AI tags from ImageNet.</Typography>

                    <div style={style5}>
                        <img src={upload} alt="" style={style6} />
                        {annotation && <img src={discovery} alt="" style={style7} />}
                    </div>

                </div>

                <div>
                    {visibilityButton && <Button> <VisibilityIcon onClick={showAnnotation} /></Button>}
                    {visibilityOffButton && <Button>  <VisibilityOffIcon onClick={hideAnnotation} /> </Button>}
                </div>
                <div style={style3}>
                    <Button variant="contained" style={style4}>  To the Gallery  </Button>
                </div>

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