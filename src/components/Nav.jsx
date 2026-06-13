import { Hamburger } from '../icons/Hamburger';
import { Cross } from '../icons/Cross';
import { useState, useEffect } from 'react';
import { NavContent } from './NavContent';

export const Nav = () => {
    const [NavDropdownOpen, setNavDropdownOpen] = useState(false);

    const toggleNavDropdown = () => {
        setNavDropdownOpen(!NavDropdownOpen);
    }

    const closeNav = () => {
        setNavDropdownOpen(false);
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    const displayTextLinks = screenWidth > 700;

    const [opaqueNav, setOpaqueNav] = useState(false);

    const options = { threshold: 1 };

    const updateOpaqueNavState = (entries) => {
        setOpaqueNav(!entries[0].isIntersecting)
    };

    useEffect(() => {
        const sentinel = document.querySelector(".scroll-sentinel");

        const observer = new IntersectionObserver(updateOpaqueNavState, options);

        observer.observe(sentinel);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav className={`${displayTextLinks ? "nav-with-links" : "nav-with-burger"} ${opaqueNav ? "opaqueNav" : "transparentNav"}`}>
                <div className="">
                    {
                        displayTextLinks ? (
                            <NavContent
                                horizontal={true}
                                opaqueNav={opaqueNav}
                                closeNav={closeNav}
                            />
                        ) : (
                            <button
                                className="btn-transparent hamburger-container"
                                onClick={() => toggleNavDropdown()}
                                aria-label={`${NavDropdownOpen ? "Close" : "Open"} navigation dropdown`}
                            >
                                {NavDropdownOpen ? (
                                    <Cross fillColour={opaqueNav ? "#004C54" : "#F8F8FF"} />
                                ) : (
                                    <Hamburger fillColour={opaqueNav ? "#004C54" : "#F8F8FF"} />
                                )}

                            </button>
                        )
                    }
                </div>
            </nav>
            {NavDropdownOpen && (
                <div className={`nav-dropdown ${opaqueNav ? "nav-dropdown-white" : "nav-dropdown-green"}`}>
                    <NavContent
                        horizontal={false}
                        opaqueNav={opaqueNav}
                        closeNav={closeNav}
                    />
                </div>
            )}
        </>
    )
}