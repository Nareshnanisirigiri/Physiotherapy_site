import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../images/logo-2.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/AboutPage" },
  { label: "Treatment", path: "/Treatment" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const physioList = [
  { title: "Neuro Rehabilitation in Hyderabad", slug: "neuro-rehabilitation-in-hyderabad" },
  { title: "Stroke Rehabilitation Center in Hyderabad", slug: "stroke-rehabilitation-center-in-hyderabad" },
  { title: "Head Injury Rehabilitation in Hyderabad", slug: "head-injury-rehabilitation-in-hyderabad" },
  { title: "Physiotherapy in Hyderabad", slug: "physiotherapy-in-hyderabad" },
  { title: "Brachial Plexus Rehabilitation", slug: "brachial-plexus-rehabilitation" },
  { title: "Bladder and Bowel Rehabilitation", slug: "bladder-and-bowel-rehabilitation" },
  { title: "Vestibular Rehabilitation", slug: "vestibular-rehabilitation" },
  { title: "Orthopedic Rehabilitation", slug: "orthopedic-rehabilitation" },
  { title: "Sports Rehabilitation", slug: "sports-rehabilitation" },
  { title: "Post COVID Rehabilitation", slug: "post-covid-rehabilitation" },
  { title: "Gynecology Rehabilitation", slug: "gynecology-rehabilitation" },
  { title: "Cardio Pulmonary Rehabilitation", slug: "cardio-pulmonary-rehabilitation" },
  { title: "COMA Care", slug: "coma-care" },
  { title: "Pain Management", slug: "pain-management" },
  { title: "Bedsore Management", slug: "bedsore-management" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  return (
    <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          minHeight: 90,
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255,255,255,0.7)",
        }}
      >
        <Toolbar sx={{ minHeight: 90, display: "flex", justifyContent: "space-between", px: 3 }}>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, lg: 1.5 } }}>
              <Box component="img" src={Logo} alt="logo" sx={{ height: { xs: 45, sm: 55, md: 65, lg: 70 } }} />
              <Typography
                fontWeight={800}
                sx={{
                  fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
                  whiteSpace: "nowrap",
                  display: { xs: "none", sm: "block" }
                }}
              >
                Sri Sai Priya Physiotherapy
              </Typography>
            </Box>
          </motion.div>

          {/* Nav Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { md: 1.5, lg: 3 } }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={NavLink}
                to={item.path}
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: { md: "0.85rem", lg: "1rem" },
                  minWidth: "auto",
                  px: 1,
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Physiotherapy Dropdown */}
            <Box>
              <Button
                onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                sx={{
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                  textTransform: "none",
                  fontSize: { md: "0.85rem", lg: "1rem" },
                  minWidth: "auto",
                  px: 1,
                }}
              >
                PHYSIOTHERAPY ▾
              </Button>

              <AnimatePresence>
                {open && (
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{ onMouseLeave: () => setAnchorEl(null) }}
                    PaperProps={{
                      component: motion.div,
                      initial: { opacity: 0, y: -10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      transition: { duration: 0.3 },
                      sx: { mt: 1, borderRadius: 3 },
                    }}
                  >
                    {physioList.map((item, i) => (
                      <MenuItem
                        key={i}
                        onClick={() => {
                          navigate(`/physiotherapy/${item.slug}`);
                          setAnchorEl(null);
                        }}
                        sx={{
                          fontSize: 14,
                          "&:hover": {
                            background: `linear-gradient(90deg,
                              ${theme.palette.primary.main},
                              ${theme.palette.secondary.main})`,
                            color: "#fff",
                          },
                        }}
                      >
                        {item.title}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </AnimatePresence>
            </Box>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                component={NavLink}
                to="/contact"
                sx={{
                  borderRadius: "30px",
                  px: { md: 2, lg: 3.5 },
                  py: 1,
                  fontWeight: 800,
                  fontSize: { md: "0.8rem", lg: "0.9rem" },
                  background: `linear-gradient(45deg,
                    ${theme.palette.primary.main},
                    ${theme.palette.secondary.main})`,
                  color: "#fff",
                  whiteSpace: "nowrap",
                  "&:hover": {
                    background: `linear-gradient(45deg,
                      ${theme.palette.secondary.main},
                      ${theme.palette.primary.main})`,
                  }
                }}
              >
                BOOK APPOINTMENT
              </Button>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
