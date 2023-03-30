import { createSlice } from "@reduxjs/toolkit";

const AddTheme = createSlice({
    name: "NewTheme",
    initialState: null,
    reducers: {
        addnewTheme: (state, actions) => {
            if (state.length === 0) {
                state.push(actions.payload);
            }
            else {
                state.push(actions.payload);

            }
        }
    }
})

export const { addnewTheme } = AddTheme.actions;
export default AddTheme.reducer;