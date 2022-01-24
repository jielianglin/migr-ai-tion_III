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
    display: 'flex',
    backgroundColor: "rgba( 255, 255, 255, 0.5)",
    paddingLeft: '5px',
    paddingTop: '5px',
    paddingBottom: '5px',
    marginLeft: '30px',
    marginRight: '50px',
    marginTop: '20px',
    marginBottom: '25px',
    borderRadius: '5px',
    margin: '0 auto'
}

export default function Palette(props) {
    const [color, setColor] = React.useState("#FFFFFF");

    const recordColor = (color, event) => {
        props.selectColor(color.hex);

        setColor(color.hex);
        console.log(color.hex);
    }

    const changeColor = (color) => {
        setColor(color.hex);
        console.log(color.hex);
    }


    return (

        <div style={style1}>
            <CirclePicker
                width="100%"
                colors={colors}
                color={color}
                circleSize={28}
                circleSpacing={15}
                onSwatchHover={recordColor}
                onClick={changeColor}
            />

        </div>
    );
}
