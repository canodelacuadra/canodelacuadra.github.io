import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://github.com/canodelacuadra" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/canodelacuadra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="mailto:canodelacuadra@gmail.com" aria-label="Email">
                    <FaEnvelope />
                </a>
                <a href="https://wa.me/34600255567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp />
                </a>
            </div>
            <p>© 2025 canodelacuadra. Todos los derechos reservados.</p>
        </footer>
    );
}
