import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
    card: []
  }

  export const CardSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addProducts: (state, action)=>{
            
            state.products.push(action.payload.product)
            // state.total += action.payload.price

        }, 
        addCard: (state, action)=>{
          state.card = [...state.card, action.payload]

        }, 
        setAddBasket: (state, action)=>{
          console.log(action.payload);
          // state.quantity += 1;
          state.products.push(action.payload)
        },
        
       

    },
  })

  export const { addProducts, setAddBasket, addCard } = CardSlice.actions;
  export default CardSlice.reducer
