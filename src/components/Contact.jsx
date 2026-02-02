import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";

const fieldAnim = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const shakeFade = {
  error: {
    opacity: [1, 0.7, 1],
    x: [-10, 10, -10, 10, 0],
    transition: { duration: 0.5 },
  },
};

const floatAnim = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [errorAnim, setErrorAnim] = useState(false);

  const validate = () => {
    let temp = {};
    if (!form.name) temp.name = "Name is required";
    if (!form.email) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) temp.email = "Enter valid email";
    if (!form.message) temp.message = "Message is required";

    setErrors(temp);

    if (Object.keys(temp).length > 0) {
      setErrorAnim(true);
      setTimeout(() => setErrorAnim(false), 500);
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 10,
        background: "linear-gradient(135deg,#e0f7fa,#ffffff)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={6}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            background: "rgba(255,255,255,0.9)",
          }}
        >
          <Grid container>
            {/* LEFT GIF */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                bgcolor: "#e0f2f1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
              }}
            >
              <motion.img
                variants={floatAnim}
                animate="animate"
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWI3MWc4YnNla3ltczhpYzZtb2VwY3JkMXZtMTJiMHp2MjRhZzBxaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MEjG5NXKKS68LvGIP2/giphy.gif"
                alt="Contact GIF"
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  borderRadius: "16px",
                }}
              />
            </Grid>

            {/* FORM */}
            <Grid item xs={12} md={7} sx={{ p: 4 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Contact Us
              </Typography>

              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Fill out the form and our team will reach out to you shortly.
              </Typography>

              {success && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Alert severity="success" sx={{ mb: 2 }}>
                    Message sent successfully!
                  </Alert>
                </motion.div>
              )}

              <motion.div
                animate={errorAnim ? "error" : "visible"}
                variants={shakeFade}
              >
                <Box component="form" onSubmit={handleSubmit}>

                  {/* Name */}
                  <motion.div custom={0} initial="hidden" animate="visible" variants={fieldAnim}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                      <PersonIcon color="primary" />
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                      />
                    </Box>
                  </motion.div>

                  {/* Email */}
                  <motion.div custom={1} initial="hidden" animate="visible" variants={fieldAnim}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                      <EmailIcon color="primary" />
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                      />
                    </Box>
                  </motion.div>

                  {/* Message WITH ICON */}
                  <motion.div custom={2} initial="hidden" animate="visible" variants={fieldAnim}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 2 }}>
                      <MessageIcon color="primary" sx={{ mt: 1 }} />
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                      />
                    </Box>
                  </motion.div>

                  {/* Button */}
                  <motion.div
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fieldAnim}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.5,
                        borderRadius: "30px",
                        background: "linear-gradient(135deg,#009688,#26c6da)",
                        boxShadow: "0 10px 25px rgba(0,150,136,0.4)",
                        fontSize: "1.1rem",
                      }}
                    >
                      Send Message
                    </Button>
                  </motion.div>

                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
