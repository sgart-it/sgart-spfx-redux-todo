import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todosReducers'

export const store = configureStore({
    reducer: {
        todoValue: todosReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;