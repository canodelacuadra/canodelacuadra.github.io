import { useEffect } from 'react';
import TagCloud from "TagCloud";
import retrato from "../assets/canodelacuadra.jpeg"
import './Hero.css';

const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
    "MongoDB", "MySQL", "Git", "GitHub", "WordPress", "API REST", "CLI"
];

export default function Hero() {
    const handleScroll = () => {
        document.getElementById('skill-map').scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        const container = ".tagcloud-container";
        TagCloud(container, skills, {
            radius: 500,
            maxSpeed: "fast",
            minSize: 12,
            maxSize: 48,
            initSpeed: "normal",
            direction: 135,
            keep: true
        });
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-content">
                <figure>
                    <img
                        width="150"
                        height="150"
                        src={retrato} />
                </figure>

                <h1>@canodelacuadra</h1>
                <p>Bienvenido a mi Porfolio</p>
                <button onClick={handleScroll}>Descubre mi   Skills Map</button>
            </div>
            <div className="tagcloud-container"></div>
        </section>
    );
}
