import { createSlice } from "@reduxjs/toolkit";

//Pequenos pedaços de um reducer maior
const stock = createSlice({
    name: 'stock',
    initialState: {
        counter: +0
    },
    reducers: {
        increment(state){
            state.counter += 1
        },

        decrement(state){
            state.counter -= 1
        }
    }
})

export const { decrement ,increment } = stock.actions;
export default stock.reducer;
