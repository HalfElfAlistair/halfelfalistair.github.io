import { GitHub } from '../icons/GitHub';
import { Link } from '@tanstack/react-router';
export const ContentCard = ({ parent, title, description, image, alt, links }) => {
    const oneLink = links.length === 1;

    const useGitHubIcon = (i) => i === 0 && parent === "Portfolio";

    return (
        <div className="content-card">
            <div className="thumbnail-container flex-center">
                <img src={image} alt={alt} />
            </div>

            <div className="card-title-container">
                <h2>{title}</h2>
            </div>

            <div className="description-container">
                <p>{description}</p>
            </div>

            <div className={`card-links ${oneLink ? "one-link" : "two-links"}`}>
                {links.map((path, i) => {
                    return (
                        <Link
                            key={i}
                            to={path}
                            className={useGitHubIcon(i) ? "" : "btn"}
                            aria-label={useGitHubIcon(i) ? `Link to GitHub repository for ${title}` : ""}
                            target="_blank"
                            rel="noopener"
                        >
                            {useGitHubIcon(i) ? (
                                <GitHub fillColour="#F8F8FF" />
                            ) : (
                                i === 0 ? "Read More" : "Demo"
                            )}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}