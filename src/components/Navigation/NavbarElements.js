import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Stylednav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
    min-height: 10vh;
    display: flex;
    margin: auto;
    margin-top: -110px !important;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 2rem;
    position: sticky;
    top: 0;
    z-index: 10;
    .logoSpan {
        color: #de3b0b;
        font-size: 2rem;
    }
    span {
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: 2px;
    }
    #logo {
        font-size: 1.7rem;
        font-weight: lighter;
        text-decoration: none;
    }
    @media screen and (max-width: 768px) {
        padding: 0.5rem 1rem;
    }
`;

export const NavLogo = styled(LinkS)`
    color: #fff !important;
    display: flex;
    align-items: center;
    justify-self: flex-start;
    justify-content: flex-start;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    &:hover {
        text-decoration: none;
        color: #00b0ff;
        h1 {
            color: #00b0ff;
            font-size: bold;
        }
    }
    @media screen and (max-width: 768px) {
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 850px) {
    }
`;

export const NavLinks = styled(LinkS)`
    color: #fff !important;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    span {
        font-size: 1.4rem;
    }

    &:hover {
        text-decoration: none;
        span {
            color: #00b0ff;
            border-bottom: 2px solid #99dfff;
            transition: all 0.4s ease-in-out;
        }
    }

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #00b0ff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    span {
        font-size: 1.2rem;
        text-decoration: none;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #99dfff;
        color: #010606;
    }
`;
