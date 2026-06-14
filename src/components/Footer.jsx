import { LinkedIn } from "../icons/LinkedIn";
import { GitHub } from "../icons/GitHub";
import { Bluesky } from '../icons/Bluesky';

export const Footer = () => {
    const fillColour = "#F8F8FF";
    const socials = [
        {
            path: 'https://uk.linkedin.com/in/alistair-sinclair-smith-b247884a',
            label: "Icon link for Alistair Sinclair-Smith's LinkedIn profile.",
            icon: <LinkedIn fillColour={fillColour} />
        },
        {
            path: 'https://github.com/HalfElfAlistair',
            label: "Icon link for Alistair Sinclair-Smith's GitHub profile.",
            icon: <GitHub fillColour={fillColour} />
        },
        {
            path: 'https://bsky.app/profile/halfelfalistair.bsky.social',
            label: "Icon link for Alistair Sinclair-Smith's Bluesky profile.",
            icon: <Bluesky fillColour={fillColour} />
        }
    ]
    return (
        <footer id="footer">
            <div className="footer-container">
                <h2>Get in touch with Alistair Sinclair-Smith</h2>
                <p>Drop me an email and let's discuss how I can help you!</p>
                <p>Email: <a href="mailto:alistairjss90@gmail.com" target="_blank" rel="noopener">alistairjss90@gmail.com</a></p>
                <div className="footer-icons">
                    {socials.map((social, i) => {
                        const { path, label, icon } = social;
                        return (
                            <a key={i} href={path} aria-label={label} target="_blank" rel="noopener" className="social-icon">
                                {icon}
                            </a>
                        )
                    })}
                </div>
            </div>
        </footer>
    )
}