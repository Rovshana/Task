import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Image from 'next/Image'
import {Top, Center, Container, Span1, Span2, Brand, Detail, Price, Btn, ItemCount, YourBasket, Line, TotalPriceContainer, Total, TotalText, TotalPrice, Button} from './Basket.styled.js'
export function RightBasket(props) {
    

    return (
        <Container>
           <Center>
.
           </Center>
           <div className="right" style={{position:"relative"}}>
            <Top>
                <div>
            <Span1>ÜRÜN SAYI:</Span1> <Span2>6</Span2> 
            </div>
            <div>
              <ClearIcon  /> 
         </div>  
            </Top>
            <div>
                <YourBasket>
                    <div>
                        <Image src='/test.jpg' width={67} height={101}alt=".."/>
                    </div>
                    <div>
                        <Brand>Tonny Black</Brand>

                        <Detail> Beyaz Cilt Kadın Sneaker BLS-Q-1 </Detail>
                        <Price>110,49 TL</Price>
                        <div>
                            <Btn>-</Btn>
                            <ItemCount>2</ItemCount>
                            <Btn>+</Btn>
                        </div>
                       


                    </div>
                    <div>
                            <ClearIcon style={{color: "gray"}}/>
                        </div>
                </YourBasket>
                <Line></Line>
            </div>
            <div>
                <YourBasket>
                    <div>
                        <Image src='/test.jpg' width={67} height={101}alt=".."/>
                    </div>
                    <div>
                        <Brand>Tonny Black</Brand>

                        <Detail> Beyaz Cilt Kadın Sneaker BLS-Q-1 </Detail>
                        <Price>110,49 TL</Price>
                        <div>
                            <Btn>-</Btn>
                            <ItemCount>2</ItemCount>
                            <Btn>+</Btn>
                        </div>
                       


                    </div>
                    <div>
                            <ClearIcon style={{color: "gray"}}/>
                        </div>
                </YourBasket>
                <Line></Line>
            </div>
            <div>
                <YourBasket>
                    <div>
                        <Image src='/test.jpg' width={67} height={101}alt=".."/>
                    </div>
                    <div>
                        <Brand>Tonny Black</Brand>

                        <Detail> Beyaz Cilt Kadın Sneaker BLS-Q-1 </Detail>
                        <Price>110,49 TL</Price>
                        <div>
                            <Btn>-</Btn>
                            <ItemCount>2</ItemCount>
                            <Btn>+</Btn>
                        </div>
                       


                    </div>
                    <div>
                            <ClearIcon style={{color: "gray"}}/>
                        </div>
                </YourBasket>
                <Line></Line>
            </div>
            <div>
                <YourBasket>
                    <div>
                        <Image src='/test.jpg' width={67} height={101}alt=".."/>
                    </div>
                    <div>
                        <Brand>Tonny Black</Brand>

                        <Detail> Beyaz Cilt Kadın Sneaker BLS-Q-1 </Detail>
                        <Price>110,49 TL</Price>
                        <div>
                            <Btn>-</Btn>
                            <ItemCount>2</ItemCount>
                            <Btn>+</Btn>
                        </div>
                       


                    </div>
                    <div>
                            <ClearIcon style={{color: "gray"}}/>
                        </div>
                </YourBasket>
                <Line></Line>
            </div>
        <TotalPriceContainer >
            <Total>
                <TotalText>Toplam</TotalText>
                <TotalPrice>482,98 TL</TotalPrice>
            </Total>
            <div>
                <Button>SEPETE GİT</Button>
            </div>

        </TotalPriceContainer>
           </div>
        </Container>
    )
}
