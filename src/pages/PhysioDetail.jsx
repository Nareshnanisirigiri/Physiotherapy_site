// import React, { useEffect } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Grid,
//   Button,
//   Card,
//   CardContent,
// } from "@mui/material";
// import { useParams, useNavigate } from "react-router-dom";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// /* ================= DATA ================= */
// const allTreatments = [
//   {
//     title: "Neuro Rehabilitation in Hyderabad",
//     slug: "neuro-rehabilitation-in-hyderabad",
//     img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200",
//     longDesc:
//       "Our Neuro Rehabilitation center offers world-class care for nervous system disorders. We focus on neuroplasticity—retraining the brain to form new connections—helping patients regain lost motor functions, balance, and independence.",
//     benefits: [
//       "Customized neuro-recovery plans",
//       "Advanced gait training",
//       "Balance and coordination therapy",
//       "Functional independence training",
//       "Cognitive rehabilitation",
//     ],
//   },
//   {
//     title: "Stroke Rehabilitation Center in Hyderabad",
//     slug: "stroke-rehabilitation-center-in-hyderabad",
//     img: "https://images.unsplash.com/photo-1559757175-5700dde366c9?w=1200",
//     longDesc:
//       "Recovering from a stroke requires immediate and intensive therapy. Our stroke rehabilitation protocol helps survivors relearn skills lost due to brain damage.",
//     benefits: [
//       "Motor skill relearning",
//       "Speech therapy",
//       "Muscle restoration",
//       "Complication prevention",
//       "Psychological support",
//     ],
//   },
//   {
//     title: "Head Injury Rehabilitation in Hyderabad",
//     slug: "head-injury-rehabilitation-in-hyderabad",
//     img: "https://images.unsplash.com/photo-1579684385180-1ea55f619632?w=1200",
//     longDesc:
//       "Head injury rehabilitation addresses physical, cognitive, and emotional challenges after traumatic brain injury.",
//     benefits: [
//       "Cognitive therapy",
//       "Vestibular training",
//       "Pain management",
//       "Sensory integration",
//       "Community reintegration",
//     ],
//   },
//   {
//     title: "Physiotherapy in Hyderabad",
//     slug: "physiotherapy-in-hyderabad",
//     img: "https://images.unsplash.com/photo-1588611910609-847285d852cc?w=1200",
//     longDesc:
//       "Comprehensive physiotherapy for musculoskeletal and neurological conditions such as back pain and joint stiffness.",
//     benefits: [
//       "Pain relief",
//       "Posture correction",
//       "Lifestyle advice",
//       "Home exercise programs",
//       "Ergonomic training",
//     ],
//   },
//   {
//     title: "Brachial Plexus Rehabilitation",
//     slug: "brachial-plexus-rehabilitation",
//     img: "https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=1200",
//     longDesc:
//       "Specialized care for nerve injuries affecting the shoulder, arm, and hand.",
//     benefits: [
//       "Nerve gliding",
//       "Electrical stimulation",
//       "Sensory re-education",
//       "Functional training",
//       "Splinting",
//     ],
//   },
//   {
//     title: "Bladder and Bowel Rehabilitation",
//     slug: "bladder-and-bowel-rehabilitation",
//     img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200",
//     longDesc:
//       "Pelvic floor rehabilitation for bladder and bowel dysfunction to improve quality of life.",
//     benefits: [
//       "Pelvic floor strengthening",
//       "Biofeedback therapy",
//       "Bladder retraining",
//       "Lifestyle counseling",
//       "Electrical stimulation",
//     ],
//   },
//   {
//     title: "Vestibular Rehabilitation",
//     slug: "vestibular-rehabilitation",
//     img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200",
//     longDesc:
//       "Exercise-based therapy to reduce dizziness and improve balance.",
//     benefits: [
//       "Dizziness reduction",
//       "Gaze stability",
//       "Fall prevention",
//       "Balance training",
//       "Habituation exercises",
//     ],
//   },
//   {
//     title: "Orthopedic Rehabilitation",
//     slug: "orthopedic-rehabilitation",
//     img: "https://images.unsplash.com/photo-1590424592737-0205ac7718e2?w=1200",
//     longDesc:
//       "Focused recovery for fractures, joint replacements, and ligament injuries.",
//     benefits: [
//       "Joint mobilization",
//       "Strength conditioning",
//       "Scar tissue management",
//       "Pain control",
//       "Return-to-activity",
//     ],
//   },
//   {
//     title: "Sports Rehabilitation",
//     slug: "sports-rehabilitation",
//     img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200",
//     longDesc:
//       "High-performance rehab for athletes to recover faster and prevent re-injury.",
//     benefits: [
//       "Biomechanics analysis",
//       "Sport drills",
//       "Taping and bracing",
//       "Muscle conditioning",
//       "Performance training",
//     ],
//   },
//   {
//     title: "Post COVID Rehabilitation",
//     slug: "post-covid-rehabilitation",
//     img: "https://images.unsplash.com/photo-1584483766114-2cea6fac2578?w=1200",
//     longDesc:
//       "Gradual recovery program for breathing capacity and fatigue management.",
//     benefits: [
//       "Breathing retraining",
//       "Fatigue management",
//       "Graded exercise",
//       "Oxygen monitoring",
//       "Autonomic balance",
//     ],
//   },
//   {
//     title: "Gynecology Rehabilitation",
//     slug: "gynecology-rehabilitation",
//     img: "https://images.unsplash.com/photo-1595822390885-3be9cf8dc0d6?w=1200",
//     longDesc:
//       "Women’s health physiotherapy for prenatal, postnatal and pelvic conditions.",
//     benefits: [
//       "Prenatal guidance",
//       "Postnatal recovery",
//       "Pelvic pain management",
//       "Core strengthening",
//       "Safe exercise",
//     ],
//   },
//   {
//     title: "Cardio Pulmonary Rehabilitation",
//     slug: "cardio-pulmonary-rehabilitation",
//     img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200",
//     longDesc:
//       "Improves heart and lung endurance with supervised exercise programs.",
//     benefits: [
//       "Endurance building",
//       "Breathing control",
//       "Stress management",
//       "Risk education",
//       "Dyspnea control",
//     ],
//   },
//   {
//     title: "COMA Care",
//     slug: "coma-care",
//     img: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?w=1200",
//     longDesc:
//       "Multisensory stimulation therapy for patients in reduced consciousness.",
//     benefits: [
//       "Stimulation therapy",
//       "Contracture prevention",
//       "Positioning care",
//       "Chest physiotherapy",
//       "Family training",
//     ],
//   },
//   {
//     title: "Pain Management",
//     slug: "pain-management",
//     img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200",
//     longDesc:
//       "Multidisciplinary pain management addressing root causes.",
//     benefits: [
//       "Trigger point therapy",
//       "Electrotherapy",
//       "Relaxation techniques",
//       "Pain education",
//       "Graded exposure",
//     ],
//   },
//   {
//     title: "Bedsore Management",
//     slug: "bedsore-management",
//     img: "https://images.unsplash.com/photo-1584515933487-9dca0c0825eb?w=1200",
//     longDesc:
//       "Prevention and treatment of pressure ulcers in immobile patients.",
//     benefits: [
//       "Repositioning",
//       "Circulation improvement",
//       "Mobility aids",
//       "Caregiver education",
//       "Pressure relief",
//     ],
//   },
// ];

// /* ================= COMPONENT ================= */
// export default function PhysioDetails() {
//   const { slug } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [slug]);

//   const treatment = allTreatments.find((item) => item.slug === slug);

//   if (!treatment) return null; // only show listed items

//   return (
//     <Box>
//       {/* HERO */}
//       <Box
//         sx={{
//           height: "70vh",
//           backgroundImage: `url(${treatment.img})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           color: "#fff",
//         }}
//       >
//         <Container>
//           <Typography variant="h2" fontWeight={900}>
//             {treatment.title}
//           </Typography>
//         </Container>
//       </Box>

//       {/* CONTENT */}
//       <Container sx={{ py: 8 }}>
//         <Grid container spacing={6}>
//           <Grid item xs={12} md={7}>
//             <Typography sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
//               {treatment.longDesc}
//             </Typography>

//             <Button
//               startIcon={<ArrowBackIcon />}
//               sx={{ mt: 4 }}
//               onClick={() => navigate("/")}
//             >
//               Back to Home
//             </Button>
//           </Grid>

//           <Grid item xs={12} md={5}>
//             <Card sx={{ borderRadius: 4 }}>
//               <CardContent>
//                 <Typography variant="h4" fontWeight={700} mb={3}>
//                   Key Benefits
//                 </Typography>

//                 {treatment.benefits.map((b, i) => (
//                   <Box key={i} sx={{ display: "flex", gap: 1, mb: 1 }}>
//                     <CheckCircleOutlineIcon color="secondary" />
//                     <Typography>{b}</Typography>
//                   </Box>
//                 ))}
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }









// import React, { useEffect, useRef } from "react";
// import {
//     Box,
//     Container,
//     Typography,
//     Grid,
//     Button,
//     useTheme,
//     Card,
//     CardContent,
//     Chip,
//     Avatar,
//     Paper,
// } from "@mui/material";
// import {
//     motion,
//     useScroll,
//     useTransform,
//     useSpring,
//     useMotionValue,
//     useMotionTemplate,
// } from "framer-motion";
// import { useParams, useNavigate } from "react-router-dom";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// // IMPORT CENTRALIZED DATA
// import { treatments } from "../data/treatments";
// /* ================== COMPONENTS ================== */
// // 3D Tilt Card Component
// const TiltCard = ({ children }) => {
//     const ref = useRef(null);
//     const x = useMotionValue(0);
//     const y = useMotionValue(0);
//     const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
//     const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
//     const rotateX = useMotionTemplate`${mouseY}deg`;
//     const rotateY = useMotionTemplate`${mouseX}deg`;
//     const handleMouseMove = (e) => {
//         if (!ref.current) return;
//         const rect = ref.current.getBoundingClientRect();
//         const width = rect.width;
//         const height = rect.height;
//         const mouseX = e.clientX - rect.left;
//         const mouseY = e.clientY - rect.top;
//         const xPct = mouseX / width - 0.5;
//         const yPct = mouseY / height - 0.5;
//         x.set(yPct * 10);
//         y.set(-xPct * 10);
//     };
//     const handleMouseLeave = () => {
//         x.set(0);
//         y.set(0);
//     };
//     return (
//         <motion.div
//             ref={ref}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             style={{
//                 rotateX,
//                 rotateY,
//                 transformStyle: "preserve-3d",
//             }}
//         >
//             {children}
//         </motion.div>
//     );
// };
// export default function PhysioDetail() {
//     const { slug } = useParams();
//     const navigate = useNavigate();
//     const theme = useTheme();
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [slug]);
//     // FIND DATA BY ID
//     let treatment = treatments.find((item) => item.id === slug);
//     // Fallback (just in case)
//     if (!treatment) {
//         treatment = treatments[0];
//     }
//     // PARALLAX HOOKS
//     const { scrollY } = useScroll();
//     const yHero = useTransform(scrollY, [0, 500], [0, 250]);
//     const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);
//     const scaleHero = useTransform(scrollY, [0, 500], [1, 1.1]);
//     // STAGGER VARIANTS
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.15,
//                 delayChildren: 0.2,
//             },
//         },
//     };
//     const itemVariants = {
//         hidden: { y: 30, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: { type: "spring", stiffness: 50 },
//         },
//     };
//     return (
//         <Box sx={{ overflowX: "hidden", bgcolor: "#f8fcfc", minHeight: "100vh" }}>
//             {/* ================= HERO SECTION ================= */}
//             <Box
//                 sx={{
//                     position: "relative",
//                     height: { xs: "50vh", md: "75vh" },
//                     overflow: "hidden",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                 }}
//             >
//                 {/* Parallax Background */}
//                 <motion.div
//                     style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         width: "100%",
//                         height: "100%",
//                         backgroundImage: `url(${treatment.img})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         y: yHero,
//                         scale: scaleHero,
//                         zIndex: 0,
//                     }}
//                 />
//                 {/* Gradient Overlay */}
//                 <Box
//                     sx={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)",
//                         zIndex: 1,
//                     }}
//                 />
//                 {/* Hero Content */}
//                 <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
//                     <motion.div style={{ opacity: opacityHero }}>
//                         <motion.div
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                         >
//                             <Typography
//                                 variant="h1"
//                                 sx={{
//                                     fontWeight: 900,
//                                     fontSize: { xs: "2.5rem", md: "4.5rem" },
//                                     textShadow: "0 10px 30px rgba(0,0,0,0.6)",
//                                     mb: 2,
//                                     lineHeight: 1.1,
//                                 }}
//                             >
//                                 {treatment.title}
//                             </Typography>
//                         </motion.div>
//                         <motion.div
//                             initial={{ scaleX: 0 }}
//                             animate={{ scaleX: 1 }}
//                             transition={{ delay: 0.5, duration: 0.8 }}
//                         >
//                             <Box
//                                 sx={{
//                                     width: 100,
//                                     height: 6,
//                                     bgcolor: theme.palette.secondary.main,
//                                     mx: "auto",
//                                     borderRadius: 2,
//                                     boxShadow: "0 0 20px rgba(255,255,255,0.5)",
//                                 }}
//                             />
//                         </motion.div>
//                     </motion.div>
//                 </Container>
//             </Box>
//             {/* ================= MAIN CONTENT ================= */}
//             <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, mt: { xs: -5, md: -10 }, position: "relative", zIndex: 10 }}>
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.2 }}
//                 >
//                     <Grid container spacing={6}>
//                         {/* LEFT COLUMN: Detailed Content */}
//                         <Grid item xs={12} md={8}>
//                             <Paper
//                                 elevation={0}
//                                 sx={{
//                                     p: { xs: 3, md: 6 },
//                                     borderRadius: 4,
//                                     bgcolor: "rgba(255,255,255,0.95)",
//                                     backdropFilter: "blur(20px)",
//                                     boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
//                                     mb: 5
//                                 }}
//                             >
//                                 <motion.div variants={itemVariants}>
//                                     <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
//                                         <LocalHospitalIcon color="primary" sx={{ fontSize: 40 }} />
//                                         <Typography variant="h4" fontWeight={800} color="primary.main">
//                                             About the Treatment
//                                         </Typography>
//                                     </Box>
//                                 </motion.div>
//                                 {/* Render Paragraphs */}
//                                 {treatment.longDesc.split("\n\n").map((para, i) => (
//                                     <motion.div key={i} variants={itemVariants}>
//                                         <Typography
//                                             paragraph
//                                             sx={{
//                                                 fontSize: "1.2rem",
//                                                 lineHeight: 1.9,
//                                                 color: "text.secondary",
//                                                 mb: 4,
//                                                 textAlign: "justify"
//                                             }}
//                                         >
//                                             {para}
//                                         </Typography>
//                                     </motion.div>
//                                 ))}
//                                 <motion.div variants={itemVariants}>
//                                     <Button
//                                         startIcon={<ArrowBackIcon />}
//                                         variant="outlined"
//                                         onClick={() => navigate("/")}
//                                         sx={{
//                                             mt: 2,
//                                             borderRadius: 50,
//                                             px: 4,
//                                             py: 1,
//                                             borderWidth: 2,
//                                             fontWeight: 700,
//                                             "&:hover": { borderWidth: 2 }
//                                         }}
//                                     >
//                                         Back to Treatments
//                                     </Button>
//                                 </motion.div>
//                             </Paper>
//                         </Grid>
//                         {/* RIGHT COLUMN: Benefits & CTA */}
//                         <Grid item xs={12} md={4}>
//                             <Box sx={{ position: "sticky", top: 100,  display: "flex", gap: 4, }}>
//                                 {/* 3D TILT BENEFITS CARD */}
//                                 <TiltCard>
//                                     <Card
//                                         elevation={0}
//                                         sx={{
//                                             borderRadius: 4,
//                                             backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
//                                             color: "#fff",
//                                             boxShadow: "0 25px 50px -12px rgba(16, 57, 107, 0.4)",
//                                             mb: 4,
//                                         }}
//                                     >
//                                         <CardContent sx={{ p: 3 }}>
//                                             <Typography variant="h5" fontWeight={800} gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                                                 <CheckCircleOutlineIcon /> Key Benefits
//                                             </Typography>
//                                             <Box sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
//                                                 {treatment.benefits.map((benefit, i) => (
//                                                     <motion.div
//                                                         key={i}
//                                                         initial={{ opacity: 0, x: 20 }}
//                                                         whileInView={{ opacity: 1, x: 0 }}
//                                                         transition={{ delay: i * 0.1 }}
//                                                     >
//                                                         <Box
//                                                             sx={{
//                                                                 bgcolor: "rgba(255,255,255,0.1)",
//                                                                 p: 1.5,
//                                                                 borderRadius: 2,
//                                                                 display: "flex",
//                                                                 alignItems: "center",
//                                                                 gap: 2,
//                                                                 backdropFilter: "blur(5px)",
//                                                                 transition: "0.3s",
//                                                                 cursor: "default",
//                                                                 "&:hover": { bgcolor: "rgba(255,255,255,0.2)", transform: "translateX(5px)" }
//                                                             }}
//                                                         >
//                                                             <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: theme.palette.secondary.main }} />
//                                                             <Typography fontWeight={500} variant="body1">
//                                                                 {benefit}
//                                                             </Typography>
//                                                         </Box>
//                                                     </motion.div>
//                                                 ))}
//                                             </Box>
//                                         </CardContent>
//                                     </Card>
//                                 </TiltCard>
//                                 {/* CTA CARD */}
//                                 <motion.div
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ delay: 0.5 }}
//                                 >
//                                     <Paper
//                                         elevation={0}
//                                         sx={{
//                                             p: 4,
//                                             borderRadius: 4,
//                                             textAlign: "center",
//                                             border: `1px solid ${theme.palette.divider}`,
//                                         }}
//                                     >
//                                         <Avatar sx={{ width: 60, height: 60, bgcolor: theme.palette.secondary.light, mx: "auto", mb: 2 }}>
//                                             <EventAvailableIcon color="secondary" sx={{ fontSize: 30 }} />
//                                         </Avatar>
//                                         <Typography variant="h6" fontWeight={800} gutterBottom>
//                                             Ready to Recover?
//                                         </Typography>
//                                         <Typography variant="body2" color="text.secondary" paragraph>
//                                             Book an appointment with our specialists today and start your journey to better health.
//                                         </Typography>
//                                         <Button
//                                             variant="contained"
//                                             color="secondary"
//                                             fullWidth
//                                             size="large"
//                                             onClick={() => navigate("/contact")}
//                                             sx={{
//                                                 borderRadius: 50,
//                                                 fontWeight: 800,
//                                                 py: 1.5,
//                                                 boxShadow: "0 10px 20px rgba(255, 64, 129, 0.3)"
//                                             }}
//                                         >
//                                             Book Appointment
//                                         </Button>
//                                     </Paper>
//                                 </motion.div>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </motion.div>
//             </Container>
//         </Box>
//     );
// }













import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useTheme,
  Card,
  CardContent,
  Paper,
  Avatar,
} from "@mui/material";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { treatments } from "../data/treatments";

/* ================= TILT CARD ================= */
const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useMotionTemplate`${mouseY}deg`;
  const rotateY = useMotionTemplate`${mouseX}deg`;

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dy / 20);
    y.set(-dx / 20);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

/* ================= MAIN ================= */
export default function PhysioDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  // ✅ HOOKS FIRST (no conditions)
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 250]);
  const scaleHero = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // ✅ Find treatment AFTER hooks
  const treatment = treatments.find((item) => item.id === slug);

  if (!treatment) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4">Treatment not found</Typography>
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </Container>
    );
  }

  return (
    <Box sx={{ overflowX: "hidden", bgcolor: "#f8fcfc" }}>
      {/* HERO */}
      <Box sx={{ position: "relative", height: "75vh", color: "#fff" }}>
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${treatment.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: yHero,
            scale: scaleHero,
          }}
        />
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.6)" }} />

        <Container sx={{ position: "relative", pt: 20, textAlign: "center" }}>
          <Typography variant="h2" fontWeight={900}>
            {treatment.title}
          </Typography>
        </Container>
      </Box>

      {/* CONTENT */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, borderRadius: 4 }}>
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <LocalHospitalIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h4" fontWeight={800}>
                  About Treatment
                </Typography>
              </Box>

              {treatment.longDesc.split("\n\n").map((p, i) => (
                <Typography key={i} paragraph sx={{ lineHeight: 1.8 }}>
                  {p}
                </Typography>
              ))}

              <Button
                startIcon={<ArrowBackIcon />}
                sx={{ mt: 3 }}
                onClick={() => navigate("/")}
              >
                Back
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <TiltCard>
              <Card
                sx={{
                  borderRadius: 4,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  color: "#fff",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight={800} mb={2}>
                    <CheckCircleOutlineIcon /> Key Benefits
                  </Typography>

                  {treatment.benefits.map((b, i) => (
                    <Box key={i} sx={{ display: "flex", gap: 1, mb: 1 }}>
                      <CheckCircleOutlineIcon />
                      <Typography>{b}</Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </TiltCard>

            <Paper sx={{ mt: 4, p: 3, textAlign: "center" }}>
              <Avatar sx={{ bgcolor: theme.palette.secondary.main, mx: "auto" }}>
                <EventAvailableIcon />
              </Avatar>
              <Typography variant="h6" mt={2}>
                Book Appointment
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 2 }}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
