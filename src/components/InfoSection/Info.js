import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { InfoContainer, TextWrapper, InfoWrap, Header, Title, SubTitle, BtnWrap, ImgWrap, Img, ButtonInfo } from "./infoElements";

const Info = ({ lightBg, id, imgStart, topLine, lightText, darkText, img, alt, headLine, description, buttonLabel, primary }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <Container id="infoContainer">
                    <InfoWrap>
                        <Row imgStart={imgStart}>
                            <Col>
                                <TextWrapper>
                                    <Header>{topLine}</Header>
                                    <Title lightText={lightText}>{headLine}</Title>
                                    <SubTitle darkText={darkText}>{description}</SubTitle>
                                    <BtnWrap>
                                        <ButtonInfo to="hero" smooth={"true"} duration={500} spy={true} exact="true" primary={primary} dark="true">
                                            {buttonLabel}
                                        </ButtonInfo>
                                    </BtnWrap>
                                </TextWrapper>
                            </Col>
                            <Col>
                                <ImgWrap>
                                    <Img src={img} alt={alt} />
                                </ImgWrap>
                            </Col>
                        </Row>
                    </InfoWrap>
                </Container>
            </InfoContainer>
        </>
    );
};

export default Info;
