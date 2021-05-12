import { React, useState, useEffect } from "react";
import { Stylednav, NavLinks, NavLogo, MobileIcon, NavMenu, NavItem, NavBtn, NavBtnLink } from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    return (
        <>
            <Stylednav scrollNav={scrollNav}>
                <NavLogo to="home" onclick={toggleHome}>
                    <h1>DCO Bank</h1>
                </NavLogo>
                <IconContext.Provider value={{ color: "#fff" }}>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                </IconContext.Provider>

                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} offset={-80}>
                            <span>About</span>
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="discover" smooth={true} duration={500} spy={true} offset={-80}>
                            <span>Discover</span>
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} offset={-80}>
                            <span>Services</span>
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        <span>Sign in</span>
                    </NavBtnLink>
                </NavBtn>
            </Stylednav>
        </>
    );
};

export default Navbar;
