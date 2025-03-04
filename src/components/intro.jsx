import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";
import { Typography, Box, Button } from "@mui/material";
import { ReactTyped } from "react-typed";

const sections = ["Home", "About", "Experience", "Contact"];

const Intro = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x14fae4,
          backgroundColor: 0x181422, // Restored original background
        })
      );
    }
    return () => vantaEffect?.destroy();
  }, [vantaEffect]);

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
    id="home"
      ref={vantaRef}
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Floating Sticky Navbar */}
      <Box
        sx={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 3,
          zIndex: 1000,
        }}
      >
        {sections.map((section) => (
          <Button
            key={section}
            onClick={() => handleScroll(section.toLowerCase())}
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "none",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            {section}
          </Button>
        ))}
      </Box>

      {/* Intro Content */}
      <Box
        sx={{
          marginLeft: "10%",
          width: "45%", // Reduced width to prevent overlap with globe
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#fff", // Ensured it's white
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            letterSpacing: "2px",
            lineHeight: "1.2",
          }}
        >
          Hi, I'm Chirag.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#14fae4",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 500,
            letterSpacing: "1px",
            marginTop: "10px",
          }}
        >
          <ReactTyped
            strings={[
              "Welcome to my portfolio.",
              "Let's build something amazing! 🚀",
            ]}
            typeSpeed={40}
            backSpeed={20}
            startDelay={500}
            loop
          />
        </Typography>
      </Box>
    </div>
  );
};

export default Intro;
