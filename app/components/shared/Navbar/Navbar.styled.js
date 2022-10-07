import styled from 'styled-components'
export const NavBarContainer = styled.nav`
width: 100%;
height: 90px;
display: flex;
justify-content: space-between;
 background: #FFFFFF;
 box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.02);
 align-items: center;


`
export const Logo = styled.p`
font-style: normal;
font-weight: 700;
font-size: 31.9493px;
line-height: 36px;
letter-spacing: 0.23em;
font-family: sans-serif;

color: #FF0000;

`
export  const SearchDiv = styled.div`
background: #F8F8F8;
border: 1px solid rgba(196, 196, 196, 0.3);
border-radius: 36px;
width: 500px;
height: 50px;
display: flex;
justify-content: space-between;

`
export const SearchItem =  styled.div`
display: flex;
margin-left: 19px;
`
export const Input = styled.input`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
border: none;
color: rgba(0, 0, 0, 0.4);
background-color: #F8F8F8;

`

export const Button = styled.button`
background: #FF0000;
box-shadow: 0px 4px 4px rgba(217, 7, 9, 0.23);
border-radius: 36px;
border: none;
width: 104px;
height: 34px;
margin-top: 10px;
margin-right: 6px;
color: #FFFFFF;

font-size: 16px;


`

export const Ul = styled.ul`
display: flex;
list-style: none;

`
export const ListItem = styled.li`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #000000;
margin-right: 36px;
&:hover{
    border-bottom: 1px solid #000000;
    cursor: pointer;
}


`

export const RightCorner = styled.div`
display: flex;

`
export const RightBox = styled.div`
 display: flex;
 flex-direction: column;
 margin-right: 32px;
`
export const Span = styled.span`
font-family: 'Source Sans Pro' sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
margin-top: 8px;

color: #000000;

`

