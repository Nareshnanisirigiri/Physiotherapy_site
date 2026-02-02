import { Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  return (
    <Box
      component={motion.div}
      animate={{
        scale: [1, 1.1, 1],
        boxShadow: [
          "0 0 0px rgba(37,211,102,0.6)",
          "0 0 20px rgba(37,211,102,0.9)",
          "0 0 0px rgba(37,211,102,0.6)",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      sx={{
        position: "fixed",
        right: 20,
        bottom: 40,
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000,
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.2 }}
      onClick={() =>
        window.open("https://wa.me/91 8147096111", "_blank")
      }
    >
      <WhatsAppIcon sx={{ color: "white", fontSize: 35 }} />
    </Box>
  );
}
