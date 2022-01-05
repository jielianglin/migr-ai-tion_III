import React from 'react';
import Typography from '@mui/material/Typography';
import Sketch from 'react-p5';

import FileInput from './FileInput';
import Palette from './Palette';

import EraserIcon from '../pics/EraserIcon.png';
import CheckMark from '../pics/CheckMark.png';


var slider;
var checkButton;
var clearButton;
var cnv;

var diameter = 50;
var smoothValue = 0.05;
let img;
let pg;

var x = 0;
var y = 0;
var imgWidth;
var imgHeight;


export default function Canvas() {

    const [color, setColor] = React.useState(['#B272CE']);
    const [canvasImage, setCanvasImage] = React.useState(null);

    var style1 = {
        backgroundColor: "#D9CDBC",
        border: "1px solid #E6DAC8",
        borderRadius: "3px",
        // boxShadow: "3px 3px 3px #b4beb7",
        padding: "10px",
        maxWidth: "500px",
        height: "auto"
    }

    function setup(p5, canvasParentRef) {
        cnv = p5.createCanvas(600, 600).parent(canvasParentRef);

        img = p5.loadImage(canvasImage, img => {
            p5.image(img, 0, 0);
        });

        pg = p5.createGraphics(600, 600);

        checkButton = p5.createImg(`${CheckMark}`).style(
            'margin: 10px; width: 50px; height: 50px'
        )

        checkButton.position(100, 200);

        clearButton = p5.createImg(`${EraserIcon}`).style(
            'margin: 10px; width: 50px; height: 50px'
        )
        clearButton.position(100, 300);
        clearButton.mousePressed(resetSketch);

        slider = p5.createSlider(10, 100, 50, 10);
        slider.position(1175, 600);
        slider.style('width', '80px');
        slider.mousePressed(getDiameter);
    }

    function getDiameter(p5) {
        diameter = slider.value();
        return (diameter);
    }

    const draw = p5 => {
        if (color) {
            x = p5.lerp(p5.pmouseX, p5.mouseX, smoothValue);
            y = p5.lerp(p5.pmouseY, p5.mouseY, smoothValue);


            imgWidth = img.width;
            imgHeight = img.height;

            if (imgWidth > 0 && imgHeight > 0) {
                p5.resizeCanvas(imgWidth, imgHeight);
                if (imgWidth > 800) {
                    p5.resizeCanvas(700, imgHeight);
                }
            }

            p5.image(img, 0, 0);

            var transparency = p5.color(color);
            transparency.setAlpha(7);
            pg.noStroke();
            pg.fill(transparency);

            if (p5.mouseIsPressed) {
                pg.ellipse(x, y, diameter, diameter);
            }

            p5.image(pg, 0, 0, imgWidth, imgHeight);
        } else {
            return null
        }
    }

    function resetSketch(p5) {
        pg.clear();
    }


    if (canvasImage) {
        return (
            <div>
                <Typography> Make a collage using your photograph and our painting tool!
                    <br />
                    You can paint some emotions about your memory.
                    <br />
                    <br />
                </Typography>

                <div style={style1}>
                    <Sketch setup={setup} draw={draw}
                    />
                </div>
                <Palette selectColor={color => setColor(color)} />
            </div>
        );
    } else {
        return (
            <div >
                <FileInput selectImage={setCanvasImage} />
            </div>
        );
    }
}