import React from 'react';
import { InteractiveHighlighter } from 'react-interactive-highlighter';

var text = "I saw the best minds of my generation destroyed by madness."

export default function HighlighterTest() {
    // const[highlights, setHighlights] = React.useState([]); 



    return (
        <InteractiveHighlighter
            text={text}
        // highlights={highlights}


        />
    )
}