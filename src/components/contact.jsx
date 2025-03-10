import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { LinkedIn, GitHub, Email, Article } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        padding: "5%",
        backgroundColor: "#060f1a",
        color: "#f4f4f4",
      }}
    >
      {/* Left - Image */}
      <Box
        component="img"
        src="contact.jpeg"
        alt="Contact Me"
        sx={{
          width: 300,
          height: 400,
          borderRadius: "10px",
          objectFit: "cover",
          border: "3px solid #fff",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)",
          marginRight: "12%",
        }}
      />

      {/* Right - Contact Info */}
      <Box sx={{ maxWidth: "50%" }}>
        {/* Adjusted Heading Position */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            background: "linear-gradient(90deg, #14fae4, #0077ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "20px", // Increased margin to move text slightly up
          }}
        >
          Let's Connect
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{ fontSize: "1.2rem", marginBottom: 3 }}
        >
          Feel free to reach out for collaborations, opportunities, or just a
          chat! I'm always open to discussing new projects, creative ideas, or
          tech insights.
        </Typography>

        {/* Contact Buttons */}
        <Box sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            startIcon={<Email />}
            href="mailto:chirag.garg9803@gmail.com"
            sx={{ backgroundColor: "#0077ff" }}
          >
            Email Me
          </Button>
          <Button
            variant="contained"
            startIcon={<LinkedIn />}
            href="https://www.linkedin.com/in/chirag-garg-531965228/"
            target="_blank"
            sx={{ backgroundColor: "#0a66c2" }}
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            startIcon={<GitHub />}
            href="https://github.com/Cgarg9"
            target="_blank"
            sx={{ backgroundColor: "#171515" }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            startIcon={
              <Box
                component="img"
                src="discord.png"
                alt="Discord"
                sx={{ width: 24, height: 24 }}
              />
            }
            href="https://discord.com/mugiwara_luffy__"
            target="_blank"
            sx={{ backgroundColor: "#5865F2" }}
          >
            Discord
          </Button>
          <Button
            variant="contained"
            startIcon={<Article />}
            href="https://medium.com/@chiraggarg09"
            target="_blank"
            sx={{ backgroundColor: "#12100E" }}
          >
            Medium
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
