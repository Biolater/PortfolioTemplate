import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smo from "../../Assets/smo.png"
import companyeasier from "../../Assets/companyeasier.png"
import spaceone from "../../Assets/spaceone.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smo}
              isBlog={false}
              title="Smorganizer"
              description="SMorgnizer is a dynamic social media organizer crafted to enhance user engagement and streamline social media interactions. Developed using HTML, CSS, and React, this project showcases a comprehensive set of features powered by Local Storage. It provides a user-friendly experience for managing accounts and ensuring quick access to social media links."
              ghLink="https://github.com/Biolater/social-media-organizer"
              demoLink="https://smorganizer.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={companyeasier}
              isBlog={false}
              title="Company Easier"
              description="CompanyEasier is a dynamic web application developed with HTML5, CSS3, JavaScript, React, Tailwind, Firebase, and APIs. It offers personalized experiences through user authentication, features dynamic UI with Framer Motion, and seamless navigation with React Router DOM. The integration of GNews API provides real-time news updates."
              ghLink="https://github.com/Biolater/companyEasierFireBase"
              demoLink="https://companyeasier.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaceone}
              isBlog={false}
              title="SpaceOne"
              description="
              SpaceOne is a web application that I developed because of my Space love. It's a dynamic project crafted with HTML, CSS, JavaScript, React, Tailwind CSS, Firebase, TypeScript, Git, and GitHub. This project highlights my skills and versatility, demonstrating my ability to address various challenges. Stay tuned for the completion of this project, where I aim to deliver an innovative and user-friendly experience."
              ghLink="https://github.com/biolater/space-one"
              demoLink="https://space-one-15043.web.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
