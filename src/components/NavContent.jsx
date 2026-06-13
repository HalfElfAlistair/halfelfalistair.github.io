import { CTA } from "./CTA";
import { NavLinks } from "./NavLinks";
export const NavContent = ({ horizontal, opaqueNav, closeNav }) => {
    return (
        <div className={`nav-content nav-content-${horizontal ? "horizontal" : "vertical"}`}>
            <NavLinks horizontal={horizontal} opaqueNav={opaqueNav} />
            <CTA opaqueNav={opaqueNav} closeNav={closeNav} />
        </div>
    )
}