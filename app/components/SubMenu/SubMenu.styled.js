import styled from "styled-components"
 export const MenuContainer = styled.div`
 width: 55%;
 height: 437px;
 background-color: white;
 
 

 
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
&:hover{
    background: #FF0000;
    color: white;
    cursor: pointer;
}

`
export const ParentDiv = styled.div`
display: flex;
justify-content: space-between;
background-color: white;

`
 export const Ul = styled.ul`
 list-style: none;
 margin-right: 36px;
 
 `
export const ListItem = styled.li`
font-family: 'Source Sans Pro' sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
color: #000000;
&:first-child{
  color: #FF0000;
}


`