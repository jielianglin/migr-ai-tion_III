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

export default function Home() {
    const [post, setPost] = React.useState(false);
    const [image, setImage] = React.useState(null);
    // const [tags, setTags] = React.useState([]);
    const [text, setText] = React.useState(null);
    const [src, setSrc] = React.useState(null);
    const [progress, setProgress] = React.useState(false);

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

    const selectedImage = (img) => {
        setImage(img);
    };

    const enteredText = (text) => {
        setText(text);
    };
    // const selectedTags = (tags) => {
    //     setTags(tags);
    // };

    async function postData() {
        setProgress(true);
        // console.log(tags);
        // console.log(tags.join(","));
        let formData = new FormData();
        formData.append("file", image);
        formData.append("text", text);
        // formData.append("tags", tags.join(","));
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
                    <Button variant="contained" style={style4}>  See Data Analysis  </Button>
                </Stack>

            </div>
        );
    } else {
        return (
            <div style={style1}>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            {/* <Canvas selectedImage={selectedImage} /> */}
                            <CanvasII selectedImage={selectedImage} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextForm enteredText={enteredText} />
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