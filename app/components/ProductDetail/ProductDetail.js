import React from "react";
import Image from "next/Image";
import Rating from "@mui/material/Rating";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {
  BigCenterElement,
  Brand,
  Brand2,
  Button1,
  Button2,
  Buttons,
  CargoText,
  Center,
  Id,
  NewPrice,
  OldPrice,
  ProductColor,
  ProductName,
  RateNum,
  RatingNum,
  SaleText,
  Seller,
  TinyDiv,
  TopElement,
  Size,
  SizeTable,
  Div,
  Delivery,
  Date,
  Increase,
  ItemCount,
  Box,
  Container,
  SpanKeeper,
  TinyDiv2,
  ArrowDiv
} from "./ProductDetail.styled";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function ProductDetail(props) {
  const [value, setValue] = React.useState(5);

  return (
    <div className="container d-flex">
      <div className="col-2">
        <ArrowDiv>
        <KeyboardArrowUpOutlinedIcon/>
        </ArrowDiv>
        <div>
          <Image src="/product/backCoat.webp" width={121} height={171} alt="..."/>
        </div>
        <div>
          <Image src="/product/sideCoat.webp" width={121} height={171} alt="..."/>
        </div>
        <div>
          <Image src="/product/backCoat.webp" width={121} height={171} alt="..."/>
        </div>
        <ArrowDiv>
       <KeyboardArrowDownOutlinedIcon/>
      </ArrowDiv>
      </div>
      <div className="col-4">
        <Image src="/product/coat.jpg" width={400} height={600} />
      </div>
     
      <div className="col-6">
        <TopElement>
          <div>
            <Brand>Koton </Brand>
            <ProductName>Kadın Antrasit Kaban 0KAK0</ProductName>
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
            <OldPrice>99,99TL</OldPrice>
            <NewPrice>59,99TL</NewPrice>
          </div>
        </TopElement>
        <Center>
          <BigCenterElement>
            <ProductColor>Reng</ProductColor>
            <div className="cards">
              <Image
                src="/product/coat.jpg"
                width={56}
                height={85}
                style={{ objectFit: "cover", marginRight: "15px" }}
              />
               </div>
          </BigCenterElement>
          <TinyDiv>
            <div>
            <Image src="/product/truck.svg" width={50} height={50} alt=".."/>
              <CargoText>KARGO BEDAVA</CargoText>
              
            </div>
          </TinyDiv>
          <TinyDiv>
            <div>
            <Image src="/product/sale.svg" width={50} height={50} alt=".."/>
              <SaleText>40% İNDİRİM</SaleText>
              
            </div>
          </TinyDiv>
        
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
        {/* <Buttons>

          <Button1>Hemen Al</Button1>
          <Button2>Sepete ekle</Button2>
        </Buttons> */}

       
      </div>
    </div>
  );
}

export default ProductDetail;
