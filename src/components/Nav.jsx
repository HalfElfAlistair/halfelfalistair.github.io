import { Hamburger } from '../icons/Hamburger';
import { useState, useEffect } from 'react';

export const Nav = () => {
    const navLinks = [
        'Home',
        'About',
        'Portfolio',
        'Posts'
    ]
    // const navLinks = [
    //     {
    //         text: "Home",
    //         // path: "/"
    //     },
    //     {
    //         text: "About",
    //         // path: "/about"
    //     },
    //     {
    //         text: "Portfolio",
    //         // path: "/portfolio"
    //     },
    //     {
    //         text: "Posts",
    //         // path: "/Posts"
    //     },
    // ]
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
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
        <nav className={`${displayTextLinks ? "nav-with-links" : "nav-with-burger"} ${opaqueNav ? "opaqueNav" : "transparentNav"}`}>
            {
                displayTextLinks ? (
                    navLinks.map(text => {
                        return (
                            <a key={text} href={text === "Home" ? "/" : `/${text.toLowerCase()}`} className="nav-link">{text}</a>
                        )
                    })
                ) : (
                    <button
                        className="btn-transparent hamburger-container"
                        onClick={() => console.log('toggle nav menu')}
                    >
                        <Hamburger fillColour={opaqueNav ? "#004C54" : "#F8F8FF"} />
                    </button>
                )
            }
        </nav>

    )

    return (
        <nav className={hamburgerOpen ? 'navVertical' : 'navHorizontal'} id="menu">

            {screenWidth < 400 && (
                <div className='hamContainer'>
                    <button className='btnTransparent hamButton' onClick={() => setHamburgerOpen(!hamburgerOpen)}>
                        <Hamburger fillColour={hamburgerOpen ? '#F1F5F2' : '#C0C0C0'} />
                    </button>
                </div>

            )}

            {((screenWidth >= 400) || hamburgerOpen) && (
                <div className={screenWidth < 400 ? 'verticalLinks' : 'horizontalLinks'}>
                    {navLinks.map(text => {
                        return <a key={text} href={`#${text.toLocaleLowerCase()}`} className={screenWidth < 400 && 'verticalLink'}>{text}</a>
                    })}
                </div>
            )}
        </nav>
    )
}