import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import video from "../../video/video.mp4";
import { HeroSection, HeroBg, VideoBg, HeroContents, HeroBtnWrapper, HeroButton, ArrowForward, ArrowRight } from "./HeroElements";

const Hero = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroSection id="hero">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4" />
            </HeroBg>
            <Container>
                <Row>
                    <HeroContents>
                        <h1>Virtual Banking Made easy</h1>
                        <p>Sign up for a new account today and received £200 in credit towards your next payment.</p>
                        <HeroBtnWrapper>
                            <HeroButton to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                Get started {hover ? <ArrowForward /> : <ArrowRight />}
                            </HeroButton>
                        </HeroBtnWrapper>
                    </HeroContents>
                </Row>
            </Container>
        </HeroSection>
    );
};

export default Hero;
