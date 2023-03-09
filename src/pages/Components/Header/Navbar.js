import React, { useEffect, useState } from 'react'
import logo from '../../../assets/img/logo.png'

export default function Navbar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <>
            <nav className={scrolled ? "navbar navbar-sm bg-body-tertiary custom-navbar bg-dark py-0 navbar-dark" : "navbar navbar-sm bg-body-tertiary custom-navbar"}>
                <div className="container">
                    <a href='#home' className="navbar-brand">
                        <img src={logo} alt="Abdi" className="img-fluid" width={50} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2 item">
                                <a href='#home' className={activeLink === 'home' ? 'link nav-link active' : 'link nav-link'} onClick={() => onUpdateActiveLink('home')}>Home</a>
                            </li>
                            <li className="nav-item mx-2 item">
                                <a href='#about' className={activeLink === 'about' ? 'link nav-link active' : 'link nav-link'} onClick={() => onUpdateActiveLink('about')}>About</a>
                            </li>
                            <li className="nav-item mx-2 item">
                                <a href='#service' className={activeLink === 'service' ? 'link nav-link active' : 'link nav-link'} onClick={() => onUpdateActiveLink('service')}>Services</a>
                            </li>
                            <li className="nav-item mx-2 item">
                                <a href='#portfolio' className={activeLink === 'portfolio' ? 'link nav-link active' : 'link nav-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</a>
                            </li>
                            <li className="nav-item mx-2 item">
                                <a href='#contact' className={activeLink === 'contact' ? 'link nav-link active' : 'link nav-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
