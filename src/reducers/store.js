import { createStoreHook } from "react-redux";
import userReducer from "./userReducer";
import cartreducer from './cartreducer'

import { configureStore } from "@reduxjs/toolkit";

var mainstore=configureStore({reducer:{user:userReducer,cart:cartreducer}})
export default mainstore;