import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppThunk } from ".";

interface PropsInc {
    offset: number
}

//Pequenos pedaços de um reducer maior
const stock = createSlice({
    name: 'stock',
    initialState: {
        counter: +0
    },
    reducers: {
        increment(state, action:PayloadAction<PropsInc>){
            state.counter +=  action.payload.offset
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

export function asyncIncrement (offset: PropsInc): AppThunk {
    return async function (dispatch: AppDispatch) {
        //await fetch('Http:// ....');
        await sleep(3000)
        dispatch(increment(offset))
    }
}

export function asyncDecrement (): AppThunk {
    return async function (dispatch: AppDispatch) {
        //await fetch('Http:// ....');
        await sleep(3000)
        dispatch(decrement())
    }
}