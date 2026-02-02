import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const treatments = [
  {
    title: "Manual Therapy",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900",
    duration: "45-60 min",
    description:
      "Hands-on techniques including massage, joint mobilization, and manipulation to reduce pain and improve mobility. Manual therapy is effective for back pain, neck pain, joint stiffness, and muscle injuries.",
    benefits: ["Pain relief", "Improved range of motion", "Muscle relaxation", "Better circulation"],
  },
  {
    title: "Electrotherapy",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900",
    duration: "20-30 min",
    description:
      "Advanced electrical stimulation techniques including TENS, ultrasound, and interferential therapy for pain management and tissue healing.",
    benefits: ["Pain reduction", "Muscle stimulation", "Tissue healing", "Inflammation control"],
  },
  {
    title: "Exercise Therapy",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900",
    duration: "45-60 min",
    description:
      "Customized exercise programs designed to strengthen muscles, improve flexibility, and enhance functional capacity.",
    benefits: ["Strength building", "Flexibility", "Balance improvement", "Endurance"],
  },
  {
    title: "Dry Needling",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900",
    duration: "30-45 min",
    description:
      "Targeted insertion of thin needles into trigger points to release muscle tension and alleviate chronic pain.",
    benefits: ["Trigger point release", "Muscle relaxation", "Pain relief", "Improved mobility"],
  },
  {
    title: "Hydrotherapy",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900",
    duration: "45-60 min",
    description:
      "Water-based exercises and treatments that reduce joint stress while improving strength and mobility.",
    benefits: ["Low-impact exercise", "Joint relief", "Muscle relaxation", "Cardiovascular health"],
  },
  {
    title: "Spinal Decompression",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900",
    duration: "30-45 min",
    description:
      "Non-surgical treatment that gently stretches the spine to relieve pressure on discs and nerves.",
    benefits: ["Disc pressure relief", "Nerve decompression", "Posture improvement", "Back pain relief"],
  },
  {
    title: "Cupping Therapy",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900",
    duration: "20-30 min",
    description:
      "Ancient technique using suction cups to increase blood flow, reduce inflammation, and promote healing.",
    benefits: ["Blood circulation", "Toxin removal", "Muscle recovery", "Pain relief"],
  },
  {
    title: "Kinesio Taping",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900",
    duration: "15-20 min",
    description:
      "Elastic therapeutic tape applied to support muscles and joints while allowing full range of motion.",
    benefits: ["Joint support", "Pain reduction", "Swelling control", "Muscle support"],
  },
];

const TreatmentDetail = () => {
  const { treatmentName } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();

  const treatment = treatments.find(
    (item) =>
      item.title.replace(/\s+/g, "-").toLowerCase() === treatmentName
  );

  if (!treatment) {
    return <Typography variant="h4">Treatment Not Found</Typography>;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box sx={{ py: 10, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="center" >
            {/* Image */}
            <Grid item xs={12} md={6} sx={{height:50, width:1600, }}>
              <motion.img
                src={treatment.image}
                alt={treatment.title}
                style={{width:1200, height:550,borderRadius: 16 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }} 
              />
            </Grid>

            {/* Content */}
            <Grid item xs={12} md={6} mt={60}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h3" fontWeight={700} gutterBottom>
                  {treatment.title}
                </Typography>

                <Chip
                  label={treatment.duration}
                  sx={{
                    mb: 2,
                    bgcolor: `${theme.palette.primary.main}15`,
                    color: "primary.main",
                  }}
                />

                <Typography variant="body1" sx={{ mb: 3 }}>
                  {treatment.description}
                </Typography>

                <Typography variant="h6" sx={{ mb: 1 }}>
                  Benefits:
                </Typography>

                {treatment.benefits.map((benefit, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                  >
                    <CheckCircleOutlineIcon color="primary" />
                    <Typography>{benefit}</Typography>
                  </Box>
                ))}

                <Button
                  variant="contained"
                  sx={{ mt: 4 }}
                  onClick={() => navigate("/treatment")}
                >
                  Back to Treatments
                </Button>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default TreatmentDetail;
