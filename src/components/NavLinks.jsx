import { Link } from '@tanstack/react-router';
export const NavLinks = ({ horizontal, opaqueNav }) => {
    const navLinks = [
        'Home',
        'About',
        'Portfolio',
        'Posts'
    ]
    return (
        <div className={`nav-links ${horizontal ? "nav-links-horizontal" : "nav-links-vertical"}`}>
            {navLinks.map(text => {
                return (
                    <Link
                        to={`/${text === "Home" ? "" : text.toLowerCase()}`}
                        className={`nav-link ${opaqueNav ? "nav-link-white" : "nav-link-green"}`}
                    >
                        {text}
                    </Link>
                )
            })}
        </div>
    )
}