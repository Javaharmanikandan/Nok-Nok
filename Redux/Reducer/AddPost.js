import { createSlice } from "@reduxjs/toolkit";

const AddPost = createSlice({
    name: "NewPost",
    initialState: [],
    reducers: {
        addPostlist: (state, actions) => {
            if (state.length === 0) {
                state.push(actions.payload);
            }
            else {
                let flag = 0;
                state.map((item) => {
                    if (item.post === actions.payload.post) {
                        flag = 1;
                    }
                })
                if (flag === 0) {
                    state.push(actions.payload);
                }

            }
        },

        deletePostlist: (state, actions) => {
            if (state !== null) {
                state.map((item, index) => {
                    if (item.post === actions.payload) {
                        state.splice(index, 1);
                    }
                })
            }
        }
    }
})

export const { addPostlist, deletePostlist } = AddPost.actions;
export default AddPost.reducer;