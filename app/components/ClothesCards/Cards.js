import React, { useState, useEffect } from "react";
import Image from "next/Image";
import {
  CardContainer,
  Content,
  ContentItem1,
  ContentItem2,
  Price,
  SalePrice,
  Color,
  ColorKeeper,
  FavIcon,
  RedDiv,
  CardsKeeper,
  Button,
  Info,
  Sizes,
  Size,
} from "./Cards.styled";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { clothesApi } from "../../Api/ClothesCards";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Cards(props) {
  const [value, setValue] = React.useState(5);
  const [data, setData] = useState([])
useEffect(() => {
  getData()
}, [])

const getData = ()=>{
 clothesApi.then(res=>{
  console.log(res.data.clothes)
  setData(res.data.clothes)
 })
 console.log(data, "data")
}

  return (
    <CardsKeeper >
      {
          data.map((item, index)=>(
           
            <CardContainer>

        <div style={{position:"relative"}}>
          <Image src={item.photo} width={281} height={420} />
          <FavIcon>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
              />
          </FavIcon>
        </div>
      <Content>
        <ContentItem1>Lorem impsum dolar</ContentItem1>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <ContentItem2> {item.description}</ContentItem2>
        <div>
          <Price>{item.oldPrice}TL</Price>
          <SalePrice>{item.NewPrice}TL</SalePrice>
        </div>
        <ColorKeeper>
          <Color color={item.color[0]} />
          <Color color={item.color[1]} />
          <Button>Sepete ekle</Button>
        </ColorKeeper>
        <Sizes>
          <Size>Xs</Size>
          <Size>S</Size>
          <Size>M</Size>
          <Size>XL</Size>
          <Size>XLL</Size>
        </Sizes>
      </Content>
      
      </CardContainer>
     
          ))
        }
      
     
    </CardsKeeper>
  );
}
export default Cards;
