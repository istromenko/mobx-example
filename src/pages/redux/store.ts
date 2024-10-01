import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NameState {
    name: string;
}

const initialState: NameState = {
    name: '',
};

const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        changeName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
    },
});

export const { changeName } = nameSlice.actions;

const store = configureStore({
    reducer: {
        name: nameSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;