import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  status: null,
};

export const productsFetch = createAsyncThunk("product/fetch", async () => {
  const endPoint = `${process.env.REACT_APP_API_URL}products/`;
  const response = await axios.get(endPoint);
  return response?.data;
});

const product = createSlice({
  name: "products",
  initialState,
  reducers: {
    //TODO: create delete update dispatchers
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const {} = product.actions;
export default product.reducer;
