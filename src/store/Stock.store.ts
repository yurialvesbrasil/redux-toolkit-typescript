import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from ".";

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


function sleep(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function asyncIncrement (): AppThunk {
    return async function (dispatch: AppDispatch) {
        //await fetch('Http:// ....');
        await sleep(3000)
        dispatch(increment())
    }
}

export function asyncDecrement (): AppThunk {
    return async function (dispatch: AppDispatch) {
        //await fetch('Http:// ....');
        await sleep(3000)
        dispatch(decrement())
    }
}