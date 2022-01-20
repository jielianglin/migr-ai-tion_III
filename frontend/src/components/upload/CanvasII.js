import React, { useEffect, useRef, useCallback } from 'react';
import Typography from '@mui/material/Typography';

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
        border: "3px solid #D1C6B6",
        borderRadius: "5px"
    }

    var style2 = {
        display: "flex",
        justifyContent: "center",
    }

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
            ctx.current.lineWidth = 20;
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
                <Typography> Upload a picture and make a collage using your photograph and our painting tool!
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
                <button onClick={clear}>Clear</button>
                {/* <button onclick={download}>Download</button> */}
                <Palette selectColor={color => setColor(color)} />
            </div>)
    } else {
        return (
            <div >
                <FileInput selectImage={setCanvasImage} />
            </div>
        );
    }
}