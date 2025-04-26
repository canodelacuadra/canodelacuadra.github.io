import React, { useState } from "react";
import ForceGraph2D from 'react-force-graph-2d';
import { FaGithub, FaCloud } from 'react-icons/fa';
import "./SkillMap.css"; // Importamos la hoja de estilos

const data = {
    nodes: [
        { id: "Jose", group: 0, x: 0, y: 0, fx: 0, fy: 0 },
        { id: "HTML", group: 1, x: -80, y: -60, fx: -80, fy: -60 },
        { id: "CSS", group: 1, x: 0, y: -80, fx: 0, fy: -80 },
        { id: "Bootstrap", group: 1, x: 0, y: -160, fx: 0, fy: -160 },
        { id: "JavaScript", group: 2, x: 80, y: -60, fx: 80, fy: -60 },
        { id: "DOM", group: 2, x: 160, y: -120, fx: 160, fy: -120 },
        { id: "Node.js", group: 3, x: 120, y: 0, fx: 120, fy: 0 },
        { id: "Express", group: 3, x: 80, y: 60, fx: 80, fy: 60 },
        { id: "API REST", group: 3, x: 140, y: 80, fx: 140, fy: 80 },
        { id: "MySQL", group: 4, x: 180, y: 20, fx: 180, fy: 20 },
        { id: "MongoDB", group: 4, x: 180, y: -40, fx: 180, fy: -40 },
        { id: "Git", group: 5, x: -80, y: 60, fx: -80, fy: 60 },
        { id: "GitHub", group: 5, x: -140, y: 80, fx: -140, fy: 80 },
        { id: "CLI", group: 6, x: -140, y: 20, fx: -140, fy: 20 },
        { id: "WordPress", group: 7, x: 0, y: 80, fx: 0, fy: 80 }
    ],
    links: [
        { source: "Jose", target: "HTML" },
        { source: "Jose", target: "CSS" },
        { source: "Jose", target: "JavaScript" },
        { source: "CSS", target: "Bootstrap" },
        { source: "JavaScript", target: "Node.js" },
        { source: "JavaScript", target: "DOM" },
        { source: "Node.js", target: "Express" },
        { source: "Express", target: "API REST" },
        { source: "Express", target: "MySQL" },
        { source: "Express", target: "MongoDB" },
        { source: "Jose", target: "Git" },
        { source: "Git", target: "GitHub" },
        { source: "Git", target: "CLI" },
        { source: "Jose", target: "WordPress" }
    ]
};

const projectMap = {
    "Jose": [
        { name: "Curriculum", web: "https://canodelacuadra.github.io/curriculum" },

    ],
    "DOM": [
        { name: "Juego de pares y nones", repo: "https://github.com/canodelacuadra/paresynones", web: "https://canodelacuadra.github.io/paresynones/" }

    ],
    "Bootstrap": [
        { name: "Diapositivas con CSS y JS", repo: "https://github.com/canodelacuadra/diapositivas-css-js", web: "https://canodelacuadra.github.io/diapositivas-css-js/" }

    ],
    "Node.js": [
        { name: "API de tareas", repo: "https://github.com/candelacuadra/api-tareas", web: "https://tuproyecto.com" },
        { name: "Chat en tiempo real", repo: "https://github.com/candelacuadra/chat-realtime" }
    ],
    "WordPress": [
        { name: "CMS personalizado", web: "https://cms-personalizado.com" },
        { name: "Tienda online", web: "https://mitienda.com" }
    ],
    "MongoDB": [
        { name: "Base de datos de películas", repo: "https://github.com/candelacuadra/movies-db" }
    ],
    "HTML": [
        { name: "Landing page", web: "https://landingpage.com" }
    ],
    "GitHub": [
        { name: "Repositorios abiertos", repo: "https://github.com/candelacuadra" }
    ]
};


export default function SkillMap() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleNodeClick = node => {
        setSelectedSkill(node.id);
    };

    return (
        <div id="skill-map" className="skill-map-container">
            {/* <h1 className="skill-map-title">WebSkills de Canodelacuadra</h1> */}
            <p className="skill-map-instruction">
                Haz clic en las tecnologías para ver proyectos relacionados &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                </svg>
            </p>
            <div className="skill-map-graph">
                <ForceGraph2D
                    graphData={data}
                    d3VelocityDecay={0.3}
                    onEngineStop={() => {
                        // Detiene cualquier simulación para dejarlo estático
                        console.log("Motor parado, posiciones fijadas.");
                    }}
                    enableZoomPanInteraction={false}
                    nodeAutoColorBy="group"
                    onNodeClick={handleNodeClick}
                    nodeLabel="id"
                    nodeCanvasObject={(node, ctx, globalScale) => {
                        const label = node.id;
                        const fontSize = 14 / globalScale;
                        ctx.font = `bold ${fontSize}px Sans-Serif`;
                        ctx.fillStyle = node.color;
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, 12, 0, 2 * Math.PI, false); // bolitas más grandes
                        ctx.fill();
                        ctx.fillStyle = "#333";
                        ctx.font = "bold";
                        ctx.fillText(label, node.x + 12, node.y + 4);
                    }}
                    nodePointerAreaPaint={(node, color, ctx) => {
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, 14, 0, 2 * Math.PI, false); // mismo radio que en nodeCanvasObject
                        ctx.fill();
                    }}
                />

            </div>

            {selectedSkill && (
                <div className="skill-map-projects">
                    <h2>Proyectos con {selectedSkill}</h2>
                    <ul>
                        {projectMap[selectedSkill]?.map((proj, idx) => (
                            <li key={idx}>
                                {proj.name}
                                {" "}
                                {proj.web && (
                                    <a href={proj.web} target="_blank" rel="noopener noreferrer">
                                        <FaCloud /> Web
                                    </a>
                                )}
                                {" "}
                                {proj.repo && (
                                    <a href={proj.repo} target="_blank" rel="noopener noreferrer">
                                        <FaGithub /> Repo
                                    </a>
                                )}
                            </li>
                        )) || <li>No hay proyectos aún.</li>}
                    </ul>
                    <button onClick={() => setSelectedSkill(null)}>Cerrar</button>
                </div>
            )}
        </div>
    );
}
