import styled from 'styled-components'

export const MenuSidebar = styled.div`
width: 390px;
height: 739px;
background: #FEFEFE;
box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
border-radius: 8px;
padding-top: 25px;
z-index: 1;
`

export const MenuParagraph = styled.p`
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #000000;
cursor: pointer;
padding-top: 15px;

`
export const ImageHolder = styled.div`


`
export const MenuDiv = styled.div`
display: flex;
    flex-direction: row;
    padding-left: 15px;
   width: 200px;
    align-items: center;
    margin-left: 39px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 330px;
    height: 57px;
&:hover{
    background-color: rgba(250, 243, 243, 1);
    color: red;
}
&:hover ${MenuParagraph}{
    color: red;
}
&:hover ${ImageHolder}{
    color: red;
}


`

