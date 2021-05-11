import React from "react";
import Icon1 from "../../img/svg-4.svg";
import Icon2 from "../../img/svg-3.svg";
import Icon3 from "../../img/svg-6.svg";
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH1, ServicesH2, ServicesP } from "../Services/ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium benefits</ServicesH2>
                    <ServicesP>Unlock out special membership card that returns 5% cashback.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
