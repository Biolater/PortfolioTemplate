import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Murad Yusubov</span> from{" "}
            <span className="purple">Baku, Azerbaijan.</span>
            <br />
            I'm a self-taught web developer with a strong passion for creating
            seamless and innovative user experiences.
            <br />
            Currently pursuing a degree in Computer Science at 244 Number
            School, Baku.
            <br />
            <br />
            Let me tell you a bit more about myself:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Over 60 web projects designed and implemented
              using HTML, CSS, JavaScript, jQuery, React, and Firebase.
            </li>
            <li className="about-activity">
              <ImPointRight /> Demonstrated versatility in handling projects
              ranging from personal websites to dynamic web applications.
            </li>
            <li className="about-activity">
              <ImPointRight /> Successfully addressed various challenges,
              showcasing adaptability and creative problem-solving skills.
            </li>
            <li className="about-activity">
              <ImPointRight /> Kept up-to-date with the latest technologies,
              integrating them into projects to enhance functionality and user
              experience.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about creating meaningful web experiences!"
          </p>
          <footer className="blockquote-footer">Murad Yusubov</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
