// import React, { useState, useEffect } from "react";

// import Typography from '@mui/material/Typography';
// import Chip from '@mui/material/Chip';
// import Avatar from '@mui/material/Avatar';
// import InputBase from '@mui/material/InputBase';
// import { createTheme } from '@mui/material/styles';
// import { ThemeProvider } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';

// import { AiOutlineNumber } from "react-icons/ai";

// import "./Gallery.css";

// import ConfidenceBar from "./ConfidenceBar";
// import ImageModal from "./ImageModal";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#ab67c3",
//         },
//         secondary: {
//             main: "#525252",
//         },
//     },
// });

// export default function Gallery() {

//     const [search, setSearch] = useState("");
//     const [query, setQuery] = useState("");
//     const [results, setResults] = useState([]);

//     function onSubmit(e) {
//         e.preventDefault();
//         setQuery(search);
//         console.log(search);
//     }

//     function onSearch(e) {
//         setSearch(e.target.value);
//     }

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await fetch(
//                     `https://jsonplaceholder.typicode.com/photos`
//                     // `http://127.0.0.1:8080/images?tag=${query}`
//                 );
//                 const json = await response.json();
//                 console.log({ json });
//                 setResults(json);
//             } catch (error) { }
//         }

//         if (query !== "") {
//             console.log("the data does not exist");
//             fetchData();
//         }
//     }, [query]);

//     {
//         /*This is the const for Carousel */
//     }

//     const settings = {
//         dots: true,
//         className: "center",
//         infinite: true,
//         slidesToShow: 1,
//         speed: 500,
//         initialSlide: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true,
//                 },
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     {
//         /*this is the searchbar return part*/
//     }

//     return (
//         <div className="all">
//             <div className="paperwrapper-searchbar">
//                 <form component="form" onSubmit={onSubmit} className="searchbar-paper">
//                     <IconButton
//                         type="submit"
//                         aria-label="search"
//                         style={{ paddingRight: "0.3em", paddingLeft: "0.5em" }}
//                     >
//                         <SearchIcon className="search-icon" />
//                     </IconButton>
//                     <InputBase
//                         value={search}
//                         onChange={onSearch}
//                         placeholder="Search tags.."
//                         variant="outlined"
//                         className="searchbar-input"
//                         style={{ fontSize: "0.9em" }}
//                     />
//                 </form>
//             </div>

//             {/*This is the Carousel part*/}

//             <div>
//                 <ThemeProvider theme={theme}>
//                     <Slider {...settings} className="slickslider">
//                         {results.map((item) => (
//                             <div>
//                                 <div key={item.id} className="paper-slider">
//                                     <div className="img-wrapper">
//                                         <ImageModal identifier={item.id} />
//                                     </div>
//                                     <div>
//                                         <Typography
//                                             variant="h6"
//                                             component="p"
//                                             className="caption-wrap"
//                                         >
//                                             <i>"{item.caption}"</i>
//                                         </Typography>
//                                     </div>

//                                     <div className="mtag-wrap">
//                                         <Typography className="mtag-label">
//                                             migr-AI-tion Tags:
//                                         </Typography>
//                                         {item.tags.map((posttag) => {
//                                             console.log(posttag.tag);
//                                             return (
//                                                 <Chip
//                                                     className="chip1"
//                                                     avatar={
//                                                         <Avatar>
//                                                             <AiOutlineNumber />
//                                                         </Avatar>
//                                                     }
//                                                     key={posttag.id}
//                                                     label={posttag.tag}
//                                                     component="a"
//                                                     href="#chip"
//                                                     variant="outlined"
//                                                     color="primary"
//                                                     clickable
//                                                 />
//                                             );
//                                         })}
//                                     </div>
//                                     <div className="ntag-wrap">
//                                         <Typography className="ntag-label">
//                                             ImageNet AI Tags:
//                                         </Typography>

//                                         {item.ai_tags.map((posttag) => {
//                                             console.log(posttag.tag);
//                                             return (
//                                                 <Chip
//                                                     className="chip2"
//                                                     style={{ color: "#668389" }}
//                                                     avatar={
//                                                         <Avatar style={{ background: "#668389" }}>
//                                                             <AiOutlineNumber style={{ color: "white" }} />
//                                                         </Avatar>
//                                                     }
//                                                     key={posttag.id}
//                                                     label={posttag.tag}
//                                                     component="a"
//                                                     href="#chip"
//                                                     clickable
//                                                 />
//                                             );
//                                         })}
//                                     </div>
//                                     <div>
//                                         {item.ai_tags.map((aiitem) => {
//                                             return (
//                                                 <ConfidenceBar
//                                                     match={parseFloat(aiitem.confidence)}
//                                                     aitag={aiitem.tag}
//                                                 />
//                                             );
//                                         })}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </ThemeProvider>
//             </div>
//         </div>
//     );
// }
