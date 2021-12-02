import React from 'react'
import Section from './Section'
import styled from 'styled-components'
function Home() {
    return (
        <Container>
            <Section 
            title="Model S"
            description="Order Online For Touchless Delivery"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
            backgroundImg="model-s.jpg"
            />
            <Section 
            title="Model 3"
            description="Order Online For Touchless Delivery"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
            backgroundImg="model-3.jpg"
            />
            <Section 
            title="Model X"
            description="Order Online For Touchless Delivery"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
            backgroundImg="model-x.jpg"
            />
            <Section 
            title="Model Y"
            description="Order Online For Touchless Delivery"
            leftBtnText="Customer Order"
            rightBtnText="Existing Inventory"
            backgroundImg="model-y.jpg"
            />

        <Section 
            title="Lowest Solar Panels Cost in America"
            description="Money-back guarantee"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            backgroundImg="solar-panel.jpg"
            />     

              <Section 
            title="Solar Roof"
            description="Produce Clean Energy From Your Roof"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            backgroundImg="solar-roof.jpg"
            />     

              <Section 
            title="Accessories"
            description=""
            leftBtnText="Order Now"
            backgroundImg="accessories.jpg"
            />      
        </Container>
    )
}

export default Home

const Container = styled.div`
    z-index:10;
    height: 100vh
`