// import React from 'react';
// import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
// import { motion } from 'framer-motion';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// // Animation variants
// const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// };

// const Hero = () => {
//     const theme = useTheme();

//     return (
//         <Box
//             sx={{
//                 overflow: 'hidden',
//                 minHeight: '90vh',
//                 display: 'flex',
//                 alignItems: 'center',
//                 background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, rgba(131, 197, 190, 0.2) 100%)`, // Subtle green gradient
//                 position: 'relative',
//                 pt: { xs: 8, md: 0 }
//             }}
//         >
//             {/* Decorative Blur Circles */}
//             <Box
//                 component={motion.div}
//                 animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                 sx={{
//                     position: 'absolute',
//                     top: '-10%',
//                     right: '-5%',
//                     width: '500px',
//                     height: '500px',
//                     borderRadius: '50%',
//                     background: 'radial-gradient(circle, rgba(0,109,119,0.1) 0%, rgba(255,255,255,0) 70%)',
//                     zIndex: 0,
//                 }}
//             />

//             <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//                 <Grid container spacing={4} alignItems="center">
//                     {/* Content */}
//                     <Grid item xs={12} md={6}>
//                         <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
//                             <Box sx={{ mb: 2, display: 'inline-block', px: 2, py: 1, borderRadius: 8, bgcolor: 'rgba(0,109,119,0.1)', color: 'primary.main', fontWeight: 'bold', fontSize: '0.9rem' }}>
//                                 👋 Welcome to Sri Sai Priya Physiotherapy
//                             </Box>
//                             <Typography variant="h1" gutterBottom sx={{ color: 'text.primary', letterSpacing: '-1px' }}>
//                                 Reclaim Your <br />
//                                 <Box component="span" sx={{ color: 'primary.main' }}>Movement & Life</Box>
//                             </Typography>
//                             <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: '600px', fontWeight: 400 }}>
//                                 World-class physiotherapy and rehabilitation care tailored to your needs.
//                                 Experience healing with our expert team and advanced technology.
//                             </Typography>

//                             <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//                                 <Button
//                                     variant="contained"
//                                     size="large"
//                                     endIcon={<ArrowForwardIcon />}
//                                     sx={{ py: 1.5, px: 4, fontSize: '1.1rem' }}
//                                 >
//                                     Book Appointment
//                                 </Button>
//                                 <Button
//                                     variant="outlined"
//                                     size="large"
//                                     sx={{ py: 1.5, px: 4, fontSize: '1.1rem', borderWidth: 2, '&:hover': { borderWidth: 2 } }}
//                                 >
//                                     View Services
//                                 </Button>
//                             </Box>

//                             {/* Trust Indicators */}
//                             <Box sx={{ mt: 6, display: 'flex', gap: 4 }}>
//                                 {[
//                                     { count: '10k+', label: 'Happy Patients' },
//                                     { count: '15+', label: 'Years Experience' },
//                                     { count: '50+', label: 'Expert Doctors' }
//                                 ].map((stat, index) => (
//                                     <Box key={index}>
//                                         <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'text.primary' }}>{stat.count}</Typography>
//                                         <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
//                                     </Box>
//                                 ))}
//                             </Box>
//                         </motion.div>
//                     </Grid>

//                     {/* Image/Visual */}
//                     <Grid item xs={12} md={6} sx={{ position: 'relative', height: { xs: 'auto', md: '80vh' } }}>
//                         {/* Abstract floating cards mock */}
//                         <motion.div
//                             initial={{ opacity: 0, x: 50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: 0.3, duration: 0.8 }}
//                             style={{ height: '100%', width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//                         >
//                             {/* Placeholders for visuals since I can't simple generate a complex medical illustration image easily, using simple shapes/mock cards */}
//                             <Box
//                                 sx={{
//                                     width: '80%',
//                                     height: '70%',
//                                     bgcolor: 'secondary.light',
//                                     borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
//                                     overflow: 'hidden',
//                                     position: 'relative',
//                                     boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
//                                 }}
//                             >
//                                 {/* In a real app, this would be a photo of a doctor or therapy session */}
//                                 <Box component="img" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Physiotherapy" />
//                             </Box>

//                             {/* Floating Card 1 */}
//                             <Box
//                                 component={motion.div}
//                                 animate={{ y: [0, -10, 0] }}
//                                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//                                 sx={{
//                                     position: 'absolute',
//                                     top: '20%',
//                                     left: '5%',
//                                     bgcolor: 'white',
//                                     p: 2,
//                                     borderRadius: 4,
//                                     boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     gap: 2
//                                 }}
//                             >
//                                 <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'primary.light', display: 'grid', placeItems: 'center' }}>💪</Box>
//                                 <Box>
//                                     <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Recovery</Typography>
//                                     <Typography variant="caption" color="success.main">98% Success</Typography>
//                                 </Box>
//                             </Box>

//                             {/* Floating Card 2 */}
//                             <Box
//                                 component={motion.div}
//                                 animate={{ y: [0, 10, 0] }}
//                                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                                 sx={{
//                                     position: 'absolute',
//                                     bottom: '20%',
//                                     right: '10%',
//                                     bgcolor: 'white',
//                                     p: 2,
//                                     borderRadius: 4,
//                                     boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     gap: 2
//                                 }}
//                             >
//                                 <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'secondary.main', display: 'grid', placeItems: 'center' }}>🩺</Box>
//                                 <Box>
//                                     <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Expert Care</Typography>
//                                     <Typography variant="caption">24/7 Support</Typography>
//                                 </Box>
//                             </Box>

//                         </motion.div>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };

// export default Hero;











import React from "react";
import { Box, Container, Typography, Button, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image1 from "../images/WhatsApp Image 2026-01-29 at 08.17.32 (1).jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, rgba(131,197,190,0.15) 100%)`,
        position: "relative",
        pt: { xs: "120px", md: "10px" }, // Added more padding to clear 90px fixed navbar
        pb: { xs: 8, md: 12 },
      }}
    >
      {/* Decorative Blur Circle */}
      <Box
        component={motion.div}
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,150,136,0.12) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">

          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6} mt={4}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              <motion.div variants={fadeUp}>
                <Box
                  sx={{
                    mb: 2,
                    display: "inline-block",
                    px: 2,
                    py: 1,
                    borderRadius: 8,
                    bgcolor: "rgba(0,150,136,0.1)",
                    color: "primary.main",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  👋 Welcome to Sri Sai Priya Physiotherapy
                </Box>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Typography variant="h3" fontWeight="bold">
                  Reclaim Your{" "}
                  <Box component="span" sx={{ color: "primary.main" }}>
                    Movement & Life
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Typography
                  variant="h6"
                  color="black"
                  paragraph
                  sx={{ mb: 4, maxWidth: "600px" }}
                >
                  World-class physiotherapy and rehabilitation care tailored to your needs.
                  Experience healing with our expert team and advanced technology.
                </Typography>
              </motion.div>

              <motion.div variants={fadeUp}>
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        py: 1.5,
                        px: 4,
                        fontSize: "1.1rem",
                        borderRadius: "30px",
                        background: "linear-gradient(135deg,#009688,#26c6da)",
                        boxShadow: "0 10px 30px rgba(0,150,136,0.4)",
                      }}
                    >
                      Book Appointment
                    </Button>
                  </motion.div>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ py: 1.5, px: 4, borderRadius: "30px", color: "black", }}
                  >
                    View Services
                  </Button>
                </Box>
              </motion.div>

              {/* STATS */}
              <motion.div variants={fadeUp}>
                <Box sx={{ mt: 6, display: "flex", gap: 4 }}>
                  {[
                    { count: "10k+", label: "Happy Patients" },
                    { count: "15+", label: "Years Experience" },
                    { count: "50+", label: "Expert Doctors" },
                  ].map((stat, index) => (
                    <Box key={index}>
                      <Typography variant="h4" fontWeight="bold">
                        {stat.count}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          {/* RIGHT IMAGE */}
          <Grid item xs={12} md={6} sx={{ position: "relative", height: { xs: "auto", md: "80vh" } }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Main Image Blob */}
              <Box
                sx={{
                  width: "80%",
                  height: "70%",
                  bgcolor: "secondary.light",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <Box
                  component="img"
                  src={Image1}
                  sx={{ width: "600px", height: "650px", objectFit: "cover" }}
                  alt="Physiotherapy"
                />
              </Box>

              {/* Floating Card 1 */}
              <Box
                component={motion.div}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  top: "20%",
                  left: "5%",
                  bgcolor: "white",
                  p: 2,
                  borderRadius: 4,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: "primary.light", display: "grid", placeItems: "center" }}>
                  💪
                </Box>
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Recovery
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    98% Success
                  </Typography>
                </Box>
              </Box>

              {/* Floating Card 2 */}
              <Box
                component={motion.div}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                sx={{
                  position: "absolute",
                  bottom: "20%",
                  right: "10%",
                  bgcolor: "white",
                  p: 2,
                  borderRadius: 4,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ width: 40, height: 40, borderRadius: "50%", bgcolor: "secondary.main", display: "grid", placeItems: "center" }}>
                  🩺
                </Box>
                <Box>
                  <Typography variant="subtitle2" fontWeight="bold">
                    Expert Care
                  </Typography>
                  <Typography variant="caption">
                    24/7 Support
                  </Typography>
                </Box>
              </Box>

            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
