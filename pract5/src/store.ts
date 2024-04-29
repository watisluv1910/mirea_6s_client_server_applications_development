import {State} from "./types.ts";
import {combineReducers} from "redux";
import {checkboxReducer} from "./reducers/reducers.ts";
import {configureStore} from "@reduxjs/toolkit";

export const createAppStore = (initialState?: State) =>
    configureStore({
        reducer: combineReducers(
            {
                checkboxes: checkboxReducer,
            }
        ),
        preloadedState: initialState,
    })

export default createAppStore();
