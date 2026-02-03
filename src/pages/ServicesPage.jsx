// import React, { useRef } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
// } from "@mui/material";
// import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
// import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
// import PoolIcon from "@mui/icons-material/Pool";
// import ElderlyIcon from "@mui/icons-material/Elderly";
// import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import SpaIcon from "@mui/icons-material/Spa";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// /* ---------- Tilt Card ---------- */
// const TiltCard = ({ service, index }) => {
//   const ref = useRef(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
//   const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

//   const rotateX = useMotionTemplate`${mouseY}deg`;
//   const rotateY = useMotionTemplate`${mouseX}deg`;

//   const handleMouseMove = (e) => {
//     const rect = ref.current.getBoundingClientRect();
//     const dx = e.clientX - rect.left - rect.width / 2;
//     const dy = e.clientY - rect.top - rect.height / 2;
//     x.set(dy / 20);
//     y.set(-dx / 20);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       viewport={{ once: true }}
//     >
//       <Card
//         sx={{
//           height: "300px",
//           width: "400px",
//           marginLeft: "20px",
//           borderRadius: 4,
//           background: "rgba(255,255,255,0.85)",
//           backdropFilter: "blur(10px)",
//           boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
//           transition: "0.3s",
//           "&:hover": {
//             boxShadow: `0 25px 50px ${service.color}40`,
//             borderColor: service.color,
//           },
//         }}
//       >
//         <Box sx={{ height: 4, bgcolor: service.color }} />

//         <CardContent sx={{ p: 4 }}>
//           <Box
//             sx={{
//               width: 70,
//               height: 70,
//               borderRadius: 3,
//               bgcolor: `${service.color}15`,
//               color: service.color,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               mb: 3,
//             }}
//           >
//             {service.icon}
//           </Box>

//           <Typography variant="h5" fontWeight="bold" gutterBottom>
//             {service.title}
//           </Typography>

//           <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
//             {service.description}
//           </Typography>
//         </CardContent>

//         <CardActions sx={{ px: 4, pb: 3 }}>
//           <Button
//             endIcon={<ArrowForwardIcon />}
//             sx={{ color: service.color, fontWeight: 600 }}
//           >
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//     </motion.div>
//   );
// };

// /* ---------- Services Data ---------- */
// const services = [
//   {
//     title: "Musculoskeletal",
//     description: "Expert care for bones, joints and muscles including back pain and arthritis.",
//     icon: <FitnessCenterIcon fontSize="large" />,
//     color: "#04D486",
//   },
//   {
//     title: "Sports Injury Rehab",
//     description: "Faster recovery and return to sport with advanced sports physiotherapy.",
//     icon: <PoolIcon fontSize="large" />,
//     color: "#3E84DC",
//   },
//   {
//     title: "Neurological Rehab",
//     description: "Specialized therapy for stroke and neurological disorders.",
//     icon: <AccessibilityNewIcon fontSize="large" />,
//     color: "#FF6B6B",
//   },
//   {
//     title: "Chiropractic Care",
//     description: "Spinal manipulation and posture correction for pain relief.",
//     icon: <SpaIcon fontSize="large" />,
//     color: "#FFB84C",
//   },
//   {
//     title: "Geriatric Physio",
//     description: "Improving mobility and balance for elderly patients.",
//     icon: <ElderlyIcon fontSize="large" />,
//     color: "#9D4EDD",
//   },
//   {
//     title: "Post-Op Rehab",
//     description: "Structured rehabilitation after orthopedic surgeries.",
//     icon: <LocalHospitalIcon fontSize="large" />,
//     color: "#00B4D8",
//   },
// ];

// /* ---------- Main Component ---------- */
// export default function Services() {
//   return (
//     <Box sx={{ py: 12, background: "#f9fafb" }}>
//       <Container maxWidth="xl">

//         {/* Header */}
//         <Box sx={{ textAlign: "center", mb: 8 }}>
//           <Typography variant="h6" color="primary" fontWeight={700}>
//             Our Specializations
//           </Typography>

//           <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
//             Comprehensive Services
//           </Typography>

//           <Typography color="text.secondary" maxWidth={700} mx="auto">
//             We provide world-class physiotherapy services designed to restore mobility and improve quality of life.
//           </Typography>
//         </Box>

//         {/* Proper Grid */}
//         <Grid container spacing={4}>
//           {services.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <TiltCard service={service} index={index} />
//             </Grid>
//           ))}
//         </Grid>

//       </Container>
//     </Box>
//   );
// }











import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useNavigate } from "react-router-dom";
// Icons
import PsychologyIcon from "@mui/icons-material/Psychology";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SpaIcon from "@mui/icons-material/Spa";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import WcIcon from "@mui/icons-material/Wc";
import HearingIcon from "@mui/icons-material/Hearing";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsIcon from "@mui/icons-material/Sports";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccessibleIcon from "@mui/icons-material/Accessible";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ElderlyIcon from "@mui/icons-material/Elderly";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ComputerIcon from "@mui/icons-material/Computer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import centralized data
import { treatments } from "../data/treatments";
// Map treatment IDs to icons and colors
const iconMap = {
  "neuro-rehabilitation": { icon: <PsychologyIcon fontSize="large" />, color: "#6C63FF" },
  "stroke-rehabilitation": { icon: <FavoriteIcon fontSize="large" />, color: "#FF6B6B" },
  "head-injury-rehabilitation": { icon: <HeadsetMicIcon fontSize="large" />, color: "#FF9671" },
  "physiotherapy": { icon: <SpaIcon fontSize="large" />, color: "#04D486" },
  "brachial-plexus-rehabilitation": { icon: <AccessibilityNewIcon fontSize="large" />, color: "#845EC2" },
  "bladder-bowel-rehabilitation": { icon: <WcIcon fontSize="large" />, color: "#00C9A7" },
  "vestibular-rehabilitation": { icon: <HearingIcon fontSize="large" />, color: "#FFC75F" },
  "orthopedic-rehabilitation": { icon: <FitnessCenterIcon fontSize="large" />, color: "#3E84DC" },
  "sports-rehabilitation": { icon: <SportsIcon fontSize="large" />, color: "#F9F871" },
  "post-covid-rehabilitation": { icon: <CoronavirusIcon fontSize="large" />, color: "#D65DB1" },
  "gynecology-rehabilitation": { icon: <PregnantWomanIcon fontSize="large" />, color: "#FF6F91" },
  "cardio-pulmonary-rehabilitation": { icon: <MonitorHeartIcon fontSize="large" />, color: "#00B4D8" },
  "coma-care": { icon: <HotelIcon fontSize="large" />, color: "#5F5F5F" },
  "pain-management": { icon: <LocalHospitalIcon fontSize="large" />, color: "#E84855" },
  "bedsore-management": { icon: <AccessibleIcon fontSize="large" />, color: "#9B5DE5" },
  "paediatric-physiotherapy": { icon: <ChildCareIcon fontSize="large" />, color: "#00BBF9" },
  "geriatric-physiotherapy": { icon: <ElderlyIcon fontSize="large" />, color: "#9D4EDD" },
  "oncological-rehabilitation": { icon: <MedicalServicesIcon fontSize="large" />, color: "#F15BB5" },
  "lymphatic-drainage": { icon: <WaterDropIcon fontSize="large" />, color: "#00F5D4" },
  "ergonomic-consultancy": { icon: <ComputerIcon fontSize="large" />, color: "#FEE440" },
};
/* ---------- Tilt Card ---------- */
const TiltCard = ({ treatment, index }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useMotionTemplate`${mouseY}deg`;
  const rotateY = useMotionTemplate`${mouseX}deg`;
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dy / 20);
    y.set(-dx / 20);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const meta = iconMap[treatment.id] || { icon: <SpaIcon fontSize="large" />, color: "#04D486" };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", height: "100%" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card
        sx={{
          height: "450px",
          width: "600px",
          ml: 5,
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          overflow: "hidden",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: `0 25px 50px ${meta.color}40`,
          },
        }}
        onClick={() => navigate(`/service/${treatment.id}`)}
      >
        {/* Image */}
        <CardMedia
          component="img"
          height="180px"
          image={treatment.img}
          alt={treatment.title}
          sx={{ objectFit: "cover" }}
        />
        {/* Colored Bar */}
        <Box sx={{ height: 5, bgcolor: meta.color }} />
        <CardContent sx={{ p: 3, flexGrow: 1 }}>
          {/* Icon */}
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: 3,
              bgcolor: `${meta.color}15`,
              color: meta.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
              mt: -6,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              border: "3px solid white",
            }}
          >
            {meta.icon}
          </Box>
          <Typography variant="h6" fontWeight={700} gutterBottom noWrap>
            {treatment.title.replace(" in Hyderabad", "")}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: "0.9rem",
            }}
          >
            {treatment.longDesc.split("\n\n")[0].substring(0, 120)}...
          </Typography>
        </CardContent>
        <CardActions sx={{ px: 3, pb: 3 }}>
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{ color: meta.color, fontWeight: 600 }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/service/${treatment.id}`);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};
/* ---------- Main Component ---------- */
export default function Services() {
  return (
    <Box sx={{ py: 12, background: "linear-gradient(180deg, #f0f4f8 0%, #ffffff 100%)" }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="overline"
              color="primary"
              fontWeight={700}
              sx={{ letterSpacing: 3, mb: 1, display: "block" }}
            >
              Our Specializations
            </Typography>
            <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
              Comprehensive <Box component="span" sx={{ color: "primary.main" }}>Rehabilitation</Box> Services
            </Typography>
            <Typography color="text.secondary" maxWidth={700} mx="auto" sx={{ fontSize: "1.1rem" }}>
              We provide world-class physiotherapy and rehabilitation services designed to restore mobility, reduce pain, and improve your quality of life.
            </Typography>
          </motion.div>
        </Box>
        {/* Services Grid */}
        <Grid container spacing={4}>
          {treatments.map((treatment, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={treatment.id}>
              <TiltCard treatment={treatment} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}