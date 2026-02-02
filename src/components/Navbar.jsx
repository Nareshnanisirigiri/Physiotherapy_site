


// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Menu,
//   MenuItem,
//   useTheme,
//   Divider,
// } from "@mui/material";
// import { NavLink, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Logo from "../images/logo-2.png";

// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/AboutPage" },
//   { label: "Treatment", path: "/Treatment" },
//   { label: "Services", path: "/services" },
//   { label: "Contact", path: "/contact" },
// ];

// const physioList = [
//   "Neuro Rehabilitation in Hyderabad",
//   "Stroke Rehabilitation Center in Hyderabad",
//   "Head Injury Rehabilitation in Hyderabad",
//   "Physiotherapy in Hyderabad",
//   "Brachial Plexus Rehabilitation",
//   "Bladder and Bowel Rehabilitation",
//   "Vestibular Rehabilitation",
//   "Orthopedic Rehabilitation",
//   "Sports Rehabilitation",
//   "Post COVID Rehabilitation",
//   "Gynecology Rehabilitation",
//   "Cardio Pulmonary Rehabilitation",
//   "COMA Care",
//   "Pain Management",
//   "Bedsore Management",
// ];

// export default function Navbar() {
//   const location = useLocation();
//   const theme = useTheme();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const open = Boolean(anchorEl);

//   const handleOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <motion.div
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <AppBar
//         position="fixed"
//         elevation={0}
//         sx={{
//           minHeight: 90,
//           backdropFilter: "blur(12px)",
//           backgroundColor: "rgba(255,255,255,0.7)",
//         }}
//       >
//         <Toolbar
//           sx={{
//             minHeight: 90,
//             display: "flex",
//             justifyContent: "space-between",
//             px: 3,
//           }}
//         >
//           {/* Logo */}
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <Box component="img" src={Logo} alt="logo" sx={{ height: 70 }} />
//               <Typography fontWeight={800}>
//                 Sri Sai Priya Physiotherapy
//               </Typography>
//             </Box>
//           </motion.div>

//           {/* Nav Links */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
//             {navItems.map((item, index) => {
//               const isActive = location.pathname === item.path;

//               return (
//                 <Box key={index} sx={{ position: "relative" }}>
//                   <motion.div whileHover={{ scale: 1.1 }}>
//                     <Button
//                       component={NavLink}
//                       to={item.path}
//                       sx={{
//                         color: theme.palette.text.primary,
//                         fontWeight: 700,
//                         textTransform: "none",
//                       }}
//                     >
//                       {item.label}
//                     </Button>
//                   </motion.div>

//                   {isActive && (
//                     <motion.div
//                       layoutId="underline"
//                       style={{
//                         height: "3px",
//                         background: `linear-gradient(90deg, 
//                           ${theme.palette.primary.main}, 
//                           ${theme.palette.secondary.main})`,
//                         borderRadius: "4px",
//                         position: "absolute",
//                         left: 0,
//                         right: 0,
//                         bottom: -5,
//                       }}
//                     />
//                   )}
//                 </Box>
//               );
//             })}

//             {/* Physiotherapy Dropdown */}
//             <Box>
//               <Button
//                 onMouseEnter={handleOpen}
//                 sx={{
//                   fontWeight: 700,
//                   color: theme.palette.text.primary,
//                   textTransform: "none",
//                 }}
//               >
//                 Physiotherapy ▾
//               </Button>

//               <AnimatePresence>
//                 {open && (
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     MenuListProps={{
//                       onMouseLeave: handleClose,
//                     }}
//                     PaperProps={{
//                       component: motion.div,
//                       initial: { opacity: 0, y: -10 },
//                       animate: { opacity: 1, y: 0 },
//                       exit: { opacity: 0, y: -10 },
//                       transition: { duration: 0.3 },
//                       sx: {
//                         mt: 1,
//                         borderRadius: 3,
//                         background: theme.palette.background.paper,
//                       },
//                     }}
//                   >
//                     {physioList.map((item, i) => (
//                       <MenuItem
//                         key={i}
//                         onClick={handleClose}
//                         sx={{
//                           fontSize: 14,
//                           "&:hover": {
//                             background: `linear-gradient(90deg,
//                               ${theme.palette.primary.main},
//                               ${theme.palette.secondary.main})`,
//                             color: "#fff",
//                           },
//                         }}
//                       >
//                         {item}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 )}
//               </AnimatePresence>
//             </Box>

//             {/* CTA Button */}
//             <motion.div
//               whileHover={{ scale: 1.12 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Button
//                 component={NavLink}
//                 to="/contact"
//                 sx={{
//                   borderRadius: "30px",
//                   px: 3.5,
//                   py: 1.2,
//                   fontWeight: 800,
//                   background: `linear-gradient(45deg,
//                     ${theme.palette.primary.main},
//                     ${theme.palette.secondary.main})`,
//                   color: "#fff",
//                 }}
//               >
//                 Book Appointment
//               </Button>
//             </motion.div>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </motion.div>
//   );
// }





// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   Menu,
//   MenuItem,
//   useTheme,
// } from "@mui/material";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Logo from "../images/logo-2.png";

// const navItems = [
//   { label: "Home", path: "/" },
//   { label: "About", path: "/AboutPage" },
//   { label: "Treatment", path: "/Treatment" },
//   { label: "Services", path: "/services" },
//   { label: "Contact", path: "/contact" },
// ];

// const physioList = [
//   "Neuro Rehabilitation in Hyderabad",
//   "Stroke Rehabilitation Center in Hyderabad",
//   "Head Injury Rehabilitation in Hyderabad",
//   "Physiotherapy in Hyderabad",
//   "Brachial Plexus Rehabilitation",
//   "Bladder and Bowel Rehabilitation",
//   "Vestibular Rehabilitation",
//   "Orthopedic Rehabilitation",
//   "Sports Rehabilitation",
//   "Post COVID Rehabilitation",
//   "Gynecology Rehabilitation",
//   "Cardio Pulmonary Rehabilitation",
//   "COMA Care",
//   "Pain Management",
//   "Bedsore Management",
// ];

// export default function Navbar() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const open = Boolean(anchorEl);

//   const handleOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleClose = () => setAnchorEl(null);

//   const handleItemClick = (item) => {
//     const slug = item.replace(/\s+/g, "-").toLowerCase();
//     navigate(`/physiotherapy/${slug}`);
//     handleClose();
//   };

//   return (
//     <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
//       <AppBar
//         position="fixed"
//         elevation={0}
//         sx={{
//           minHeight: 90,
//           backdropFilter: "blur(12px)",
//           backgroundColor: "rgba(255,255,255,0.7)",
//         }}
//       >
//         <Toolbar
//           sx={{
//             minHeight: 90,
//             display: "flex",
//             justifyContent: "space-between",
//             px: 3,
//           }}
//         >
//           {/* Logo */}
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               <Box component="img" src={Logo} alt="logo" sx={{ height: 70 }} />
//               <Typography fontWeight={800}>
//                 Sri Sai Priya Physiotherapy
//               </Typography>
//             </Box>
//           </motion.div>

//           {/* Nav Links */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
//             {navItems.map((item, index) => (
//               <Button
//                 key={index}
//                 component={NavLink}
//                 to={item.path}
//                 sx={{
//                   color: theme.palette.text.primary,
//                   fontWeight: 700,
//                   textTransform: "none",
//                 }}
//               >
//                 {item.label}
//               </Button>
//             ))}

//             {/* Physiotherapy Dropdown */}
//             <Box>
//               <Button
//                 onMouseEnter={handleOpen}
//                 sx={{
//                   fontWeight: 700,
//                   color: theme.palette.text.primary,
//                   textTransform: "none",
//                 }}
//               >
//                 Physiotherapy ▾
//               </Button>

//               <AnimatePresence>
//                 {open && (
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     MenuListProps={{ onMouseLeave: handleClose }}
//                     PaperProps={{
//                       component: motion.div,
//                       initial: { opacity: 0, y: -10 },
//                       animate: { opacity: 1, y: 0 },
//                       exit: { opacity: 0, y: -10 },
//                       transition: { duration: 0.3 },
//                       sx: { mt: 1, borderRadius: 3 },
//                     }}
//                   >
//                     {physioList.map((item, i) => (
//                       <MenuItem
//                         key={i}
//                         onClick={() => handleItemClick(item)}
//                         sx={{
//                           fontSize: 14,
//                           "&:hover": {
//                             background: `linear-gradient(90deg,
//                               ${theme.palette.primary.main},
//                               ${theme.palette.secondary.main})`,
//                             color: "#fff",
//                           },
//                         }}
//                       >
//                         {item}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 )}
//               </AnimatePresence>
//             </Box>

//             {/* CTA */}
//             <motion.div whileHover={{ scale: 1.1 }}>
//               <Button
//                 component={NavLink}
//                 to="/contact"
//                 sx={{
//                   borderRadius: "30px",
//                   px: 3.5,
//                   py: 1.2,
//                   fontWeight: 800,
//                   background: `linear-gradient(45deg,
//                     ${theme.palette.primary.main},
//                     ${theme.palette.secondary.main})`,
//                   color: "#fff",
//                 }}
//               >
//                 Book Appointment
//               </Button>
//             </motion.div>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </motion.div>
//   );
// }







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
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box component="img" src={Logo} alt="logo" sx={{ height: 70 }} />
              <Typography fontWeight={800}>Sri Sai Priya Physiotherapy</Typography>
            </Box>
          </motion.div>

          {/* Nav Links */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={NavLink}
                to={item.path}
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* Physiotherapy Dropdown */}
            <Box>
              <Button
                onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                sx={{ fontWeight: 700, color: theme.palette.text.primary }}
              >
                Physiotherapy ▾
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
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button
                component={NavLink}
                to="/contact"
                sx={{
                  borderRadius: "30px",
                  px: 3.5,
                  py: 1.2,
                  fontWeight: 800,
                  background: `linear-gradient(45deg,
                    ${theme.palette.primary.main},
                    ${theme.palette.secondary.main})`,
                  color: "#fff",
                }}
              >
                Book Appointment
              </Button>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
