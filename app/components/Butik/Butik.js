import React from 'react'
import Image from 'next/image'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { ArrowDiv, BigCenterElement, Brand, Brand2, Button1, Button2, Buttons, CargoText, Center, Container, Div, Id, Increase, ItemCount, NewPrice, OldPrice, ProductColor, ProductName, RateNum, RatingNum, SaleText, Seller, Size, SizeTable, SpanKeeper, TinyDiv, TinyDiv2, TopElement, } from '../ProductDetail/ProductDetail.styled';
import { Rating } from '@mui/material';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box, ButikTop, ColorBox, Delete, Main  } from "./Butik.styled"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
export function Butik(props) {
    const [value, setValue] = React.useState(5);

    return (
        <Main className='container d-flex'>
              <div className="col-2">
        <ArrowDiv>
        <KeyboardArrowUpOutlinedIcon/>
        </ArrowDiv>
    
            <div>
            <Image src="/product/backCoat.webp" priority width={121} height={171} alt="..."/>
          </div>
            <div>
            <Image src="/product/backCoat.webp" width={121} height={171} alt="..."/>
          </div>
            <div>
            <Image src="/product/centerCoat.webp" width={121} height={171} alt="..."/>
          </div>
       
  
        <ArrowDiv>
       <KeyboardArrowDownOutlinedIcon/>
      </ArrowDiv>
      </div>
      <div className='col-4'>
      <Image src="/product/coat.jpg" width={400} height={600} alt='..' />

      </div>
      <div className='col-6'>
        <ButikTop>
            <div>
        <div>
            <Brand>Koton </Brand>
            <ProductName>Kadin Palto</ProductName>
          </div>
          <Id>6697EW</Id>
          <div>
            <Seller>Satici:</Seller>
            <Brand2>Koton</Brand2>
            <RateNum>9.5</RateNum>
          </div>
          <div>
            <RatingNum>4.5</RatingNum>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div>
            <OldPrice>150 Tl</OldPrice>
            <NewPrice>89TL</NewPrice>
          </div>
          </div>
          <Box>
          <TinyDiv>
          <Image src="/product/truck.svg" width={50} height={50} alt=".."/>
              <CargoText>KARGO BEDAVA</CargoText>
          </TinyDiv>
          <TinyDiv>
          <Image src="/product/sale.svg" width={50} height={50} alt=".."/>
              <SaleText>40% İNDİRİM</SaleText>
          </TinyDiv>
          </Box>
        </ButikTop>
        <Center>
          <ColorBox>
            <ProductColor>Reng</ProductColor>
            <div className="cards">
              <Image
                src="/product/coat.jpg"
                width={56}
                height={85}
                style={{  marginRight: "15px" }}
                priority
              />
               </div>
          </ColorBox> 
        </Center>
        <Center>
        <Container>
          <Div>
            <SpanKeeper>
            <Size>Beden</Size>
            <SizeTable>Beden Tablosu</SizeTable>
            </SpanKeeper>
            <p>Choose: size</p>
          </Div>
      <Div>
            <Size>Adet</Size>
            <div>
            <Increase>-</Increase>
            <ItemCount>1</ItemCount>
            <Increase>+</Increase>
            </div>


          </Div>
         
        </Container>
       
        <TinyDiv2>
<NotificationsActiveOutlinedIcon style={{color: "rgba(166, 166, 166, 1)"}}/>
          </TinyDiv2>
          <TinyDiv2>
          <FavoriteBorderOutlinedIcon style={{color: "rgba(166, 166, 166, 1)"}}/>
          </TinyDiv2>

          </Center>
          <Buttons>

<Button1>Hemen Al</Button1>
<Button2>Sepete ekle</Button2>
</Buttons>

      </div>
      <Delete>
        <ClearOutlinedIcon/>

        </Delete>
        </Main>
    )
}
