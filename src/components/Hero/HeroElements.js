import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroSection = styled.section`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    filter: brightness(35%);
`;

export const HeroContents = styled.div`
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    h1 {
        color: #d5d5d5;
        font-size: 3rem;
        border-bottom: 2px solid #fff;
    }
    p {
        color: #00b0ff;
        font-size: 1.5rem;

        text-align: center;
        max-width: 600px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroButton = styled.button`
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
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;
