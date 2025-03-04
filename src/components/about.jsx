import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        padding: "5%",
        backgroundColor: "#060f1a", // Darker shade for contrast
        color: "#f4f4f4",
      }}
    >
      {/* Left - Profile Picture */}
      <Box
        component="img"
        src="aboutPic.jpg" // Replace with your actual image
        alt="Chirag Garg"
        sx={{
          width: 300,
          height: 400,
          borderRadius: "10px",
          objectFit: "cover",
          border: "3px solid #fff", // Thin white border
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)", // Slightly stronger shadow for depth
          marginRight: "12%",
        }}
      />

      {/* Right - About Me Text */}
      <Box sx={{ maxWidth: "50%" }}>
        {/* Aesthetic Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "3rem", // Increased size for emphasis
            background: "linear-gradient(90deg, #14fae4, #0077ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{ fontSize: "1.2rem", marginTop: 2 }}>
          Hey there! I'm <b>Chirag Garg</b>, a <b>final-year Computer Science student</b> at 
          <b> Punjab Engineering College, Chandigarh</b>. Born and raised in the vibrant city of Chandigarh, 
          I developed a keen interest in <b>Artificial Intelligence and Machine Learning</b>, 
          which has been the driving force behind my journey.
          <br />
          <br />
          Currently, I’m working as a <b>Spring Intern at Cisco</b>, diving deep into cutting-edge technologies. 
          I also serve as the <b>AI Lead for ACM-CSS PEC Chapter</b>, where I contribute to fostering a 
          strong AI community. Over the years, I’ve actively participated in multiple <b>hackathons and 
          open-source programs</b>, always seeking opportunities to innovate and collaborate.
          <br />
          <br />
          Beyond coding, I’m an avid <b>binge-watcher</b> who loves <b>anime</b>, fast drives, and 
          engaging in <b>sports</b>. Whether it's building AI-driven solutions or exploring new tech stacks, 
          I’m always up for a challenge!
          <br />
          <br />
          Let’s connect and create something incredible! 🚀
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
