import styled from "styled-components";
import { Link } from "react-scroll";

export const InfoContainer = styled.section`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#D6D6D6" : "#010606")};
    height: 120vh;
    position: relative;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrap = styled.div`
    position: absolute;
    bottom: 0;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Header = styled.p`
    color: #00b0ff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Title = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const SubTitle = styled.p`
    max-width: 540px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const ButtonInfo = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? "#00b0ff" : "#010606")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#fff" : "#010606")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? "#fff" : "#00b0ff")};
        color: ${({ dark }) => (dark ? "#000" : "#d5d5d5")};
    }
`;
