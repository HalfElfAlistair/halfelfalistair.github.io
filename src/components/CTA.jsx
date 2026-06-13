export const CTA = ({ opaqueNav, closeNav }) => {
    return (
        <div className="cta-container">
            <a href="#footer" onClick={closeNav} className={opaqueNav ? "btn-green" : "btn"} >Get in touch</a>
        </div>
    )
}