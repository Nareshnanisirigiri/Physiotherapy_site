import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

import Img1 from"../images/WhatsApp Image 2026-01-29 at 08.17.32 (1).jpeg";
import Img2 from"../images/doctor-2.jpeg";
import Img3 from"../images/doctor-3.jpeg";
import Img4 from"../images/doctor-4.jpeg";




/* ---------------- Animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ---------------- Data ---------------- */
const treatments = [
  {
    title: "Orthopedic Physiotherapy",
    desc: "Evidence-based treatment for bones, joints, ligaments, and muscles.",
    img: "https://aica.com/wp-content/uploads/2024/09/Top-5-Treatments-You-May-Receive-in-Orthopedic-Physiotherapy-e1612576187237.jpg",
  },
  {
    title: "Sports Physiotherapy",
    desc: "Injury prevention, performance improvement, and faster athletic recovery.",
    img: "https://images.unsplash.com/photo-1571019613576-2b22c76fd955",
  },
  {
    title: "Neurological Rehabilitation",
    desc: "Specialized therapy for stroke, Parkinson’s, and spinal injuries.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
  },
  {
    title: "Geriatric Physiotherapy",
    desc: "Improving balance, mobility, and strength for elderly patients.",
    img: "https://assets.thehansindia.com/h-upload/2023/04/05/1345227-pgyh.webp",
  },
  {
    title: "Pediatric Physiotherapy",
    desc: "Helping children with developmental and neurological challenges.",
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
  },
  {
    title: "Cardio-Pulmonary Physiotherapy",
    desc: "Breathing and endurance therapy for heart and lung conditions.",
    img: "https://media.istockphoto.com/id/2251767473/photo/close-up-of-women-feet-with-swelling.jpg?s=612x612&w=0&k=20&c=AoCg5COPvXprFvgFv97pxW9rbSHfbWeQrcdpy6qySMw=",
  },
];

const doctors = [
  {
    name: "Dr. Ananya Rao",
    qualification: "MPT (Orthopedics), PhD",
    img: Img1,
  },
  {
    name: "Dr. Rajesh Kumar",
    qualification: "MPT (Sports Physiotherapy)",
    img: Img2,
  },
  {
    name: "Dr. Priya Sharma",
    qualification: "MPT (Neurology)",
    img: Img3,
  },
  {
    name: "Dr. Arjun Patel",
    qualification: "MPT (Cardio Pulmonary)",
    img: Img4,
  },
];

/* ---------------- Component ---------------- */
export default function About() {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#f5f9fc", py: 10 }}>
      <Container maxWidth="lg">

        {/* INTRO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography variant="h3" textAlign="center" fontWeight="bold">
            About Sri Sai Priya Physiotherapy
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ mt: 2, mb: 8 }}
          >
            Healing through science, care, and movement.
          </Typography>
        </motion.div>

        {/* WHO WE ARE */}
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.img
              src="https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?q=80&w=1600&auto=format&fit=crop"
              alt="Physiotherapy Clinic"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{
                width: "1200px",
                height: "360px",
                objectFit: "cover",
                borderRadius: "20px",
                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Who We Are
              </Typography>
              <Typography sx={{ lineHeight: 1.9 }}>
                Sri Sai Priya Physiotherapy is a multidisciplinary physiotherapy clinic offering
                personalized rehabilitation programs. We believe movement is
                medicine and empower patients to regain mobility and confidence.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* TREATMENTS */}
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          sx={{ mt: 10 }}
        >
          Our Physiotherapy Treatments
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {treatments.map((t, i) => (
            <Grid item xs={12} md={4} key={i} sx={{width:550, height:450, mb:-10}}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -12,
                  boxShadow: "0 25px 50px rgba(0,150,136,0.3)",
                }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: "100%", borderRadius: 4 }}>
                  <img
                    src={t.img}
                    alt={t.title}
                    style={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      cursor: "pointer"
                    }}
                    onClick={() =>
    navigate(`/physio-treatment/${t.title.replace(/\s+/g, "-").toLowerCase()}`)
  }
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                      {t.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* DOCTORS */}
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight="bold"
          sx={{ mt: 10 }}
        >
          Our Expert Doctors
        </Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {doctors.map((doc, i) => (
            <Grid item xs={12} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card sx={{ textAlign: "center", p: 4, borderRadius: 4 }}>
                  <Avatar
                    src={doc.img}
                    sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                  />
                  <Typography fontWeight="bold">{doc.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doc.qualification}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* MISSION & VISION */}
        {/* <Grid container spacing={6} sx={{ mt: 10 }}>
          {["Our Mission", "Our Vision"].map((title, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Typography variant="h4" fontWeight="bold">
                  {title}
                </Typography>
                <Typography sx={{ mt: 2, lineHeight: 1.9 }}>
                  {title === "Our Mission"
                    ? "To deliver compassionate, innovative, and result-driven physiotherapy care."
                    : "To become the most trusted physiotherapy brand through excellence and innovation."}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid> */}

<Grid container spacing={6} sx={{ mt: 10 }}>
      {/* OUR MISSION */}
      <Grid item xs={12} md={6}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box
            sx={{
              p: 4,
              borderRadius: "20px",
              background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              height: "100%",
            }}
          >
            <FavoriteIcon sx={{ fontSize: 40, color: "#009688" }} />

            <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
              Our Mission
            </Typography>

            <Typography sx={{ mt: 2, lineHeight: 1.9 }}>
              To deliver compassionate, evidence-based, and result-driven
              physiotherapy care that helps patients regain mobility, reduce
              pain, and return to an active, healthy lifestyle.
            </Typography>

            <motion.img
              src="https://images.unsplash.com/photo-1606206873764-fd15e242df52?q=80&w=1200&auto=format&fit=crop"
              alt="Physiotherapy Treatment"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "16px",
                marginTop: "24px",
              }}
            />
          </Box>
        </motion.div>
      </Grid>

      {/* OUR VISION */}
      <Grid item xs={12} md={6}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box
            sx={{
              p: 4,
              borderRadius: "20px",
              background: "linear-gradient(135deg, #f1f8e9, #ffffff)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
              height: "100%",
            }}
          >
            <VisibilityIcon sx={{ fontSize: 40, color: "#7cb342" }} />

            <Typography variant="h4" fontWeight="bold" sx={{ mt: 2 }}>
              Our Vision
            </Typography>

            <Typography sx={{ mt: 2, lineHeight: 1.9 }}>
              To become the most trusted physiotherapy and rehabilitation brand
              by combining advanced technology, expert care, and personalized
              treatment plans that set new standards in recovery and wellness.
            </Typography>

            <motion.img
              src="https://media.istockphoto.com/id/1992830281/photo/ophthalmologist-teaching-medical-students-how-to-perform-an-eye-exam.jpg?s=612x612&w=0&k=20&c=cBo2hFWof31G238QqnYE05HGkH7Whe9-0nCDjnc4bDc="
              alt="Rehabilitation Vision"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "16px",
                marginTop: "24px",
              }}
            />
          </Box>
        </motion.div>
      </Grid>
    </Grid>



      </Container>
    </Box>
  );
}
