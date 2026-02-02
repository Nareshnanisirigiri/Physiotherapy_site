
import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                overflow: 'hidden',
                pointerEvents: 'none', // Allow clicks to pass through after animation
            }}
        >
            {/* Background Curtain */}
            <Box
                component={motion.div}
                initial={{ height: '100vh' }}
                animate={{ height: 0 }}
                transition={{ duration: 0.8, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    background: '#0B5C7A', // Deep Teal
                    zIndex: 1,
                }}
            />

            {/* Logo Animation Container */}
            <Box
                component={motion.div}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
                sx={{
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                    >
                        <Box sx={{ width: 40, height: 40, background: '#6FAF3A', borderRadius: '10px 4px 10px 4px' }} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Typography variant="h4" sx={{ fontWeight: 800, color: '#6FAF3A' }}>
                            Sri Sai Priya Physiotherapy
                        </Typography>
                    </motion.div>
                </Box>

                {/* Progress Line */}
                <Box sx={{ width: 200, height: 2, background: 'rgba(255,255,255,0.2)', borderRadius: 2, overflow: 'hidden' }}>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        style={{ height: '100%', background: '#6FAF3A' }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Preloader;
