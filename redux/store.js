
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

export const createStore = () => {
    return configureStore({
        reducer: {
            auth: authReducer
        }
    })
}