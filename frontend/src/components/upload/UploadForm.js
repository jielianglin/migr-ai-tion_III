import React from "react";
import axios from "axios";

import CanvasII from "./CanvasII";
import TextForm from "./TextForm";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, useTheme } from '@mui/styles';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export default function UploadForm() {
    const [post, setPost] = React.useState(false);
    const [files, setFiles] = React.useState(null);
    const [tags, setTags] = React.useState([]);
    const [text, setText] = React.useState(null);
    const [src, setSrc] = React.useState(null);
    const [progress, setProgress] = React.useState(false);
    const [trigger, setTrigger] = React.useState(false);

    // const [src, setSrc] = React.useState(null);
    // const [returnTags, setReturnTags] = React.useState([]);
    // const [returnCaption, setReturnCaption] = React.useState(null);
    // const [returnAITags, setReturnAITags] = React.useState([]);

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
        display: "flex",
        justifyContent: "center",
    }

    const theme = useTheme({
        palette: {
            primary: {
                main: "#B272CE",
            },
        }
    });
    //receive data from child (CanvasII)
    const readiedFiles = (photoData, annotationData) => {
        console.log("receiving files from CanvasII");
        console.log("photodata:", photoData, "annotationData:", annotationData);
        // setFiles(photoData, annotationData);
    };

    const enteredText = (text) => {
        setText(text);
    };
    const selectedTags = (tags) => {
        setTags(tags);
    };

    async function postData() {
        setTrigger(!trigger);
        setProgress(true);
        console.log(tags);
        console.log(tags.join(","));

        let formData = new FormData();
        //is this correct?
        formData.append("files", files);
        formData.append("text", text);
        formData.append("tags", tags.join(","));
        let response = await axios.post("http://localhost:8000/images", formData);
        // props.newTitle();
        setSrc(`http://localhost:8000/images/${response.data.id}.jpeg`);
        console.log(response.data.text);
        // setReturnCaption(response.data.caption);
        // console.log(response.data.tags);
        // setReturnTags(response.data.tags);
        // console.log(response.data.ai_tags);
        // setReturnAITags(response.data.ai_tags || []);
        setPost(true);
        setProgress(false);
    }

    if (post) {
        return (
            <div>
                <Typography> Success!</Typography>
                <div style={style5}>
                    <img src={src} alt="" className="returnImg" />
                </div>
                <Stack spacing={2} direction="column" style={style3}>
                    <Button variant="contained" style={style4}>  Back to Home </Button>
                    <Button variant="contained" style={style4}>  Go to the Gallery  </Button>
                </Stack>

            </div>
        );
    } else {
        return (
            <div style={style1}>
                <div>
                    <Grid container spacing={9}>
                        <Grid item xs={12} md={6}>
                            <CanvasII trigger={trigger} imgFiles={readiedFiles} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextForm enteredText={enteredText} selectedTags={selectedTags} />
                        </Grid>
                    </Grid>
                </div>

                <div style={style2}>
                    <Stack spacing={2} direction="row" style={style3}>
                        <Button variant="contained" style={style4} onClick={postData}>  Submit  </Button>
                        <ThemeProvider theme={theme}>
                            {progress && <CircularProgress />}
                        </ThemeProvider>
                    </Stack>
                </div>
            </div >
        );
    }
}