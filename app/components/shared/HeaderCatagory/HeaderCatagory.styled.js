import styled from 'styled-components'

export const CatagoryContainer = styled.div`
width: 100;
height: 56px;
background: #FFFFFF;
display: flex;


`

export const Ul = styled.ul`
list-style: none;
display: flex;

`
export const ListItem = styled.li`
margin-right: 17px;
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 16px;
display: flex;
align-items: center;
color: rgba(0, 0, 0, 0.9);
&:hover{
    color: red;
    cursor: pointer;
}

`