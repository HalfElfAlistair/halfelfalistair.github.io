import { Hamburger } from '../icons/Hamburger';
import { useState } from 'react';

export const Nav = () => {
    const navLinks = [
        'About',
        'Knowledge',
        'Projects',
        'Contact',
    ]
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
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