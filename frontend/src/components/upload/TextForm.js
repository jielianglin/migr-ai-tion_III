import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Chip from "@mui/material/Chip";
import Avatar from '@mui/material/Avatar';
// import { ThemeProvider } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles'


import { InteractiveHighlighter } from 'react-interactive-highlighter';

import './TextForm.css';


//  var highlights = [];

export default function TextForm(props) {
    const [text, setText] = React.useState(null);
    const [highlighter, setHighlighter] = React.useState(false);
    const [highlights, setHighlights] = React.useState([]);
    const [hashtag, setHashtag] = React.useState([]);

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
    }

    var style5 = {
        fontSize: '16px',
        color: "#B272CE",
        border: "2px solid #B272CE",
        backgroundColor: "#e6dac8",
        marginTop: "10px",
        marginRight: "10px",
    }

    var style6 = {
        backgroundColor: "#B272CE",
        color: "White",
        paddingTop: "3px",
        paddingBottom: "3px",
        // fontStyle: "bold"
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#B272CE',
            },
        },
    });

    const enteredText = (event) => {
        setText(event.target.value);
        // console.log(event.target.value);

    }

    const removeTags = (index) => {
        setHashtag([...hashtag.filter((word) => hashtag.indexOf(word) !== index)]);
    };

    const selectionHandler = (selected, startIndex, numChars) => {
        console.log(selected);
        // setHighlights(highlights);
        setHashtag([...hashtag, selected]);
        highlights.push({ startIndex: startIndex, numChars: numChars });
        setHighlights(highlights);
        // setHighlights([...highlights, startIndex, numChars]);
        // highlightedWords.push([selection.selectionStart, selection.selectionEnd]);
        // console.log(highlightedWords);
    }


    const enableHighlighter = () => {
        setHighlighter(true);
    }


    return (
        <div>
            <Typography>Write about your memory. Then, highlight the important words.</Typography>


            <div>
                {highlighter ?
                    <div>
                        <div style={style3}>
                            <InteractiveHighlighter
                                text={text}
                                highlights={highlights}
                                selectionHandler={selectionHandler}
                                customClass="highlighter-color"
                            />
                        </div>
                        <div style={style4}>
                            {hashtag.map((word, index) => (
                                <Chip
                                    avatar={<Avatar style={style6}><b>#</b></Avatar>}
                                    className="tags-chip"
                                    style={style5}
                                    key={index}
                                    label={word}
                                    onDelete={() => removeTags(index)}
                                    variant="filled"
                                />
                            ))}
                        </div>
                    </div>
                    :
                    <div>
                        <ThemeProvider theme={theme}>
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
                        </ThemeProvider>
                        <div style={style1}>
                            <button style={style2} onClick={enableHighlighter}> Highlight the text {'>>'}</button>
                        </div>
                    </div>
                }
            </div>


        </div>
    )
}