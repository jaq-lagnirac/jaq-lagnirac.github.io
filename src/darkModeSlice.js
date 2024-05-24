import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true
}

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.value = !(state.value)
        }
    }
})

export const { toggleMode } = darkModeSlice.actions
export default darkModeSlice.reducer