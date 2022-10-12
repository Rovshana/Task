import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Image from 'next/Image'
import {Top, Center, Container, Span1, Span2, Brand, Detail, Price, Btn, ItemCount, YourBasket, Line, TotalPriceContainer, Total, TotalText, TotalPrice, Button} from './Basket.styled.js'
import { useDispatch, useSelector } from 'react-redux';
import {setIncrementCount} from "../../store/slices/cardSlice.js"
export function RightBasket(props) {
    const dispatch = useDispatch()
    const [resultPrice,setResultPrice] = useState(0)
    const state = useSelector(state=>state)
    useEffect(() => {
        let sum = 0
        state.card.products?.map(item=>{
           sum += +item.NewPrice
        })

        setResultPrice(sum)

    },[state])
    const incrementBasketProduct = (id)=>{
      
    }

    const decrementBasketProduct = (id)=>{

    }
    console.log(state);

    return (
        <Container>
           <Center>
.
           </Center>
           <div className="right" style={{position:"relative"}}>
            <Top>
                <div>
            <Span1>ÜRÜN SAYI:</Span1> <Span2>{state.card.products.length}</Span2> 
            </div>
            <div>
              <ClearIcon  /> 
         </div>  
            </Top>
            {
                state.card.products?.map(product =>(
                    <>
                     <div>
                <YourBasket>
                    <div>
                        <Image src={product.photo} width={67} height={101}alt=".."/>
                    </div>
                    <div>
                        <Brand>{product.brand}</Brand>

                        <Detail> {product.description} </Detail>
                        <Price>{product.NewPrice} TL</Price>
                        <div>
                            <Btn onClick={()=>decrementBasketProduct(product.id)}>-</Btn>
                            <ItemCount>{product.count}</ItemCount>
                            <Btn onClick={()=>incrementBasketProduct(product.id)}>+</Btn>
                        </div>
                       


                    </div>
                    <div>
                            <ClearIcon style={{color: "gray"}}/>
                        </div>
                </YourBasket>
                <Line></Line>
            </div>
                    </>
                ))
            }
           
       
        <TotalPriceContainer >
            <Total>
                <TotalText>Toplam</TotalText>
                <TotalPrice>{resultPrice} TL</TotalPrice>
            </Total>
            <div>
                <Button>SEPETE GİT</Button>
            </div>

        </TotalPriceContainer>
           </div>
        </Container>
    )
}
