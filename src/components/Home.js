import React from 'react'
import Section from './Section'
import styled from 'styled-components'
import ModelS from "./images/model-s.jpg"
import Model3 from "./images/model-3.jpg"
import ModelX from "./images/model-x.jpg"
import ModelY from "./images/model-y.jpg"
import SolarP from "./images/solar-panel.jpg";
import SolarF from "./images/solar-roof.jpg";
import Access from "./images/accessories.jpg";
function Home() {
    return (
        <Container>
            <Section 
            title="Model S"
            description="Order Online For Touchless Delivery"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
            backgroundImg={ModelS}
            />
            <Section 
            title="Model 3"
            description="Order Online For Touchless Delivery"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
            backgroundImg={Model3} 
            />
            <Section 
            title="Model X"
            description="Order Online For Touchless Delivery"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
            backgroundImg={ModelX}
            />
            <Section 
            title="Model Y"
            description="Order Online For Touchless Delivery"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
            backgroundImg={ModelY}
            />

        <Section 
            title="Lowest Solar Panels Cost in America"
            description="Money-back guarantee"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            backgroundImg={SolarP}
            />     

              <Section 
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            backgroundImg={SolarF}
            />     

              <Section 
            title="Accessories"
            description=""
            leftBtnText="Order Now"
            backgroundImg={Access}
            />      
        </Container>
    )
}

export default Home

const Container = styled.div`
    z-index:10;
    height: 100vh
`