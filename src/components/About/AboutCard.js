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
            <ImPointRight /> Built robust and user-friendly interfaces using HTML, CSS, JavaScript, React and Next.js
            </li>
            <li className="about-activity">
            <ImPointRight /> Collaborated with backend teams to seamlessly integrate frontend components with RESTful APIs.
            </li>
            <li className="about-activity">
            <ImPointRight /> Applied Agile methodologies to ensure timely delivery of web development projects.
            </li>
            <li className="about-activity">
            <ImPointRight /> Prioritized code optimization and best practices for user experience and performance.
            </li>
            <li className="about-activity">
            <ImPointRight /> Demonstrated a strong commitment to continuous learning and expanding my web development expertise.
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
