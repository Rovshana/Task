import React from 'react'
import { Logo, NavBarContainer, SearchDiv, Button, Input, Ul, ListItem, RightCorner, Span, RightBox, SearchItem } from './Navbar.styled'
import Image from 'next/Image'
import { changeLanguage } from "i18next";
 function Navbar(props) {
    

    return (
        <NavBarContainer>
            <div>
                <Logo>Logo</Logo>
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
                <Image src='/Navbar_Svgs/Favorite.svg' alt=".." width={22} height={16}/>
                    <Span>Favorilerim</Span>
                </RightBox>
                <RightBox>
                <Image src='/Navbar_Svgs/Basket.svg' alt=".." width={16} height={16}/>
                    <Span>Sepetim</Span>
                </RightBox>
            </RightCorner>
            
        </NavBarContainer>
    )
}
export default Navbar