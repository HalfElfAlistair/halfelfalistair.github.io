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
                    <a key={text} href={text === "Home" ? "/" : `/${text.toLowerCase()}`} className={`nav-link ${opaqueNav ? "nav-link-white" : "nav-link-green"}`}>{text}</a>
                )
            })}
        </div>
    )
}