
import React from 'react';
import { Box, Container, Typography, Avatar, Rating, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Athlete",
        content: "The sports rehab program was incredible. I'm back on the track faster than I ever imagined possible. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        content: "Years of back pain from sitting at a desk gone in 4 weeks. The chiropractic adjustments changed my life.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5
    },
    {
        name: "Emily Davis",
        role: "Teacher",
        content: "Dr. Anup was so patient and knowledgeable. The clinic atmosphere is very calming and professional.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5
    },
    {
        name: "Robert Wilson",
        role: "Retired",
        content: "I can finally walk without pain after my knee surgery. The post-op care here is world-class.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5
    },
    {
        name: "Anita Patel",
        role: "Yoga Instructor",
        content: "Excellent service! The holistic approach they take really addresses the root cause of the problem.",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
        rating: 5
    }
];

const TestimonialCard = ({ testimonial }) => (
    <Paper
        elevation={0}
        sx={{
            p: 4,
            minWidth: 350,
            mx: 2,
            borderRadius: 4,
            background: '#fff',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            position: 'relative',
            overflow: 'visible'
        }}
    >
        <FormatQuoteIcon sx={{ position: 'absolute', top: 20, right: 20, fontSize: 40, color: '#EAF7FF' }} />
        <Rating value={testimonial.rating} readOnly sx={{ mb: 2, color: '#FFB84C' }} />
        <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', mb: 3, color: 'text.secondary', minHeight: 72 }}>
            "{testimonial.content}"
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar src={testimonial.avatar} sx={{ width: 50, height: 50 }} />
            <Box>
                <Typography variant="subtitle1" fontWeight={700}>
                    {testimonial.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {testimonial.role}
                </Typography>
            </Box>
        </Box>
    </Paper>
);

const Testimonials = () => {
    return (
        <Box sx={{ py: 15, background: '#F4F9F8', overflow: 'hidden' }}>
            <Container maxWidth="md" sx={{ textAlign: 'center', mb: 8 }}>
                <Typography
                    variant="h6"
                    color="primary"
                    fontWeight={700}
                    gutterBottom
                    sx={{ letterSpacing: 1.5, textTransform: 'uppercase' }}
                >
                    Testimonials
                </Typography>
                <Typography variant="h2" fontWeight={800} gutterBottom>
                    What Our Patients Say
                </Typography>
            </Container>

            <Box sx={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{ display: 'flex', width: 'fit-content' }}
                >
                    {/* Duplicate list for infinite scroll effect */}
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </motion.div>
            </Box>
        </Box>
    );
};

export default Testimonials;
