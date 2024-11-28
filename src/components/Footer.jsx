import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%", // Full width
                backgroundColor: "#f0f0f0", // Light background color
                padding: "16px 0", // Add some padding for spacing
                textAlign: "center", // Center the text
            }}
        >
            <Typography variant="body2" align="center" className="text-white">
                &copy; {new Date().getFullYear()} Strfix By Rupendra Jangid. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
