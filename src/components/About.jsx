// src/components/About.jsx
import { Container, Typography, Grid, Box, Divider } from "@mui/material";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Who We Are",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Our Clinics & Treatment",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
  },
];

export default function About() {
  return (
    <Box sx={{ bgcolor: "#f5f7fa", py: 8 }}>
      <Container maxWidth="lg">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" textAlign="center" fontWeight="bold" gutterBottom>
            About Sri Sai Priya Physiotherapy
          </Typography>

          <Typography
            variant="h6"
            textAlign="justify"
            color="text.secondary"
            sx={{fontSize: "1.1rem", lineHeight: 1.8 , mb: 6, marginLeft:80 , marginTop:15}}
          >
           At Sri Sai Priya Physiotherapy, we are committed to bring access to quality physio care through ultra-modern clinics and high-skilled practitioners to all. Our world-class therapists keep a strong focus on patient needs and deliver the highest level of care. 

Sri Sai Priya Physiotherapy, a unified brand of two groups, Cadabams group and Brahmbhatt, is an initiative of Cadabams Brahmbhatt healthcare LLP. Sri Sai Priya Physiotherapy is a brand that covers aspects of physical health and rehabilitation services.


          </Typography>
        </motion.div>

        {/* SECTION 1 */}
        <Grid container spacing={5} alignItems="center" sx={{ mb: 8 }}>
          {/* IMAGE */}
          <Grid item xs={12} md={6}>
            <motion.img
              src={sections[0].image}
              alt="Who We Are"
              style={{
                width: "600px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "16px",
                marginTop:-600
              }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>

          {/* CONTENT */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                <Divider sx={{color:"black", }}></Divider>
              <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ml:60, mt:10}}>
                Who We Are
              </Typography>

              <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 , marginLeft:80, marginTop:20}}>
                Sri Sai Priya Physiotherapy is a leading physiotherapy and rehabilitation centre committed to restoring
                movement and enhancing quality of life. We deliver evidence-based treatments supported
                by advanced technology and modern rehabilitation techniques.
              
                Our focus is on personalised care, accurate diagnosis, and effective therapy to help
                patients recover safely and regain confidence in movement.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* SECTION 2 */}
        <Grid
          container
          spacing={5}
          alignItems="center"
          sx={{ mb: 8 }}
          direction="row-reverse"
        >
          {/* IMAGE */}
          <Grid item xs={12} md={6}>
            <motion.img
              src={sections[1].image}
              alt="Our Clinics & Treatment"
              style={{
                width: "600px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "16px",
                marginRight:"800px",
                marginTop:-400,
              }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </Grid>

          {/* CONTENT */}
          <Grid item xs={12} md={6} sx={{mb:-10}}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Our Clinics & Treatment
              </Typography>

              <Typography sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                 The primary aim of our multi-dimensional approach is to provide quality pain management service. Understanding the problem from a root level and finding a way to provide relief is our overall focus. The recovery we aim at is all-inclusive that impact the patient’s overall life. Bringing them back to the normal track is our challenge.
                <br /><br />
               Patient-oriented: We value the patients who rely on us to attain a better quality of life. We provide the best program to them, depending on the requirements and necessities. We diligently offer our assistance, starting from the appointment to consultation till program recovery. Regular check-ups with Ergonomists or Dieticians and other health allies are convenient and hassle-free.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
