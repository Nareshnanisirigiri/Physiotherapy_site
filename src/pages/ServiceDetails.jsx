import React, { useEffect } from "react";
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

export default function ServiceDetails() {
  const { id } = useParams();

  const service = treatments.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) return <Typography align="center">Service not found</Typography>;

  return (
    <Box sx={{ background: THEME.background, py: 10 }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="flex-start">

          {/* ========== SIDEBAR ========== */}
          <Grid item xs={12} md={3} sx={{ width: 300, position: "fixed" }}>
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
          <Grid item xs={12} md={9} sx={{ ml: 40 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

              <CardMedia
                component="img"
                height="400"
                image={service.img}
                alt={service.title}
                sx={{ borderRadius: 4, mb: 4 }}
              />

              {/* OVERVIEW */}
              <Box>
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
              <Box mt={6}>
                <Typography variant="h5" fontWeight={700} mb={2}>
                  Common Symptoms
                </Typography>
                {service.symptoms?.map((s, i) => (
                  <Chip key={i} label={s} sx={{ mr: 1, mb: 1 }} />
                ))}
              </Box>

              {/* BENEFITS */}
              <Box mt={6}>
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
              <Box mt={6}>
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
