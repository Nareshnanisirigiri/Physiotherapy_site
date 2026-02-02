import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

/* -------- DATA (same as About page) -------- */
const treatments = [
  {
    title: "Orthopedic Physiotherapy",
    img: "https://aica.com/wp-content/uploads/2024/09/Top-5-Treatments-You-May-Receive-in-Orthopedic-Physiotherapy-e1612576187237.jpg",
    longDesc: `
Orthopedic Physiotherapy focuses on treating injuries and disorders of the bones, joints, ligaments, tendons, and muscles. 
It is designed to restore movement, improve strength, and reduce pain caused by trauma, surgery, or degenerative conditions.

Patients suffering from arthritis, fractures, sports injuries, or post-surgical stiffness benefit greatly from this therapy.
Our specialists create personalized rehabilitation programs using evidence-based techniques.
    `,
    benefits: [
      "Pain reduction and inflammation control",
      "Improved joint mobility",
      "Faster post-surgery recovery",
      "Muscle strengthening",
      "Better posture and alignment",
    ],
  },
  {
    title: "Sports Physiotherapy",
    img: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955",
    longDesc: `
Sports Physiotherapy is designed for athletes and physically active individuals. 
It focuses on injury prevention, performance enhancement, and rapid recovery after injury.

Our therapists work closely with sports professionals to develop strength, flexibility, and conditioning programs that keep athletes at peak performance.
    `,
    benefits: [
      "Injury prevention",
      "Performance improvement",
      "Faster healing",
      "Muscle conditioning",
      "Endurance building",
    ],
  },
  {
    title: "Neurological Rehabilitation",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    longDesc: `
Neurological Rehabilitation helps patients recover from stroke, spinal cord injuries, Parkinson’s disease, and multiple sclerosis.

This therapy focuses on retraining the nervous system to improve balance, coordination, and functional independence.
    `,
    benefits: [
      "Improved coordination",
      "Balance training",
      "Muscle control",
      "Better quality of life",
      "Enhanced independence",
    ],
  },
  {
    title: "Geriatric Physiotherapy",
    img: "https://assets.thehansindia.com/h-upload/2023/04/05/1345227-pgyh.webp",
    longDesc: `
Geriatric Physiotherapy is dedicated to elderly patients to maintain mobility and independence.
It helps manage age-related conditions such as osteoporosis, arthritis, and balance disorders.
    `,
    benefits: [
      "Fall prevention",
      "Joint flexibility",
      "Pain management",
      "Improved mobility",
      "Better daily functioning",
    ],
  },
  {
    title: "Pediatric Physiotherapy",
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    longDesc: `
Pediatric Physiotherapy supports children with developmental delays, neurological disorders, and physical impairments.

Therapy sessions are designed to be engaging and child-friendly while improving motor skills and confidence.
    `,
    benefits: [
      "Motor skill development",
      "Posture improvement",
      "Muscle coordination",
      "Confidence building",
      "Functional independence",
    ],
  },
  {
    title: "Cardio-Pulmonary Physiotherapy",
    img: "https://media.istockphoto.com/id/2251767473/photo/close-up-of-women-feet-with-swelling.jpg?s=612x612&w=0&k=20&c=AoCg5COPvXprFvgFv97pxW9rbSHfbWeQrcdpy6qySMw=",
    longDesc: `
Cardio-Pulmonary Physiotherapy improves breathing efficiency and heart endurance.
It is beneficial for patients with asthma, COPD, and post-COVID complications.
    `,
    benefits: [
      "Improved lung capacity",
      "Breathing control",
      "Heart endurance",
      "Reduced fatigue",
      "Better oxygen flow",
    ],
  },
];

export default function TreatmentDetail() {
  const { treatmentName } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const treatment = treatments.find(
    (t) => t.title.replace(/\s+/g, "-").toLowerCase() === treatmentName
  );

  if (!treatment) return <Typography variant="h4">Treatment Not Found</Typography>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box sx={{ py: 10, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center">
            {/* IMAGE */}
            <Grid item xs={12} md={6}>
              <motion.img
                src={treatment.img}
                alt={treatment.title}
                style={{ width: "1200px",height:450, borderRadius: 20 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              />
            </Grid>

            {/* CONTENT */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  {treatment.title}
                </Typography>

                <Typography sx={{ lineHeight: 1.9, mb: 3 }}>
                  {treatment.longDesc}
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography variant="h5" fontWeight="bold">
                  Benefits
                </Typography>

                {treatment.benefits.map((b, i) => (
                  <Box key={i} sx={{ display: "flex", gap: 1, mt: 1 }}>
                    <CheckCircleOutlineIcon color="primary" />
                    <Typography>{b}</Typography>
                  </Box>
                ))}

                <Button
                  variant="contained"
                  sx={{ mt: 4 }}
                  onClick={() => navigate("/AboutPage")}
                >
                  Back to About
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}


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
//     Divider,
// } from "@mui/material";
// import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
// import { useParams, useNavigate } from "react-router-dom";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// /* -------- EXPANDED DATASET -------- */
// const allTreatments = [
//     {
//         title: "Neuro Rehabilitation in Hyderabad",
//         img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200",
//         longDesc: `Our Neuro Rehabilitation center offers world-class care for individuals recovering from nervous system disorders. We focus on neuroplasticity—retraining the brain to form new connections—helping patients regain lost motor functions, balance, and independence.`,
//         benefits: [
//             "Customized neuro-recovery plans",
//             "Advanced gait training",
//             "Balance and coordination therapy",
//             "Functional independence training",
//             "Cognitive rehabilitation",
//         ],
//     },
//     {
//         title: "Stroke Rehabilitation Center in Hyderabad",
//         img: "https://images.unsplash.com/photo-1559757175-5700dde366c9?w=1200",
//         longDesc: `Recovering from a stroke requires immediate and intensive therapy. Our stroke rehabilitation protocol is designed to help survivors relearn skills that are lost when part of the brain is damaged. We use constraint-induced movement therapy and repetitive task practice to maximize recovery.`,
//         benefits: [
//             "Motor skill relearning",
//             "Speech and swallow therapy support",
//             "Muscle strength restoration",
//             "Prevention of secondary complications",
//             "Emotional and psychological support",
//         ],
//     },
//     {
//         title: "Head Injury Rehabilitation in Hyderabad",
//         img: "https://images.unsplash.com/photo-1579684385180-1ea55f619632?w=1200",
//         longDesc: `Traumatic Brain Injury (TBI) entails a complex recovery journey. Our specialized rehabilitation program addresses physical, cognitive, and emotional challenges, facilitating a safe return to daily activities and community integration.`,
//         benefits: [
//             "Cognitive behavioral therapy",
//             "Vestibular balance training",
//             "Sensory integration",
//             "Pain management",
//             "Community reintegration support",
//         ],
//     },
//     {
//         title: "Physiotherapy in Hyderabad",
//         img: "https://images.unsplash.com/photo-1588611910609-847285d852cc?w=1200",
//         longDesc: `General physiotherapy services for a wide range of conditions involving the musculoskeletal and nervous systems. Whether it's chronic back pain, stiff joints, or posture correction, our expert physios act as your partners in health.`,
//         benefits: [
//             "Comprehensive pain relief",
//             "Postural correction",
//             "Ergonomic advice",
//             "Lifestyle modification",
//             "Prescribed home exercises",
//         ],
//     },
//     {
//         title: "Brachial Plexus Rehabilitation",
//         img: "https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=1200",
//         longDesc: `Specialized care for nerve injuries connecting the spine to the shoulder, arm, and hand. We focus on maintaining range of motion and strengthening the muscles that are still innervated to maximize function.`,
//         benefits: [
//             "Nerve gliding exercises",
//             "Muscle electrical stimulation",
//             "Splinting and positioning",
//             "Sensory re-education",
//             "Functional arm training",
//         ],
//     },
//     {
//         title: "Bladder and Bowel Rehabilitation",
//         img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=1200",
//         longDesc: `Dedicated pelvic floor rehabilitation for incontinence and dysfunction. Our discreet and professional therapy helps strengthens pelvic floor muscles and retrains bladder control, significantly improving quality of life.`,
//         benefits: [
//             "Pelvic floor strengthening",
//             "Biofeedback therapy",
//             "Bladder retraining techniques",
//             "Electrical stimulation",
//             "Lifestyle and dietary counseling",
//         ],
//     },
//     {
//         title: "Vestibular Rehabilitation",
//         img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200",
//         longDesc: `A specialized exercise-based program primarily designed to reduce vertigo and dizziness, gaze instability, and/or imbalance and falls. Ideal for BPPV, labyrinthitis, and vestibular neuritis.`,
//         benefits: [
//             "Dizziness reduction",
//             "Improved gaze stability",
//             "Balance and gait training",
//             "Fall prevention strategies",
//             "Habituation exercises",
//         ],
//     },
//     {
//         title: "Orthopedic Rehabilitation",
//         img: "https://images.unsplash.com/photo-1590424592737-0205ac7718e2?w=1200",
//         longDesc: `Focused on the recovery of the musculoskeletal system. This includes recovery from fractures, joint replacements (knee/hip), and soft tissue injuries like ACL tears or rotator cuff repairs.`,
//         benefits: [
//             "Joint mobilization",
//             "Strength conditioning",
//             "Scar tissue management",
//             "Return-to-sport training",
//             "Pain and swelling control",
//         ],
//     },
//     {
//         title: "Sports Rehabilitation",
//         img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200",
//         longDesc: `High-performance rehab for athletes. We treat acute sports injuries and overuse syndromes, analyzing biomechanics to prevent recurrence and enhance future athletic performance.`,
//         benefits: [
//             "Biomechanical analysis",
//             "Plyometric training",
//             "Functional movement screening",
//             "Sport-specific drills",
//             "Taping and bracing",
//         ],
//     },
//     {
//         title: "Post COVID Rehabilitation",
//         img: "https://images.unsplash.com/photo-1584483766114-2cea6fac2578?w=1200",
//         longDesc: `Long COVID can leave patients with fatigue and breathlessness. Our program gradually increases physical tolerance using paced exercises, breathing control, and energy conservation techniques.`,
//         benefits: [
//             "Breathing pattern retraining",
//             "Fatigue management",
//             "Graded exercise therapy",
//             "Oxygen saturation monitoring",
//             "Autonomic nervous system balancing",
//         ],
//     },
//     {
//         title: "Gynecology Rehabilitation",
//         img: "https://images.unsplash.com/photo-1595822390885-3be9cf8dc0d6?w=1200",
//         longDesc: `Therapy tailored for women's health issues, including prenatal and postnatal care, diastasis recti, and pelvic pain.`,
//         benefits: [
//             "Prenatal exercise guidance",
//             "Postnatal core restoration",
//             "Diastasis recti correction",
//             "Pelvic pain management",
//             "Safe return to exercise",
//         ],
//     },
//     {
//         title: "Cardio Pulmonary Rehabilitation",
//         img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200",
//         longDesc: `Structured exercise and education for people with heart or lung problems. We aim to improve cardiovascular health and endurance safely under monitoring.`,
//         benefits: [
//             "Endurance building",
//             "Ejection fraction improvement",
//             "Dyspnea management",
//             "Risk factor education",
//             "Stress management",
//         ],
//     },
//     {
//         title: "COMA Care",
//         img: "https://images.unsplash.com/photo-1516549655169-df83a092dd14?w=1200",
//         longDesc: `Stimulation therapy for patients in states of reduced consciousness. We use multisensory stimulation to encourage arousal and prevent complications of immobility.`,
//         benefits: [
//             "Multisensory stimulation",
//             "Contracture prevention",
//             "Positioning and bed care",
//             "Chest physiotherapy",
//             "Family education and training",
//         ],
//     },
//     {
//         title: "Pain Management",
//         img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200",
//         longDesc: `A multidisciplinary approach to chronic pain. We move beyond just treating symptoms to addressing the root causes and central sensitization of pain.`,
//         benefits: [
//             "Trigger point therapy",
//             "Electrotherapy modalities",
//             "Graded exposure",
//             "Pain neuroscience education",
//             "Relaxation techniques",
//         ],
//     },
//     {
//         title: "Bedsore Management",
//         img: "https://images.unsplash.com/photo-1584515933487-9dca0c0825eb?w=1200",
//         longDesc: `Prevention and treatment of pressure ulcers in immobile patients. We focus on pressure redistribution, wound care support, and mobility enhancement.`,
//         benefits: [
//             "Regular repositioning protocols",
//             "Surface selection advice",
//             "Mobility aids training",
//             "Circulation improvement",
//             "Caregiver education",
//         ],
//     },
// ];
// /* -------- 3D TILT CARD COMPONENT -------- */
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
// /* -------- MAIN COMPONENT -------- */
// export default function PhysioDetail() {
//     const { slug } = useParams();
//     const navigate = useNavigate();
//     const theme = useTheme();
//     // Scroll to top on mount
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [slug]);
//     // Robust slugify function to match Navbar
//     const slugify = (text) => {
//         return text
//             .toString()
//             .toLowerCase()
//             .trim()
//             .replace(/\s+/g, "-")           // Replace spaces with -
//             .replace(/[^\w-]+/g, "")       // Remove all non-word chars
//             .replace(/--+/g, "-");         // Replace multiple - with single -
//     };
//     // Find treatment data matching the URL slug
//     let treatment = allTreatments.find(
//         (t) => slugify(t.title) === slug ||
//             t.title.toLowerCase().replace(/\s+/g, "-") === slug
//     );
//     // FALLBACK to first item if not found
//     if (!treatment) {
//         console.warn(`Treatment not found for slug: ${slug}. Defaulting to first item.`);
//         treatment = allTreatments[0];
//     }
//     // Parallax Scroll Effect
//     const { scrollY } = useScroll();
//     const yRange = useTransform(scrollY, [0, 500], [0, 200]);
//     const opacityRange = useTransform(scrollY, [0, 300], [1, 0]);
//     // Animation Variants
//     const textReveal = {
//         hidden: { opacity: 0, y: 20 },
//         visible: (i) => ({
//             opacity: 1,
//             y: 0,
//             transition: { delay: i * 0.03, duration: 0.5 }
//         }),
//     };
//     return (
//         <Box sx={{ overflowX: "hidden" }}>
//             {/* HERO SECTION With Parallax */}
//             <Box
//                 sx={{
//                     position: "relative",
//                     height: "80vh",
//                     overflow: "hidden",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                 }}
//             >
//                 <motion.div
//                     style={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         width: "100%",
//                         height: "120%", // larger for parallax
//                         backgroundImage: `url(${treatment.img})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         y: yRange, // Parallax effect
//                         zIndex: -2,
//                     }}
//                 />
//                 <Box
//                     sx={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         width: "100%",
//                         height: "100%",
//                         background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))",
//                         zIndex: -1
//                     }}
//                 />
//                 <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 1 }}>
//                     <motion.div style={{ opacity: opacityRange }}>
//                         {/* Staggered Text Reveal */}
//                         <Typography
//                             variant="h1"
//                             fontWeight={900}
//                             sx={{
//                                 textShadow: "0 10px 30px rgba(0,0,0,0.5)",
//                                 fontSize: { xs: "2.5rem", md: "5rem" },
//                                 lineHeight: 1.1,
//                                 mb: 3,
//                                 letterSpacing: "-0.02em"
//                             }}
//                         >
//                             {treatment.title.split("").map((char, i) => (
//                                 <motion.span
//                                     key={i}
//                                     custom={i}
//                                     initial="hidden"
//                                     animate="visible"
//                                     variants={textReveal}
//                                 >
//                                     {char}
//                                 </motion.span>
//                             ))}
//                         </Typography>
//                         <motion.div
//                             initial={{ opacity: 0, scaleX: 0 }}
//                             animate={{ opacity: 1, scaleX: 1 }}
//                             transition={{ delay: 0.5, duration: 0.8 }}
//                         >
//                             <Box
//                                 sx={{
//                                     height: 6,
//                                     width: 120,
//                                     bgcolor: theme.palette.secondary.main,
//                                     mx: "auto",
//                                     borderRadius: 2
//                                 }}
//                             />
//                         </motion.div>
//                     </motion.div>
//                 </Container>
//             </Box>
//             {/* CONTENT SECTION */}
//             <Container maxWidth="lg" sx={{ py: 12 }}>
//                 <Grid container spacing={8} alignItems="flex-start">
//                     {/* LEFT: Description */}
//                     <Grid item xs={12} md={7}>
//                         <motion.div
//                             initial={{ opacity: 0, x: -50 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.8 }}
//                         >
//                             <Typography
//                                 variant="h6"
//                                 color="secondary"
//                                 fontWeight={800}
//                                 gutterBottom
//                                 sx={{ letterSpacing: 2, textTransform: "uppercase" }}
//                             >
//                                 Overview
//                             </Typography>
//                             <Typography
//                                 variant="body1"
//                                 sx={{
//                                     fontSize: "1.25rem",
//                                     lineHeight: 1.8,
//                                     color: "text.secondary",
//                                     mb: 5
//                                 }}
//                             >
//                                 {treatment.longDesc}
//                             </Typography>
//                             <Button
//                                 startIcon={<ArrowBackIcon />}
//                                 variant="outlined"
//                                 onClick={() => navigate("/")}
//                                 sx={{
//                                     borderRadius: 50,
//                                     px: 4,
//                                     py: 1.5,
//                                     borderWidth: 2,
//                                     fontWeight: 700,
//                                     borderColor: theme.palette.primary.main,
//                                     color: theme.palette.primary.main,
//                                     "&:hover": { borderWidth: 2, bgcolor: "rgba(0,0,0,0.02)" }
//                                 }}
//                             >
//                                 Back to Home
//                             </Button>
//                         </motion.div>
//                     </Grid>
//                     {/* RIGHT: Benefits Cards (3D Tilt) */}
//                     <Grid item xs={12} md={5}>
//                         <TiltCard>
//                             <Card
//                                 elevation={0}
//                                 sx={{
//                                     bgcolor: "white",
//                                     borderRadius: 6,
//                                     boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
//                                     border: "1px solid rgba(0,0,0,0.05)",
//                                     overflow: "hidden"
//                                 }}
//                             >
//                                 <Box sx={{ height: 10, bgcolor: theme.palette.primary.main }} />
//                                 <CardContent sx={{ p: 5 }}>
//                                     <Typography variant="h4" fontWeight={800} gutterBottom sx={{ mb: 4 }}>
//                                         Key Benefits
//                                     </Typography>
//                                     {treatment.benefits.map((benefit, i) => (
//                                         <motion.div
//                                             key={i}
//                                             initial={{ opacity: 0, x: 20 }}
//                                             whileInView={{ opacity: 1, x: 0 }}
//                                             viewport={{ once: true }}
//                                             transition={{ delay: i * 0.1 }}
//                                         >
//                                             <Box
//                                                 sx={{
//                                                     display: "flex",
//                                                     alignItems: "start",
//                                                     gap: 2,
//                                                     mb: 3,
//                                                     p: 1.5,
//                                                     borderRadius: 3,
//                                                     transition: "all 0.3s",
//                                                     "&:hover": { transform: "translateX(10px)", bgcolor: theme.palette.background.default }
//                                                 }}
//                                             >
//                                                 <CheckCircleOutlineIcon color="secondary" sx={{ mt: 0.5 }} />
//                                                 <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 500 }}>
//                                                     {benefit}
//                                                 </Typography>
//                                             </Box>
//                                             {i < treatment.benefits.length - 1 && (
//                                                 <Divider sx={{ mb: 2, opacity: 0.3 }} />
//                                             )}
//                                         </motion.div>
//                                     ))}
//                                 </CardContent>
//                             </Card>
//                         </TiltCard>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// }