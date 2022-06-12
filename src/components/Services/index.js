import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServiceElements'
// import Icon1 from 'images/svg-1.svg';
 //import Icon2 from 'images/svg-2.svg';
// import Icon3 from '../../../images/svg-3.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="./svg-1.svg" />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overral revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='images/svg-2.svg' />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='images/svg-3.svg' />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
