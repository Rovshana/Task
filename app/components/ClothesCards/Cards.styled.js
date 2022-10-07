import styled from 'styled-components'




export const CardContainer = styled.div`
width: 281px;
height: 565px;
background: #FFFFFF;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
border-radius: 8px;
border: 1px solid red;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
position: relative;
`

export const FavIcon = styled.div`
position: absolute;
top: 230px;
right: 0;
left: 245px;
background-color: white;
width: 38px;
height: 31px;
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
export const Color = styled.div`
width: 11.4px;
height: 11.4px;
border-radius: 50%;
background: #F6E7D8;
margin-right: 8px;

`
export const ColorKeeper = styled.div`
display: flex;
flex-direction: row;
`
