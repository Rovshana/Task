import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
    card: [],
    basketCount: 0
  }

  export const CardSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setIncrementCount: (state, action)=>{
           state.total = action.payload

        }, 
       
        setAddBasket: (state, action)=>{
          state.products.push(action.payload)
         state.quantity ++;
        },
        
       

    },
  })

  export const { addProducts, setAddBasket, addCard,setIncrementCount } = CardSlice.actions;
  export default CardSlice.reducer
