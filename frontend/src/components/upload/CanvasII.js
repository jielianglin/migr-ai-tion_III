import React, { useEffect, useRef, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Palette from './Palette';
import FileInput from './FileInput';

const colors = [
    "red",
    "green",
    "yellow",
    "black",
    "blue"
]

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

    var style1 = {
        border: "1px solid #D1C6B6",
        borderRadius: "5px"
    }

    var style2 = {
        display: "flex",
        justifyContent: "center"
    }

    var style3 = {
        display: "flex",
        backgroundColor: "#FFFFFF",
        color: "#B272CE",
        borderRadius: "15px",
        margin: "0 auto"
    }

    // var style4 = {
    //     display: "flex",
    //     border: "1px solid #B272CE",
    //     borderRadius: "15px",
    //     backgroundColor: "transparent",
    //     color: "#B272CE",
    //     margin: "0 auto",
    // }

    var style5 = {
        display: "inline",
        padding: "25px",

    }

    var style6 = {
        display: "inline",
        backgroundColor: "rgba( 255, 255, 255, 0.5)",
        padding: "15px 0px 15px 30px",
        borderRadius: "5px",
        margin: "30px"
    }

    var style7 = {
        color: "#B272CE",
        display: "inline",
    }

    var style8 = {
        marginTop: "30px",
        marginBottom: "30px",
    }
    var style9 = {
        color: "#B272CE",
        display: "inline",
        padding: "0px 30px 0px 0px",
    }

    var style10 = {
        backgroundColor: "rgba( 255, 255, 255, 0.5)",
        padding: "15px 0px 5px 30px",
        borderRadius: "5px",
        margin: "30px",
        width: "135px"
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
            ctx.current.lineWidth = 50;
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
                <div style={style6}>
                    <ThemeProvider theme={theme}>
                        <Typography style={style7}>Brush size:</Typography>
                        <ButtonGroup variant="text" aria-label="text button group" style={style5}>
                            <Button>s</Button>
                            <Button>m</Button>
                            <Button>l</Button>
                        </ButtonGroup>
                    </ThemeProvider>
                </div>
                <div style={style10}>
                    <ThemeProvider theme={theme}>
                        <Typography style={style9}>Opacity:
                        </Typography>
                        <Box width={80}>
                            <Slider
                                size="small"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                            />
                        </Box>
                    </ThemeProvider>
                </div>
                <div style={style8}>
                    <Palette selectColor={color => setColor(color)} />
                </div>
                <Button variant="contained" onClick={clear} style={style3}>Clear Canvas</Button>
                <br />
                {/* <Button variant="outlined" onclick={download} style={style4}>Download</Button> */}
            </div>)
    } else {
        return (
            <div >
                <FileInput selectImage={setCanvasImage} />
            </div>
        );
    }
}