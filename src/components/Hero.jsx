import { useEffect } from 'react';
import TagCloud from "TagCloud";
import Avatar from './Avatar';
import './Hero.css';

const skills = [
    "HTML", "CSS", "Bootstrap", "JavaScript", "React", "PHP", "Node.js", "Express",
    "MongoDB", "MySQL", "Git", "GitHub", "WordPress", "API REST", "CLI", "React", "Vite"
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




                <h1>
                    <Avatar />
                </h1>
                <p>Bienvenido a mi Porfolio</p>
                <button onClick={handleScroll}>
                    &#9803; Echa un vistazo a  mi   SkillsMap
                </button>
            </div>
            <div className="tagcloud-container"></div>
        </section>
    );
}
