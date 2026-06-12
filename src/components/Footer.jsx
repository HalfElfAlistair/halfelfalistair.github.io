import { LinkedIn } from "../icons/LinkedIn";
import { GitHub } from "../icons/GitHub";

export const Footer = () => {
    const socials = [
        {
            path: 'https://uk.linkedin.com/in/alistair-sinclair-smith-b247884a',
            label: "Icon link for Alistair Sinclair-Smith's LinkedIn profile.",
            icon: <LinkedIn fillColour="#F8F8FF" />
        },
        {
            path: 'https://github.com/HalfElfAlistair',
            label: "Icon link for Alistair Sinclair-Smith's GitHub profile.",
            icon: <GitHub fillColour="#F8F8FF" />
        }
    ]
    return (
        <footer id="footer">
            <div className="footer-container">
                <h2>Get in touch with Alistair Sinclair-Smith</h2>
                <p>Drop me an email and let's discuss how I can help you!</p>
                <p>Email: <a href="mailto:alistairjss90@gmail.com" target="_blank" rel="noopener">alistairjss90@gmail.com</a></p>
                <p>Or check me out on social media.</p>
                <div className="footer-icons">
                    {socials.map((social, i) => {
                        const { path, label, icon } = social;
                        return (
                            <a key={i} href={path} aria-label={label} target="_blank" rel="noopener" className="nav-link">
                                {icon}
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}