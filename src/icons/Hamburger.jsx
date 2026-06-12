export const Hamburger = ({ fillColour }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" className="hamburger-icon">
            <rect x="5" y="5" width="25" height="5" rx="2" fill={fillColour} />
            <rect x="5" y="15" width="25" height="5" rx="2" fill={fillColour} />
            <rect x="5" y="25" width="25" height="5" rx="2" fill={fillColour} />
        </svg>
    )
}



