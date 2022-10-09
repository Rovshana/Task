import styled from 'styled-components'

export const MainDiv = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
border-radius: 15px;
height: 60px;
margin-bottom: 17px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 10px;
`
export const FirstELement = styled.div`
margin-left: 15px
`
export const Count = styled.span`
font-family: 'Source Sans Pro' sans-serif;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 16px;
color: #000000;
margin-left: 10px;
`
export const Number = styled.span`
 color: #FF0000;
 font-family: 'Source Sans Pro' sans-serif;
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 16px;
margin-left: 3px;
`

export const Button = styled.button`
font-family: 'Source Sans Pro' sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
width: 134px;
height: 40px;
color: #666666;
border: 1px solid rgba(196, 196, 196, 0.7);
border-radius: 8px;
background: #FFFFFF;
margin-right: 5px;
&:hover{
    border: 1px solid #FF0000;
    color: red;
}
`

export const Select = styled.select`
margin-right: 20px;
padding: 10px;
width: 134px;
height: 40px;
border: 1px solid rgba(196, 196, 196, 0.7);
border-radius: 8px;
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #666666;


`
export const Option = styled.option`
font-family: 'Source Sans Pro', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #666666;
&:hover{
    background-color: none;
    color: #FF0000;
    cursor: pointer;
}
`