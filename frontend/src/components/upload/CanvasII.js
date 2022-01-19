
import React, { useEffect, useRef, useCallback } from 'react';

const colors = [
    "red",
    "green",
    "yellow",
    "black",
    "blue"
]

export default function CanvasII() {
    const canvasRef = useRef(null);
    const ctx = useRef(null);

    const [selectedColor, setSelectedColor] = React.useState(colors[0]);
    const [mouseDown, setMouseDown] = React.useState(false);
    const [lastPosition, setPosition] = React.useState({
        x: 0,
        y: 0
    });

    var style1 = {
        border: "1px solid #000"
    }



    const draw = useCallback((x, y) => {
        if (mouseDown) {
            ctx.current.beginPath();
            ctx.current.strokeStyle = selectedColor;
            ctx.current.lineWidth = 10;
            ctx.current.lineJoin = 'round'
            ctx.current.moveTo(lastPosition.x, lastPosition.y);
            ctx.current.lineTo(x, y)
            ctx.current.closePath();
            ctx.current.stroke();

            setPosition({
                x,
                y
            })
        }
    }, [lastPosition, mouseDown, selectedColor, setPosition])

    const download = async () => {
        const image = canvasRef.current.toDataURL('image/png');
        const blob = await (await fetch(image)).blob();
        const blobURL = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobURL;
        link.download = "image.png";
        link.click();


    }
    const clear = () => {
        ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
    }

    const onMouseDown = (event) => {
        setPosition({
            x: event.pageX,
            y: event.pageY
        })
        setMouseDown(true);
    }

    const onMouseUp = (event) => {
        setMouseDown(false);
    }

    const onMouseMove = (e) => {
        draw(e.pageX, e.pageY)
    }

    useEffect(() => {
        if (canvasRef.current) {
            ctx.current = canvasRef.current.getContext('2d');
        }
    }, [])

    return (
        <div>
            <canvas
                style={style1}
                width={400}
                height={400}
                ref={canvasRef}
                onMouseMove={onMouseMove}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
            />

            <br />
            <select value={selectedColor} onChange={(event) => setSelectedColor(event.target.value)} >
                {colors.map(
                    color => <option key={color} value={color}>{color}</option>
                )}
            </select>

            <button onClick={clear}>Clear</button>
            <button onclick={download}>Download</button>


        </div>
    )
}