import { Typography, Grid, Card, CardContent, Box } from "@mui/material";
import { motion } from "framer-motion";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const statsData = [
  {
    icon: <LocalHospitalIcon fontSize="large" color="primary" />,
    value: "15+",
    label: "Physio Clinics",
  },
  {
    icon: <PeopleIcon fontSize="large" color="primary" />,
    value: "75+",
    label: "Certified Doctors",
  },
  {
    icon: <EmojiEventsIcon fontSize="large" color="primary" />,
    value: "10,000+",
    label: "Happy Patients",
  },
];

export default function Stats() {
  return (
    <Box sx={{ bgcolor: "#f5f7fa", py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        {statsData.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <motion.div
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  py: 3,
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <CardContent>
                  {item.icon}
                  <Typography variant="h3" fontWeight="bold" sx={{ mt: 1 }}>
                    {item.value}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {item.label}
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
