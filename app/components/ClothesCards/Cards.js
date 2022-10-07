import React from "react";
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
} from "./Cards.styled";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Cards(props) {
  const [value, setValue] = React.useState(5);

  return (
    <CardsKeeper >
      
        <CardContainer>
          <Image src="/test.jpg" width={281} height={420} />
          <FavIcon>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
            />
          </FavIcon>
          
          <Content>
            <ContentItem1>Lorem impsum dolar</ContentItem1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ContentItem2> SUNY.P1FX Turkuaz Kiz Çocuk Deniz ...</ContentItem2>
            <div>
              <Price>99,99TL</Price>
              <SalePrice>59,99TL</SalePrice>
            </div>
            <ColorKeeper>
              <Color />
              <Color />
            </ColorKeeper>
          </Content>
        </CardContainer>
        <CardContainer>
          <Image src="/test.jpg" width={281} height={420} />
          <FavIcon>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
            />
          </FavIcon>
          
          <Content>
            <ContentItem1>Lorem impsum dolar</ContentItem1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ContentItem2> SUNY.P1FX Turkuaz Kiz Çocuk Deniz ...</ContentItem2>
            <div>
              <Price>99,99TL</Price>
              <SalePrice>59,99TL</SalePrice>
            </div>
            <ColorKeeper>
              <Color />
              <Color />
            </ColorKeeper>
          </Content>
        </CardContainer>
        <CardContainer>
          <Image src="/test.jpg" width={281} height={420} />
          <FavIcon>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
            />
          </FavIcon>
          
          <Content>
            <ContentItem1>Lorem impsum dolar</ContentItem1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ContentItem2> SUNY.P1FX Turkuaz Kiz Çocuk Deniz ...</ContentItem2>
            <div>
              <Price>99,99TL</Price>
              <SalePrice>59,99TL</SalePrice>
            </div>
            <ColorKeeper>
              <Color />
              <Color />
            </ColorKeeper>
          </Content>
        </CardContainer>
        <CardContainer>
          <Image src="/test.jpg" width={281} height={420} />
          <FavIcon>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
            />
          </FavIcon>
          
          <Content>
            <ContentItem1>Lorem impsum dolar</ContentItem1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ContentItem2> SUNY.P1FX Turkuaz Kiz Çocuk Deniz ...</ContentItem2>
            <div>
              <Price>99,99TL</Price>
              <SalePrice>59,99TL</SalePrice>
            </div>
            <ColorKeeper>
              <Color />
              <Color />
            </ColorKeeper>
          </Content>
        </CardContainer>
        <CardContainer>
          <Image src="/test.jpg" width={281} height={420} />
          <FavIcon>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
            />
          </FavIcon>
          
          <Content>
            <ContentItem1>Lorem impsum dolar</ContentItem1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ContentItem2> SUNY.P1FX Turkuaz Kiz Çocuk Deniz ...</ContentItem2>
            <div>
              <Price>99,99TL</Price>
              <SalePrice>59,99TL</SalePrice>
            </div>
            <ColorKeeper>
              <Color />
              <Color />
            </ColorKeeper>
          </Content>
        </CardContainer>
        <CardContainer>
          <Image src="/test.jpg" width={281} height={420} />
          <FavIcon>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
            />
          </FavIcon>
          
          <Content>
            <ContentItem1>Lorem impsum dolar</ContentItem1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ContentItem2> SUNY.P1FX Turkuaz Kiz Çocuk Deniz ...</ContentItem2>
            <div>
              <Price>99,99TL</Price>
              <SalePrice>59,99TL</SalePrice>
            </div>
            <ColorKeeper>
              <Color />
              <Color />
            </ColorKeeper>
          </Content>
        </CardContainer>
        <CardContainer>
          <Image src="/test.jpg" width={281} height={420} />
          <FavIcon>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
            />
          </FavIcon>
          
          <Content>
            <ContentItem1>Lorem impsum dolar</ContentItem1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ContentItem2> SUNY.P1FX Turkuaz Kiz Çocuk Deniz ...</ContentItem2>
            <div>
              <Price>99,99TL</Price>
              <SalePrice>59,99TL</SalePrice>
            </div>
            <ColorKeeper>
              <Color />
              <Color />
            </ColorKeeper>
          </Content>
        </CardContainer>
        <CardContainer>
          <Image src="/test.jpg" width={281} height={420} />
          <FavIcon>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{ color: "red" }} />}
            />
          </FavIcon>
          
          <Content>
            <ContentItem1>Lorem impsum dolar</ContentItem1>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <ContentItem2> SUNY.P1FX Turkuaz Kiz Çocuk Deniz ...</ContentItem2>
            <div>
              <Price>99,99TL</Price>
              <SalePrice>59,99TL</SalePrice>
            </div>
            <ColorKeeper>
              <Color />
              <Color />
            </ColorKeeper>
          </Content>
        </CardContainer>
      
    </CardsKeeper>
  );
}
export default Cards;
