import React, { useEffect, useRef, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

import RubberIcon from "../../pics/RubberIcon.jpg";
import Palette from './Palette';
import FileInput from './FileInput';

// import "./CanvasII.css"

var image;

export default function CanvasII() {
    const canvasRef = useRef(null);
    const ctx = useRef(null);
    const [color, setColor] = React.useState(['#B272CE']);
    const [size, setSize] = React.useState({ width: window.innerWidth, height: window.innerHeight })
    const [mouseDown, setMouseDown] = React.useState(false);
    const [lastPosition, setPosition] = React.useState({
        x: 0,
        y: 0
    });
    const [canvasImage, setCanvasImage] = React.useState(null);
    const [brushSize, setBrushSize] = React.useState(25)

    //canvas
    var style1 = {
        border: "2px solid #D1C6B6",
        borderRadius: "5px",
    }

    //canvas div
    var style2 = {
        display: "flex",
        justifyContent: "center",
    }

    // var style3 = {
    //     display: "flex",
    //     backgroundColor: "#FFFFFF",
    //     color: "#B272CE",
    //     borderRadius: "15px",
    //     margin: "0 auto"
    // }

    // var style4 = {
    //     display: "flex",
    //     border: "1px solid #B272CE",
    //     borderRadius: "15px",
    //     backgroundColor: "transparent",
    //     color: "#B272CE",
    //     margin: "0 auto",
    // }

    //brush size buttons
    var style5 = {
        display: "flex",
        justifyContent: "center",
        padding: "10px 0px 5px 0px",
    }

    //brush size
    var style4 = {
        backgroundColor: "rgba( 255, 255, 255, 0.5)",
        padding: "15px",
        borderRadius: "17px",
        margin: "10px",
        width: "140px"
    }

    //brush size text
    var style7 = {
        color: "#B272CE",
        textAlign: "center",
        // display: "inline",
    }

    //palette div
    var style8 = {
        display: "flex",
        justifyContent: "center",
        margin: "10px",
    }

    //opacity div
    var style6 = {
        // position: "relative",
        // top: "20px",
        backgroundColor: "rgba( 255, 255, 255, 0.5)",
        padding: "15px 20px 0px 20px",
        borderRadius: "17px",
        margin: "10px",
        width: "140px",
        height: "90px",
        textAlign: "center",

    }

    //opacity
    var style9 = {
        color: "#B272CE",
        // padding: "5px 30px 0px 0px",
    }


    var style10 = {
        // backgroundColor: "rgba( 255, 255, 255, 0.5)",
        fontSize: "16px",
        color: "#B272CE",
        padding: "25px 10px 25px 10px",
        margin: "10px"
    }

    //erase and undo
    var style11 = {
        backgroundColor: "rgba( 255, 255, 255, 0.5)",
        fontSize: "16px",
        color: "#B272CE",
        padding: "25px 10px 25px 10px",
        margin: "10px"
    }

    //slider
    var style12 = {
        padding: "5px 0px 5px 0px",
        // margin: "0 auto"
    }

    //col 2 div - brush size and opacity
    var style13 = {
        display: "flex",
        justifyContent: "center"

    }

    // col 3 div - erase and clear
    var style14 = {
        display: "flex",
        justifyContent: "center"
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: '#B272CE',
            },
        },
    });

    useEffect(() => {
        const checkSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, [])

    var canvasWidth = size.width / 2.25;
    if (size.width < 1007) { canvasWidth = size.width - 50 }


    var canvasHeight = size.height / 2.25;

    useEffect(() => {
        if (canvasRef.current) {
            ctx.current = canvasRef.current.getContext('2d');
            image = new Image();
            image.src = `${canvasImage}`
            image.onload = () => {
                ctx.current.drawImage(image, 0, 0, canvasWidth, canvasHeight);
            };
        }

    }, [canvasImage, canvasWidth, canvasHeight])

    const draw = useCallback((x, y) => {

        if (mouseDown) {
            ctx.current.beginPath();
            ctx.current.strokeStyle = color;
            ctx.current.lineWidth = (brushSize);
            ctx.current.lineJoin = 'round'
            ctx.current.moveTo(lastPosition.x, lastPosition.y);
            ctx.current.lineTo(x, y)
            ctx.current.closePath();
            ctx.current.stroke();

            setPosition({
                x,
                y
            });

        }
    }, [lastPosition, mouseDown, color, setPosition])

    // const download = async () => {
    //     const image = canvasRef.current.toDataURL('image/png');
    //     const blob = await (await fetch(image)).blob();
    //     const blobURL = URL.createObjectURL(blob);
    //     const link = document.createElement('a');
    //     link.href = blobURL;
    //     link.download = "image.png";
    //     link.click();
    // }

    const clear = () => {
        ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
    }

    const onMouseDown = (e) => {
        setPosition({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        })
        setMouseDown(true);
    }

    const onMouseUp = () => {
        setMouseDown(false);
    }

    const onMouseMove = (e) => {
        draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    }

    const setBrushSmall = () => {
        setBrushSize(12);
    }

    const setBrushMedium = () => {
        setBrushSize(25);
    }

    const setBrushLarge = () => {
        setBrushSize(50);
    }

    if (canvasImage) {
        return (
            <div >
                <Typography>
                    Upload a picture and make a collage using your photograph and our painting tool!
                    <br />
                    You can paint some emotions about your memory.
                    <br />
                    <br />
                </Typography>
                <div style={style2}>
                    <canvas
                        style={style1}
                        width={canvasWidth}
                        height={canvasHeight}
                        ref={canvasRef}
                        onMouseMove={onMouseMove}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseUp}
                    />
                </div>
                <br />
                <Grid container justifyContent="center" flexDirection="column" alignItems="center"
                    spacing={0}>
                    <Grid item xs={11} >
                        <div className="palette" style={style8}>
                            <Palette selectColor={color => setColor(color)} />
                        </div>
                    </Grid>
                    <Grid item xs={11} >
                        <div className="columnTwo" style={style13}>
                            <div style={style4} className="brushSize">
                                <ThemeProvider theme={theme}>
                                    <Typography style={style7}>Brush size:</Typography>
                                    <ButtonGroup variant="text" aria-label="text button group" style={style5}>
                                        <Button onClick={setBrushSmall}>s</Button>
                                        <Button onClick={setBrushMedium}>m</Button>
                                        <Button onClick={setBrushLarge}>l</Button>
                                    </ButtonGroup>
                                </ThemeProvider>
                            </div>
                            <div style={style6} className="opacity">
                                <ThemeProvider theme={theme}>
                                    <Typography style={style9}>Opacity:
                                    </Typography>
                                    <Box width={100} style={style12}>
                                        <Slider
                                            size="small"
                                            defaultValue={70}
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                        />
                                    </Box>
                                </ThemeProvider>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={11}  >
                        <div classname="columnThree" style={style14}>
                            <div className="erase">
                                <ThemeProvider theme={theme}>
                                    <Chip style={style11} avatar={<Avatar alt="erase" src={RubberIcon} />} label="Erase" />
                                </ThemeProvider>
                            </div>
                            <div className="undo">
                                <ThemeProvider theme={theme}>
                                    <Chip style={style11} icon={<ArrowBackIcon />} label="Undo" />
                                </ThemeProvider>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={11} md={4} >
                        <div className="clearCanvas">
                            <Chip variant="contained" style={style10} onClick={clear} label="Clear Canvas" icon={<DeleteIcon />} />
                        </div>
                        {/* <Button variant="outlined" onclick={download} style={style4}>Download</Button> */}
                    </Grid>
                </Grid>
            </div>
        )
    } else {
        return (
            <div >
                <FileInput selectImage={setCanvasImage} />
            </div>
        );
    }
}