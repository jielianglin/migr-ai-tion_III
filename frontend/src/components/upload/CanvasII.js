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


var image;
var transparencyStops = [
    { "value": 10, "hexValue": "1A" },
    { "value": 20, "hexValue": "33" },
    { "value": 30, "hexValue": "33" },
    { "value": 40, "hexValue": "1A" },
    { "value": 50, "hexValue": "33" },
    { "value": 60, "hexValue": "33" },
    { "value": 70, "hexValue": "33" },
    { "value": 80, "hexValue": "33" },
    { "value": 90, "hexValue": "1A" },
    { "value": 100, "hexValue": "FF" },
]

// var paths = [];
// var lastpath = [];
// var points = [];

// var lastX;
// var lastY;

export default function CanvasII() {
    const canvasRef = useRef(null);
    const canvasRef2 = useRef(null);
    const [canvasHeight, setCanvasHeight] = React.useState(null);
    const ctx = useRef(null);
    const ctx2 = useRef(null);
    const [color, setColor] = React.useState(['#B272CE']);
    const [size, setSize] = React.useState({ width: window.innerWidth, height: window.innerHeight })
    const [mouseDown, setMouseDown] = React.useState(false);
    const [lastPosition, setPosition] = React.useState({
        x: 0,
        y: 0
    });
    const [canvasImage, setCanvasImage] = React.useState(null);
    const [brushSize, setBrushSize] = React.useState(25);
    const [transparency, setTransparency] = React.useState('FF');
    const [value, setValue] = React.useState(100);
    const [compositeMode, setCompositeMode] = React.useState(null);
    // const [history, setHistory] = React.useState();
    // const [step, undoStep] = React.useState({});

    console.log(compositeMode);

    //canvas
    var style1 = {
        border: "2px solid #D1C6B6",
        borderRadius: "5px",
        zIndex: 1,
        position: 'absolute',

    }

    //canvas div
    var style2 = {
        display: "flex",
        justifyContent: "center",
        padding: "20px",

    }

    //canvas2 div
    var style3 = {

        zIndex: 2,

    }

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
    if (size.width < 1007) {
        canvasWidth = size.width - 90
    };

    useEffect(() => {

        if (canvasRef.current && canvasRef2.current) {
            ctx.current = canvasRef.current.getContext('2d');
            ctx2.current = canvasRef2.current.getContext('2d');
        }

        image = new Image();
        image.src = `${canvasImage}`;
        image.onload = () => {
            var ratio = image.naturalWidth / image.naturalHeight;
            var imageWidth = canvasWidth;
            var imageHeight = imageWidth / ratio;
            setCanvasHeight(imageHeight);
            ctx.current.drawImage(image, 0, 0, imageWidth, imageHeight);
        };
    }, [canvasImage, size.width, canvasWidth])


    const erase = useCallback((x, y,) => {
        console.log('erasermode');

        setColor("#0000FF");
        // setTransparency("FF")
        console.log("eraser color:" + color);

        setCompositeMode("destination-out");
        console.log("1:" + compositeMode);

        if (mouseDown) {
            ctx2.current.beginPath();
            ctx2.current.globalCompositeOperation = compositeMode;
            console.log("2:" + compositeMode);
            ctx2.current.strokeStyle = color + transparency;
            ctx2.current.lineWidth = brushSize;
            ctx2.current.lineJoin = 'round'
            ctx2.current.moveTo(lastPosition.x, lastPosition.y);
            ctx2.current.lineTo(x, y)
            ctx2.current.closePath();
            ctx2.current.stroke();


            setPosition({
                x,
                y
            });



        }



    }, [lastPosition, mouseDown, color, setPosition, brushSize, compositeMode, transparency])

    const paint = useCallback((x, y) => {
        if (color !== "#0000FF") {
            setCompositeMode("source-over");
            console.log(color);
        }

        if (mouseDown) {

            ctx2.current.beginPath();
            ctx2.current.globalCompositeOperation = compositeMode;
            ctx2.current.strokeStyle = color + transparency;
            console.log(color + transparency);
            ctx2.current.lineWidth = brushSize;
            ctx2.current.lineJoin = 'round';


            ctx2.current.moveTo(lastPosition.x, lastPosition.y);
            ctx2.current.lineTo(x, y)
            ctx2.current.closePath();
            ctx2.current.stroke();

            // points.push({
            //     x: x,
            //     y: y
            // });

            // console.log(paths);
        }

        setPosition({
            x,
            y
        });


    }
        , [lastPosition, mouseDown, color, setPosition, brushSize, compositeMode, transparency])

    // const undo = () => {
    //     setHistory(paths.filter(lastpath));
    // }

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
        ctx2.current.clearRect(0, 0, ctx2.current.canvas.width, ctx2.current.canvas.height)
    }

    const onMouseDown = (e) => {
        setPosition({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
        })
        setMouseDown(true);
    }

    const onMouseUp = () => {
        // lastpath.push(points);
        setMouseDown(false);
        // setHistory(history);
        // setHistory(paths.push(lastpath));
        // console.log(paths[1]);
        // console.log(paths);
    }

    const onMouseMove = (e) => {
        paint(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
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

    const selectTransparency = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
        let i = transparencyStops.findIndex(t => t.value === newValue);
        console.log('index:' + i);
        setTransparency(transparencyStops[i].hexValue);
    }


    if (canvasImage) {
        return (
            <div >
                <Typography>
                    Upload a picture and make a <b>collage</b> using your photograph and our painting tool!
                    <br />
                    <br />
                </Typography>
                <div style={style2}>
                    <canvas
                        style={style1}
                        width={canvasWidth}
                        height={canvasHeight}
                        ref={canvasRef}
                    />
                    <canvas
                        style={style3}
                        width={canvasWidth}
                        height={canvasHeight}
                        ref={canvasRef2}
                        //mouse events
                        onMouseMove={onMouseMove}
                        onMouseDown={onMouseDown}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseUp}
                        //touch events
                        onTouchStart={onMouseDown}
                        onTouchMove={onMouseMove}
                        onTouchEnd={onMouseUp}
                    />
                </div>
                <br />
                <Grid container justifyContent="center" flexDirection="column" alignItems="center"
                    spacing={0}>
                    <Grid item xs={11} >
                        <div className="palette" style={style8}>
                            <Palette selectColor={color => setColor(color)}
                                paint={paint}
                            />
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
                            <div style={style6} className="transparency">
                                <ThemeProvider theme={theme}>
                                    <Typography style={style9}>Transparency:
                                    </Typography>
                                    <Box width={100} style={style12}>
                                        <Slider
                                            size="Small steps"
                                            min={10}
                                            max={100}
                                            step={10}
                                            // defaultValue={100}
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                            onChange={selectTransparency}
                                            value={value}
                                            defaultValue={transparency}
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
                                    <Chip style={style11} avatar={<Avatar alt="erase" src={RubberIcon} />} label="Erase" onClick={erase} />
                                </ThemeProvider>
                            </div>
                            {/* <div className="undo">
                                <ThemeProvider theme={theme}>
                                    <Chip style={style11} icon={<ArrowBackIcon />} label="Undo" onClick={undo} />
                                </ThemeProvider>
                            </div> */}
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