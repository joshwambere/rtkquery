import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice";
import {api} from "../services/api/api";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        todos:todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
