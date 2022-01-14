import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { ThemeProvider, useTheme } from '@mui/styles';
import SelectionHighlighter from 'react-highlight-selection';

import './TextForm.css';

var hashtags = [];
var hashtagswithhash;

export default function TextForm(props) {
    const [text, setText] = React.useState(null);
    const [highlighter, setHighlighter] = React.useState(false);
    const [hashtag, setHashtag] = React.useState("");

    var style1 = {
        display: "flex",
        justifyContent: "right",
        marginTop: "10px",
    }
    var style2 = {
        backgroundColor: "transparent",
        border: "none",
        color: "#B272CE",
        textDecoration: 'underline',
        textStyle: "bold",
    }

    var style3 = {
        marginTop: "10px",
        backgroundColor: "#D9CDBC",
        borderRadius: "5px",
        padding: "10px 10px 10px 10px"
    }

    var style4 = {
        marginTop: "10px",
        color: "#B272CE"
    }
    const theme = useTheme({
        palette: {
            primary: {
                main: "#B272CE",
            },
        },
    });

    const enteredText = (event) => {
        setText(event.target.value);
        // console.log(event.target.value);

    }


    const selectionHandler = (selection) => {
        console.log(selection.selection);
        setHashtag(hashtag);
        setHashtag(selection.selection);
        hashtags.push(selection.selection);
        console.log("hashtags:" + hashtags);
    }



    const enableHighlighter = () => {
        setHighlighter(true);
    }


    return (
        <div>
            <Typography>Write about your memory. Then, highlight the important words.</Typography>
            <ThemeProvider theme={theme}>

                <div>
                    {highlighter ?
                        <div>
                            <div style={style3}>
                                <SelectionHighlighter
                                    text={text}
                                    selectionHandler={selectionHandler}
                                    customClass="highlighter-color"
                                />
                            </div>
                            <div style={style4}>
                                {hashtags}
                            </div>
                        </div>
                        :
                        <div>
                            <TextField
                                id="filled-multiline-static"
                                label="My Memory"
                                multiline={true}
                                rows={15}
                                variant="filled"
                                margin="normal"
                                fullWidth="true"
                                onChange={enteredText}
                            />
                            <div style={style1}>
                                <button style={style2} onClick={enableHighlighter}> Highlight the text >></button>
                            </div>
                        </div>
                    }
                </div>

            </ThemeProvider>
        </div>
    )
}