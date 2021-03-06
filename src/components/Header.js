import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus,setBurgerStatus] = useState(false);
    return (
       <Container>
           <a>
               <img src={process.env.PUBLIC_URL+"/images/logo.svg"} alt="logo" />
           </a>
           <Menu>
               <a href="#">Model S</a>
               <a href="#">Model 3</a>
               <a href="#">Model X</a>
               <a href="#">Model Y</a>
           </Menu>
           <RightMenu>
               <a href="#">Shop</a>
               <a href="#">Tesla Account</a>
               <CustomMenu  onClick={()=>{ setBurgerStatus(true); }}/>
           </RightMenu>

           <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                   <CustomClose onClick={()=>{ setBurgerStatus(false); }} />
                </CloseWrapper>
                <li href="#"> Existing Inventory</li>
                <li href="#"> Used Inventory</li>
                <li href="#"> Trade-In</li>
                <li href="#"> Test Drive</li>
                <li href="#"> Cybertruck</li>
                <li href="#"> Roadster</li>
                <li href="#"> Semi</li>
                <li href="#"> Charging</li>
                <li href="#"> Powerwall</li>
                <li href="#"> Commercial Energy</li>
                <li href="#"> Utilities</li>
                <li href="#"> Find Us</li>
                <li href="#"> Support</li>
                <li href="#"> Investor Relations</li>
            </BurgerNav>
       </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position:fixed;
    background-color:rgba(255,255,255,0.5);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
    }

    @media (max-width : 768px){
        display : none;
    }
`
const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;  
}
`

const CustomMenu = styled(MenuIcon)`
cursor:pointer;
`


const BurgerNav = styled.div`
    position : fixed;
    top:0;
    right:0;
    bottom:0;
    background:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
    transition : transform 0.2s ease-in;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    text-align:start;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);

        a{
            font-weight:600;
        }
    }

`

const CustomClose = styled(CloseIcon)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
`