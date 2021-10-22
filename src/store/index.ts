import { configureStore } from "@reduxjs/toolkit";
import stockReducer from "./Stock.store";

export const store = configureStore({
    reducer: {
        stock: stockReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
