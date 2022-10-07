import  styled from 'styled-components'


// Footer bottom starts 

export const FooterBottomContainer = styled.div`
width: 100%;
height: 56px;
background: #221F23;
display: flex;
justify-content: space-evenly;
align-items: center;

`
export const FooterConent = styled.ul`
display: flex;
list-style: none;
`

export const FooterBottomList = styled.li`
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #FFFFFF;
margin-right: 46px;

`

// FooterBottom ends

export const FooterTopContainer = styled.div`
 width: 100%;
 height: 236px;
 background: #26282B;
 display: flex;
 justify-content: space-evenly;
 padding-top: 30px;
 
`
export const FooterTopConent = styled.div`
 display: flex;
 flex-direction: column;
`
export const Span = styled.span`
 color: white;
 font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
margin-left: 5px;
margin-bottom: 20px;

&:first-child {
    font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
letter-spacing: 0.05em;

color: #FFFFFF   
    }
`
export const SmallContainer = styled.div`
display: flex;
align-items: center;
flex-direction: row;
text-align: center;

`
export const SocialSpan = styled.span`
color: white;
 font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
margin-left: 5px;
padding-top: 20px;
margin-bottom: 20px;
`
export const LastItems = styled.div`
display: flex;
flex-direction: column;
`
export const Input = styled.input`
width: 256px;
height: 50px;
background: #F8F8F8;
border: 1px solid rgba(196, 196, 196, 0.3);
border-radius: 4px;
border: none;
margin-right: 8px;
margin-bottom: 20px;
&::placeholder{
    padding-left: 20px;
    font-family: 'Source Sans Pro' sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;

color: rgba(0, 0, 0, 0.4);

}

`
export const Button = styled.button`
width: 117px;
height: 50px;
background: #FF0000;
box-shadow: 0px 4px 4px rgba(217, 7, 9, 0.23);
border-radius: 4px;
border: none;
color: white;
margin-bottom: 20px;


`
export const Paragraph = styled.p`
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #FFFFFF;
width: 250px;
`