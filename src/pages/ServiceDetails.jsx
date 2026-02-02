// import React, { useEffect } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Paper,
//   Button,
//   TextField,
//   CardMedia,
//   Chip,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { useParams } from "react-router-dom";
// import { treatments } from "../data/treatments";

// const THEME = {
//   background: "#f5f8fc",
//   formBackground: "#ffffff",
//   primary: "#1976d2",
//   primaryDark: "#0d47a1",
//   white: "#fff",
// };

// export default function ServiceDetails() {
//   const { id } = useParams();

//   const service = treatments.find((item) => item.id === id);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!service) {
//     return <Typography align="center">Service not found</Typography>;
//   }

//   return (
//     <Box sx={{ background: THEME.background, py: { xs: 6, md: 10 }, mt: 5 }}>
//       <Container maxWidth="xl">
//         <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">

//           {/* ================= LEFT CONTENT ================= */}
//           <Grid item xs={12} md={8}>
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Image */}
//               <CardMedia
//                 component="img"
//                 height="400"
//                 image={service.img}
//                 alt={service.title}
//                 sx={{ borderRadius: 4, mb: 4 }}
//               />

//               {/* Title */}
//               <Typography variant="h3" fontWeight={800} gutterBottom>
//                 {service.title}
//               </Typography>

//               {/* Description */}
//               {service.longDesc.split("\n\n").map((para, i) => (
//                 <Typography key={i} sx={{ mb: 2, lineHeight: 1.8 }}>
//                   {para}
//                 </Typography>
//               ))}

//               {/* Symptoms */}
//               <Typography variant="h5" fontWeight={700} mt={4} mb={2}>
//                 Common Symptoms
//               </Typography>
//               {service.symptoms?.map((s, i) => (
//                 <Chip
//                   key={i}
//                   label={s}
//                   sx={{ mr: 1, mb: 1 }}
//                   color="primary"
//                   variant="outlined"
//                 />
//               ))}

//               {/* Recovery Time */}
//               <Typography variant="h6" mt={3}>
//                 Recovery Time: <strong>{service.recoveryTime}</strong>
//               </Typography>

//               {/* Benefits */}
//               <Typography variant="h5" fontWeight={700} mt={4} mb={2}>
//                 Benefits
//               </Typography>
//               <ul>
//                 {service.benefits.map((b, i) => (
//                   <li key={i}>
//                     <Typography>{b}</Typography>
//                   </li>
//                 ))}
//               </ul>

//               {/* Gallery */}
//               <Typography variant="h5" fontWeight={700} mt={4} mb={2}>
//                 Gallery
//               </Typography>

//               <Grid container spacing={2}>
//                 {service.gallery.map((img, i) => (
//                   <Grid item xs={12} sm={4} key={i}>
//                     <motion.img
//                       src={img}
//                       alt="gallery"
//                       style={{
//                         width: "100%",
//                         borderRadius: 12,
//                         height: 200,
//                         objectFit: "cover",
//                       }}
//                       whileHover={{ scale: 1.05 }}
//                     />
//                   </Grid>
//                 ))}
//               </Grid>
//             </motion.div>
//           </Grid>

//           {/* ================= RIGHT SIDEBAR ================= */}
//           <Grid item xs={12} md={4}>
//             <Paper
//               elevation={2}
//               sx={{
//                 p: { xs: 3, md: 4 },
//                 borderRadius: 4,
//                 background: THEME.formBackground,
//                 position: { md: "sticky" },
//                 top: { md: 100 },
//                 width: 350,
//               }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Typography
//                   variant="h5"
//                   fontWeight="bold"
//                   sx={{ mb: 0.5, color: THEME.primary }}
//                 >
//                   Need Help?
//                 </Typography>

//                 <Typography variant="subtitle1" sx={{ mb: 3 }}>
//                   Drop us a Line
//                 </Typography>

//                 <TextField fullWidth label="Name" sx={{ mb: 2 }} />
//                 <TextField fullWidth label="Email" sx={{ mb: 2 }} />
//                 <TextField fullWidth label="Phone No" sx={{ mb: 2 }} />
//                 <TextField
//                   fullWidth
//                   label="Looking For"
//                   defaultValue={service.title}
//                   sx={{ mb: 2 }}
//                 />
//                 <TextField
//                   fullWidth
//                   multiline
//                   rows={3}
//                   label="Message"
//                   sx={{ mb: 3 }}
//                 />

//                 <Button
//                   fullWidth
//                   size="large"
//                   variant="contained"
//                   sx={{
//                     bgcolor: THEME.primary,
//                     color: THEME.white,
//                     fontWeight: 600,
//                     py: 1.5,
//                     borderRadius: 2,
//                     "&:hover": { bgcolor: THEME.primaryDark },
//                   }}
//                 >
//                   Submit Now
//                 </Button>
//               </motion.div>
//             </Paper>
//           </Grid>

//         </Grid>
//       </Container>
//     </Box>
//   );
// }






import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  TextField,
  CardMedia,
  Chip,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { treatments } from "../data/treatments";

const THEME = {
  background: "#f5f8fc",
  formBackground: "#ffffff",
  primary: "#1976d2",
  primaryDark: "#0d47a1",
  white: "#fff",
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "symptoms", label: "Symptoms" },
  { id: "benefits", label: "Benefits" },
  { id: "gallery", label: "Gallery" },
];

export default function ServiceDetails() {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState("overview");

  const service = treatments.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 🔥 ScrollSpy Logic
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!service) return <Typography align="center">Service not found</Typography>;

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ background: THEME.background, py: 10 }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="flex-start">

          {/* ========== SIDEBAR ========== */}
          <Grid item xs={12} md={3} sx={{width:300, position:"fixed"}}>
            <Box sx={{ position: "sticky", top: 100 }}>
              <Paper sx={{ p: 3, borderRadius: 4 }}>


                {/* CONTACT FORM */}
                <Box mt={4}>
                  <Typography variant="h6" fontWeight={700} mb={2}>
                    Need Help?
                  </Typography>

                  <TextField fullWidth label="Name" sx={{ mb: 2 }} />
                  <TextField fullWidth label="Email" sx={{ mb: 2 }} />
                  <TextField fullWidth label="Phone No" sx={{ mb: 2 }} />
                  <TextField
                    fullWidth
                    label="Looking For"
                    defaultValue={service.title}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Message"
                    sx={{ mb: 3 }}
                  />

                  <Button fullWidth variant="contained">
                    Submit Now
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* ========== CONTENT ========== */}
          <Grid item xs={12} md={9} sx={{ml:40}}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              <CardMedia
                component="img"
                height="400"
                image={service.img}
                alt={service.title}
                sx={{ borderRadius: 4, mb: 4 }}
              />

              {/* OVERVIEW */}
              <Box id="overview">
                <Typography variant="h3" fontWeight={800} mb={2}>
                  {service.title}
                </Typography>

                {service.longDesc.split("\n\n").map((para, i) => (
                  <Typography key={i} sx={{ mb: 2 }}>
                    {para}
                  </Typography>
                ))}
              </Box>

              {/* SYMPTOMS */}
              <Box id="symptoms" mt={6}>
                <Typography variant="h5" fontWeight={700} mb={2}>
                  Common Symptoms
                </Typography>
                {service.symptoms?.map((s, i) => (
                  <Chip key={i} label={s} sx={{ mr: 1, mb: 1 }} />
                ))}
              </Box>

              {/* BENEFITS */}
              <Box id="benefits" mt={6}>
                <Typography variant="h5" fontWeight={700} mb={2}>
                  Benefits
                </Typography>
                <ul>
                  {service.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </Box>

              {/* GALLERY */}
              <Box id="gallery" mt={6}>
                <Typography variant="h5" fontWeight={700} mb={2}>
                  Gallery
                </Typography>
                <Grid container spacing={2}>
                  {service.gallery.map((img, i) => (
                    <Grid item xs={12} sm={4} key={i}>
                      <motion.img
                        src={img}
                        alt="gallery"
                        style={{
                          width: "100%",
                          height: 200,
                          borderRadius: 12,
                          objectFit: "cover",
                        }}
                        whileHover={{ scale: 1.05 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>

            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
