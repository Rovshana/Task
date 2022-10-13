import React from 'react'
import { NavBarContainer, SearchDiv, Button, Input, Ul, ListItem, RightCorner, Span, RightBox, SearchItem, BadgeDiv } from './Navbar.styled'
import Image from 'next/Image'
import { changeLanguage } from "i18next";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';

 function Navbar(props) {
    const route  = useRouter()
const quantity = useSelector(state=>state.card.quantity)
console.log(quantity, "test")
    return (
        <NavBarContainer>
            <div>
                <Image src="/Navbar_Svgs/redLogi.svg" width={173} height ={36} alt=".." onClick={()=>route.push('/')} />
            </div>
            <Ul>
                <ListItem>Magazani yarat</ListItem>
                <ListItem>Yardim</ListItem>
            </Ul>
            
            <SearchDiv>
                <SearchItem>
            <Image src='/Navbar_Svgs/Search.svg' alt=".." width={22} height={16}/>
                <Input placeholder='Aradiginiz hershey burada'/>
                </SearchItem>
                <Button>Arama yap</Button>
            </SearchDiv>
            <RightCorner>
                <RightBox>
                

                    <Image src='/Navbar_Svgs/Order.svg' alt=".." width={22} height={16}/>
                    <Span>siparislerim</Span>
                </RightBox>
                
                <RightBox>
                <Image src='/Navbar_Svgs/Favorite.svg' alt=".." width={22} height={16} />
                    <Span>Favorilerim</Span>
                </RightBox>
                <RightBox>
                
              
                <Image src='/Navbar_Svgs/Basket.svg' alt=".." width={16} height={16}/>
              
               
                    <Span onClick={()=>route.push('/basket')}>Sepetim</Span>

                </RightBox>
            </RightCorner>
            
        </NavBarContainer>
    )
}
export default Navbar