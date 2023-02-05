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
    createProduct: (state, action) => {
      // async () => {}
      const endPoint = `${process.env.REACT_APP_API_URL}product/create/`;
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: action.payload.name,
          descriptions: action.payload.description,
        }),
      };

      fetch(endPoint, options)
        .then((respone) => respone.json())
        .then((x) => {
          //refresh token if false clear local and raise alert
          console.log(x);
        });

      return {
        ...state,
        products: [...state.products, action.payload],
      };
    },
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

export const { createProduct } = product.actions;
export default product.reducer;
