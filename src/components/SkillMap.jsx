import React, { useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { FaGithub, FaCloud } from "react-icons/fa";
import "./SkillMap.css"; // Hoja de estilos

// --- Datos del mapa ---
const graphData = {
    nodes: [
        { id: "canodelacuadra", group: 0, x: 0, y: 0, fx: 0, fy: 0 },
        { id: "HTML", group: 1, x: -100, y: -80, fx: -100, fy: -80 },
        { id: "CSS", group: 2, x: 0, y: -100, fx: 0, fy: -100 },
        { id: "JavaScript", group: 3, x: 100, y: -80, fx: 100, fy: -80 },
        { id: "Bootstrap", group: 2, x: -20, y: -120, fx: -20, fy: -120 },
        { id: "DOM", group: 3, x: 150, y: -100, fx: 150, fy: -100 },
        { id: "React", group: 4, x: 150, y: 0, fx: 150, fy: 0 },
        { id: "PHP", group: 5, x: 200, y: 80, fx: 200, fy: 80 },
        { id: "Node.js", group: 5, x: 100, y: 80, fx: 100, fy: 80 },
        { id: "Express", group: 6, x: 0, y: 100, fx: 0, fy: 100 },
        { id: "MongoDB", group: 7, x: -100, y: 80, fx: -100, fy: 80 },
        { id: "MySQL", group: 8, x: -150, y: 0, fx: -150, fy: 0 },
        { id: "Git", group: 9, x: -200, y: -50, fx: -200, fy: -50 },
        { id: "GitHub", group: 10, x: -200, y: 50, fx: -200, fy: 50 },
        { id: "WordPress", group: 11, x: 150, y: 150, fx: 150, fy: 150 },
        { id: "API REST", group: 12, x: 50, y: 150, fx: 50, fy: 150 },
        { id: "CLI", group: 13, x: 0, y: 200, fx: 0, fy: 200 },
    ],
    links: [
        { source: "canodelacuadra", target: "HTML" },
        { source: "canodelacuadra", target: "CSS" },
        { source: "canodelacuadra", target: "JavaScript" },
        { source: "canodelacuadra", target: "PHP" },
        { source: "PHP", target: "MySQL" },
        { source: "PHP", target: "MongoDB" },
        { source: "CSS", target: "Bootstrap" },
        { source: "JavaScript", target: "Node.js" },
        { source: "JavaScript", target: "DOM" },
        { source: "Node.js", target: "Express" },
        { source: "Express", target: "API REST" },
        { source: "React", target: "API REST" },
        { source: "Express", target: "MySQL" },
        { source: "Express", target: "MongoDB" },
        { source: "canodelacuadra", target: "Git" },
        { source: "Git", target: "GitHub" },
        { source: "Git", target: "CLI" },
        { source: "PHP", target: "WordPress" },
    ],
};

const projectMap = {
    canodelacuadra: [{ name: "Curriculum", web: "https://canodelacuadra.github.io/curriculum" }],
    DOM: [{ name: "Juego de pares y nones", repo: "https://github.com/canodelacuadra/paresynones", web: "https://canodelacuadra.github.io/paresynones/" }],
    Bootstrap: [{ name: "Diapositivas con CSS y JS", repo: "https://github.com/canodelacuadra/diapositivas-css-js", web: "https://canodelacuadra.github.io/diapositivas-css-js/" }],
    "Node.js": [
        { name: "API de tareas", repo: "https://github.com/candelacuadra/api-tareas", web: "https://tuproyecto.com" },
        { name: "Chat en tiempo real", repo: "https://github.com/candelacuadra/chat-realtime" },
    ],
    WordPress: [
        { name: "CMS personalizado", web: "https://cms-personalizado.com" },
        { name: "Tienda online", web: "https://mitienda.com" },
    ],
    MongoDB: [{ name: "Base de datos de películas", repo: "https://github.com/candelacuadra/movies-db" }],
    HTML: [{ name: "Landing page", web: "https://landingpage.com" }],
    GitHub: [{ name: "Repositorios abiertos", repo: "https://github.com/candelacuadra" }],
};

// --- Componente principal ---
export default function SkillMap() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleNodeClick = (node) => {
        setSelectedSkill(node.id);
    };

    const renderNode = (node, ctx, globalScale) => {
        const label = node.id;
        const fontSize = 14 / globalScale;
        ctx.font = `bold ${fontSize}px Sans-Serif`;

        if (node.id === "canodelacuadra") {
            // Nodo principal
            ctx.beginPath();
            ctx.arc(node.x, node.y, 24, 0, 2 * Math.PI);
            ctx.strokeStyle = "#FFD700";
            ctx.lineWidth = 4;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(node.x, node.y, 18, 0, 2 * Math.PI);
            ctx.fillStyle = "#0097A7";
            ctx.fill();

            ctx.fillStyle = "#333";
            ctx.fillText(label, node.x + 20, node.y + 5);
        } else {
            // Otros nodos
            ctx.fillStyle = node.color;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 12, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = "#333";
            ctx.fillText(label, node.x + 12, node.y + 4);
        }
    };

    return (
        <div id="skill-map" className="skill-map-container">
            <p className="skill-map-instruction">
                Haz clic en las tecnologías para ver proyectos relacionados&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                </svg>
            </p>

            <div className="skill-map-graph">
                <ForceGraph2D
                    graphData={graphData}
                    d3VelocityDecay={0.3}
                    enableZoomPanInteraction={false}
                    nodeAutoColorBy="group"
                    linkColor={() => "#888"}
                    linkWidth={1.5}
                    nodeLabel="id"
                    onNodeClick={handleNodeClick}
                    onEngineStop={() => console.log("Motor parado, posiciones fijadas.")}
                    nodeCanvasObject={renderNode}
                    nodePointerAreaPaint={(node, color, ctx) => {
                        ctx.fillStyle = color;
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, node.id === "canodelacuadra" ? 20 : 14, 0, 2 * Math.PI);
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
                                {proj.name}{" "}
                                {proj.web && (
                                    <a href={proj.web} target="_blank" rel="noopener noreferrer">
                                        <FaCloud /> Web
                                    </a>
                                )}{" "}
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
