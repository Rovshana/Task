import styled from 'styled-components'


export  const Main = styled.div`
display: flex;
justify-content: center;
margin-right: 40px;

`
export const Center = styled.div`
 display: flex;
 justify-content: space-between;

`


export const ListElement = styled.li`
list-style: none;
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
color: rgba(black, 0.5);
padding-top: 17px;
&:first-child{
    font-weight: 600;  
    color: #000000;
    font-size: 18px;
}
&:hover{
    color: rgba(255, 0, 0, 1);
}

`
export const Ul = styled.ul`
padding: 0;
margin-right: 20px;
margin-bottom: 30px;

`
export const Button = styled.button`
width: 150px;
height: 40px;
border-radius: 4px;
color: #FF0000;
border: #FF0000;
margin-right: 10px;
margin-bottom: 40px;
font-family: 'Source Sans Pro' sans-serif;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
background-color: white;
border: 1px solid #FF0000;
&:hover{
    background: #FF0000;
    color: white;
    cursor: pointer;
}

`
export const ProductImage = styled.div`
padding-top: 80px;
padding-left: 10px;

`