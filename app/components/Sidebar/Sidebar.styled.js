import styled from 'styled-components'

export const Select = styled.select`
margin-right: 20px;
padding: 10px;
width: 300px;
height: 40px;
border: 1px solid rgba(196, 196, 196, 0.7);
border-radius: 8px;
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #666666;
border: none;

`
export const Option = styled.option`
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #666666;
border: none;
&:hover{
    background-color: none;
    color: #FF0000;
    cursor: pointer;
}
`

