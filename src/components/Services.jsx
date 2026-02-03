import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HealingIcon from "@mui/icons-material/Healing";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import HomeIcon from "@mui/icons-material/Home";
import ElderlyIcon from "@mui/icons-material/Elderly";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const services = [
  { title: "Sports Physiotherapy", icon: <FitnessCenterIcon fontSize="large" /> },
  { title: "Chiropractic Care", icon: <HealingIcon fontSize="large" /> },
  { title: "Neuro Rehabilitation", icon: <AccessibilityNewIcon fontSize="large" /> },
  { title: "Home Physiotherapy", icon: <HomeIcon fontSize="large" /> },
  { title: "Geriatric Care", icon: <ElderlyIcon fontSize="large" /> },
  { title: "Vestibular Therapy", icon: <DirectionsWalkIcon fontSize="large" /> },
];

export default function Services() {
  return (
    <Box sx={{ bgcolor: "#f5f7fa", py: 6 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
        Our Services
      </Typography>

      <Grid container spacing={4} sx={{ px: 4, mt: 2 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  height: "100%",
                  width: "350px",
                  textAlign: "center",
                  marginLeft: "50px",
                  borderRadius: 3,
                  boxShadow: 3,
                  py: 4,
                  backgroundColor: "primary.light",
                }}
              >
                <CardContent>
                  <Box sx={{ color: "#fff", mb: 1 }}>
                    {service.icon}
                  </Box>

                  <Typography variant="h6" fontWeight="bold" color="#fff">
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
