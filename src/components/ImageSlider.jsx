// // src/components/ImageSlider.jsx
// import Slider from "react-slick";
// import { Box, Typography } from "@mui/material";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function ImageSlider() {
//   const settings = {
//     dots: true,              // show dots
//     infinite: true,
//     speed: 300,              // fast animation
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,     // slide every 1 second (FAST)
//     arrows: false,
//     pauseOnHover: false,
//   };

//   const slides = [
//     {
//       img: "https://images.unsplash.com/photo-1706353399656-210cca727a33?q=80&w=1170&auto=format&fit=crop",
//       text: "Professional Knee Pain Physiotherapy",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?w=600&auto=format&fit=crop&q=60",
//       text: "Advanced Rehabilitation & Recovery",
//     },
//     {
//       img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b47?q=80&w=1170&auto=format&fit=crop",
//       text: "Expert Care with Modern Equipment",
//     },
//   ];

//   return (
//     <Box sx={{ width: "100%", overflow: "hidden" }}>
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <Box key={index} sx={{ position: "relative" }}>
//             {/* Image */}
//             <Box
//               component="img"
//               src={slide.img}
//               alt={`slide-${index}`}
//               sx={{
//                 width: "100%",
//                 height: { xs: "250px", md: "450px" },
//                 objectFit: "cover",
//               }}
//             />

//             {/* Text Overlay */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 bgcolor: "rgba(0,0,0,0.4)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 textAlign: "center",
//               }}
//             >
//               <Typography
//                 variant="h4"
//                 sx={{ color: "white", fontWeight: "bold", px: 2 }}
//               >
//                 {slide.text}
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// }









import React from 'react';

const ImageSlider = () => {
  return (
    <div>
      
    </div>
  );
}

export default ImageSlider;
