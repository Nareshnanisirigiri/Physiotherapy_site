import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { color, motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const blinkAnim = {
  animate: {
    scale: [1, 1.1, 1],
    boxShadow: [
      "0 0 0px rgba(0,255,0,0.4)",
      "0 0 20px rgba(0,255,0,0.8)",
      "0 0 0px rgba(0,255,0,0.4)",
    ],
    transition: { duration: 1.5, repeat: Infinity },
  },
};

// Icon hover animation
const iconHover = {
  whileHover: { scale: 1.3, rotate: 10 },
  whileTap: { scale: 0.9 },
};


export default function Footer() {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg,#004d40,#00695c)",
        color: "white",
        pt: 6,
        pb: 3,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* ABOUT */}
          <Grid item xs={12} md={3} sx={{ml:-10}}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Sri Sai Priya Physiotherapy
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              At Physio Tattva, we are committed to <br />bring access to quality physio care <br /> through ultra-modern clinics and <br />high-skilled practitioners to all.<br /> Our world-class therapists keep <br />a strong focus on patient needs <br />and deliver the highest level of care.
            </Typography>

            {/* Social Icons */}
            <Stack direction="row" spacing={1} mt={2}>
              <motion.div {...iconHover}>
                <IconButton sx={{color:"#2bf55e"}}>
                  <WhatsAppIcon />
                </IconButton>
              </motion.div>

              <motion.div {...iconHover}   >
                <IconButton sx={{color:"#36bff1"}}>
                  <FacebookIcon />
                </IconButton>
              </motion.div>

              <motion.div {...iconHover} >
                <IconButton sx={{ color: "#ff58bf" }} >
                  <InstagramIcon />
                </IconButton>
              </motion.div>
            </Stack>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} md={2} sx={{ml:5}}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>

            <Stack spacing={1} >
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">Contact</Button>
            </Stack>
          </Grid>

          {/* CONTACT INFO */}
          <Grid item xs={12} md={3} sx={{ml:5}}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Info
            </Typography>

            <Stack spacing={1}>
              <motion.div >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOnIcon />
                  <Typography>
                   280, 15th Cross Rd, 5th Phase, <br />KR Layout, Prasanti Nagar, <br />J. P. Nagar, <br />Bengaluru, Karnataka 560078
                  </Typography>
                </Box>
              </motion.div>

              <motion.div >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1,  }}>
                  <PhoneIcon />
                  <Typography variant="body2">
                    +91 8147096111
                  </Typography>
                </Box>
              </motion.div>

              <motion.div >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 ,}}>
                  <EmailIcon />
                  <Typography variant="body2">
                    Sri Sai Priya Physiotherapy@gmail.com
                  </Typography>
                </Box>
              </motion.div>
            </Stack>
          </Grid>

          {/* MAP + BOOK BUTTON */}
          <Grid item xs={12} md={4} sx={{ml:5}}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Location
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                mb: 2,
                boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
              }}
            >
              <iframe
                title="Sri Sai Priya Physiotherapy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.420226487934!2d78.4010451!3d17.4933186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b0dfbde8f7%3A0x5d42e7a8a2e7f69b!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </Box>

            <motion.div variants={blinkAnim} animate="animate">
              <Button
                variant="contained"
                startIcon={<EventAvailableIcon />}
                sx={{
                  borderRadius: "30px",width: "100%",
                  px: 3,
                  py: 1.2,
                  background: "linear-gradient(135deg,#00e676,#00c853)",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Book Appointment
              </Button>
            </motion.div>
          </Grid>

        </Grid>

        {/* FOOTER BOTTOM */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            mt: 4,
            pt: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Sri Sai Priya Physiotherapy. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
