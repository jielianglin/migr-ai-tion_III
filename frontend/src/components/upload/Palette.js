import React from 'react';
import { CirclePicker } from 'react-color';

let colors = [
    "#FFFECA",
    "#B32F23",
    "#3477D2",
    "#E6DAC8",
    "#3D5320",
    "#4A8037",
    "#C77D56",
    "#D562B7",
    "#643779",
    "#B272CE",
    "#2C4466",
    "#6FC5A8",
];

var style1 = {
    // display: 'flex',
    // justifyContent: 'center',
    backgroundColor: "rgba( 255, 255, 255, 0.5)",
    padding: "20px",
    // marginLeft: '30px',
    // marginRight: '50px',
    // marginTop: '10px',
    // marginBottom: '25px',
    borderRadius: '25px',
    // margin: '0 auto',
    width: "325px"
}

export default function Palette(props) {
    const [color, setColor] = React.useState("#FFFFFF");

    const recordColor = (color) => {
        props.selectColor(color.hex);
    }

    const changeColor = (color) => {
        setColor(color.hex);
        console.log(color.hex);
    }


    return (
        <div>
            <div style={style1}>
                <CirclePicker
                    width="330px"
                    colors={colors}
                    color={color}
                    circleSize={28}
                    circleSpacing={23}
                    onSwatchHover={recordColor}
                    onClick={changeColor}
                />

            </div>
        </div>
    );
}
