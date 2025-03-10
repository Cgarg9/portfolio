import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardActionArea } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const projects = [
  {
    title: "PDF Genie",
    description:
      "A GPT-like application which allows you to talk to your PDFs and save conversations for future reference. It helps users quickly extract relevant information from lengthy documents. The chatbot-style interface ensures an interactive and efficient experience.",
    image: "pdf_image.jpg",
    tech: "Flask, React, Gemini API, Qdrant, MongoDB",
  },
  {
    title: "PEC Portal",
    description:
      "Developed a web portal where college students can connect, track attendance, leave feedback for subjects. The portal also provides real-time notifications and a user-friendly dashboard for better academic management.",
    image: "pec_portal.jpeg",
    tech: "React, WebSockets, Node.js, Express, MongoDB",
  },
  {
    title: "Skin Cancer Detection",
    description:
      "Created a machine learning model for early-stage skin cancer detection using ensemble learning and CNN. The model enhances diagnostic accuracy, assisting dermatologists in early detection and reducing false positives.",
    image: "cnn.jpeg",
    tech: "Python, Keras, CNN, Tensorflow",
  },
  {
    title: "Interview Prepper",
    description:
      "Built a chatbot that asks questions based on your input and provides feedback to help you prepare for interviews. The system adapts to different difficulty levels, providing personalized question sets and constructive feedback.",
    image: "interview_prepper.jpeg",
    tech: "Python, LangChain, OpenAI API, FAISS, Streamlit",
  },
];

const FlipCard = ({ title, description, image, tech }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Card
      sx={{
        width: 320,
        height: 400,
        perspective: "1200px",
        "&:hover .flip-card-inner": { transform: "rotateY(180deg)" },
      }}
    >
      <CardActionArea
        onClick={() => setFlipped(!flipped)}
        sx={{ height: "100%" }}
      >
        <Box
          className="flip-card-inner"
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transition: "transform 0.6s ease-in-out",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Side */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              backgroundColor: "#252036",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{ width: "100%", height: "60%", objectFit: "cover" }}
            />
            <Box
              sx={{
                width: "100%",
                height: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#252036",
                padding: "10px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {title}
              </Typography>
            </Box>
          </Box>
          {/* Back Side */}
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              backgroundColor: "#C1F0DB",
              color: "black",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "left",
              boxSizing: "border-box",
              overflow: "hidden",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
                lineHeight: "1.4",
                height: "70%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                wordWrap: "break-word",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              {description}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.85rem",
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                padding: "10px",
                borderRadius: "8px",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                wordWrap: "break-word",
                boxSizing: "border-box",
              }}
            >
              Tech Used: {tech}
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        backgroundColor: "#181422",
        color: "#f4f4f4",
        padding: "5%",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          fontSize: "3.5rem",
          background:
            "linear-gradient(90deg, rgb(94, 255, 239), rgb(45, 199, 237))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        Experience
      </Typography>
      <Box sx={{ marginTop: "50px" }}>
        <Box
          sx={{
            marginBottom: "40px",
            textAlign: "left",
            maxWidth: "1100px",
            marginX: "auto",
            paddingX: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "500", color: "#d1d1d1", lineHeight: "1.8" }}
          >
            With a strong background in full-stack development, machine
            learning, and AI, I have built a variety of projects that combine
            innovative algorithms with real-world applications. My expertise
            spans deep learning, generative AI, and scalable web architectures,
            enabling me to create intelligent solutions that enhance user
            experiences.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "500",
              color: "#d1d1d1",
              lineHeight: "1.8",
              marginTop: "15px",
            }}
          >
            During my internships at Cisco, I worked extensively on networking,
            security, and backend technologies, gaining exposure to
            enterprise-grade systems. These experiences have strengthened my
            problem-solving skills and ability to work on large-scale,
            high-performance applications.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "500",
              color: "#d1d1d1",
              lineHeight: "1.8",
              marginTop: "15px",
            }}
          >
            Below are some of the projects that highlight my technical journey,
            showcasing my work in AI-driven applications, computer vision, and
            full-stack development.
          </Typography>
        </Box>

        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Projects
        </Typography>
        <br />
        <br />
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index}>
              <FlipCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Timeline Component */}
      {/* <Box textAlign="center" sx={{ marginTop: "50px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
        Professional Experience
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>May 2024 - July 2024: Technical Intern at Cisco</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Jan 2025 - June 2025: Technical Intern at Cisco</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box> */}
    </Box>
  );
};

export default Experience;
