import { configureStore } from "@reduxjs/toolkit";
import AddPostReducer from "./Reducer/AddPost";
import AddThemeReducer from "./Reducer/Theme";


export default store = configureStore({
    reducer: {
        // Add your reducers here   
        AddPost : AddPostReducer,
        AddTheme: AddThemeReducer

    }
})