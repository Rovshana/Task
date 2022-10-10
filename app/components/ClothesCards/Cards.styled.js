import styled from 'styled-components'

export const CardsKeeper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;


`
export const Info = styled.div`

width: 281px;
height: 565px;
background: #FFFFFF;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
border-radius: 8px;
border: 1px solid red;
margin-bottom: 30px;
margin-right: 30px;
 opacity: 0;;
 z-index: 3;
 transition: all 0.5s ease;
 cursor: pointer;
 `
export const Button = styled.button`
width: 89px;
height: 27px;
left: 7px;
top: 6px;

background: #FF0000;
box-shadow: 0px 4px 4px rgba(217, 7, 9, 0.23);
border-radius: 100px;
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
text-align: center;
border: none;
margin-left: 95px;
visibility: hidden;
color: #FFFFFF;


`
export const Sizes = styled.div`
width: 200px;
height: 40px;
background: rgba(255, 255, 255, 0.8);
border-radius: 4.23px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 10px;
padding-right: 10px;
visibility: hidden;

`
export const Size = styled.span`
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14.8007px;
line-height: 19px;
color: #ACACAC;

`
export const CardContainer = styled.div`
position: relative;
width: 281px;
height: 565px;
background: #FFFFFF;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
border-radius: 8px;
margin-bottom: 30px;
margin-right: 30px;
&:hover ${Button} {
    visibility: visible;
  }
  &:hover${Sizes}{
visibility: visible !important;
  }



`
export const Content = styled.div`
display: flex;
flex-direction: column;
padding-left: 20px;

`

export const FavIcon = styled.div`
position: absolute;
top: 10px;
right: 0;
background-color: white;
box-shadow: -2px 0px 3px rgba(0, 0, 0, 0.1);
border-radius: 1000px 0px 0px 1000px;

`

export const RedDiv = styled.div`
position: absolute;
top: 0;
right: 0;
left: 0;

width: 62px;
height: 31px;
left: 556px;
top: 708px;
background: #FF0000;


`

export const ContentItem1 = styled.span`
font-family: 'Source Sans Pro' sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

color: #1A1A1A;
`

export const ContentItem2 = styled.span`
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 14.8007px;
line-height: 19px;
color: #666666;
`
export const Price = styled.span`
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 12.6863px;
line-height: 16px;
text-decoration-line: line-through;
margin-right: 8px;
color: #A5A5A5;
`
export const SalePrice = styled.span`
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 700;
font-size: 21.1439px;
line-height: 27px;
color: #1A1A1A;
`
export const Color = styled.button`
width: 11.4px;
height: 11.4px;
background-color: ${props => props.color};
margin-right: 8px;
border: none;
border-radius: 50%;

`
export const ColorKeeper = styled.div`
display: flex;
flex-direction: row;
padding-top: 10px;
`
