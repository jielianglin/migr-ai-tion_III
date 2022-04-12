import React, { useEffect } from "react";
import ReactECharts from 'echarts-for-react';
// import Yassi_Hormoz from '../../pics/Yassi_Hormoz.jpeg';
// import Froilan from "../../pics/Froilan.jpeg";


// let data = [
//     {
//         name: "Yassi",
//         image: Yassi_Hormoz,
//         nodes: ["Hormoz", "Iran", "colors", "textures", "footsteps", "Mars", "belonging"]

//     },
//     {
//         name: "Froilan",
//         image: Froilan,
//         nodes: ["geography", "memories", "walking", "death", "life", "inside", "real", "person"]
//     }
// ]


export default function Gallery() {

    const [graph, setGraph] = React.useState({
        nodes: [],
        links: []
    });

    function getRandomColor() {
        var value = (Math.random() * 0xff) | 0;
        var grayscale = (value << 16) | (value << 8) | value;
        var color = "#" + grayscale.toString(16);
        return color;
    }

    useEffect(() => {
        console.log("set data");
        setGraph({
            nodes: ["Hormoz", "Iran", "colors", "textures", "footsteps", "Mars", "belonging"],
            links: []
        })
        console.log(graph.nodes);
    }, []);


    let option = {
        tooltip: {
            alwaysShowContent: false,
        },
        series: [
            {
                type: "graph",
                layout: "force",
                // dataset: {
                //     source: ["Hormoz", "Iran", "colors", "textures", "footsteps", "Mars", "belonging"
                //     ]
                // },
                data: graph.nodes.map((n) => ({
                    ...n,
                    // symbolSize: n.value * 3,
                    itemStyle: { color: getRandomColor() },
                })),
                links: graph.links.map((l) => ({
                    ...l,
                    lineStyle: { color: "#24e1ea" },
                })),
                roam: true,
                label: {
                    position: "right",
                },
                force: {
                    repulsion: 200,
                },
            },
        ],
    };

    return (
        <div>
            <ReactECharts style={{ width: "100%", height: "100vh" }} option={option} />
        </div>
    );
}