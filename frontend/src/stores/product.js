import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  count: "",
  next: "",
  previous: "",
  limit: 2,
  products: [],
  status: null,
};

export const productsFetch = createAsyncThunk("product/fetch", async () => {
  const endPoint = `${process.env.REACT_APP_API_URL}products/`;
  //TODO: change endpoint avible to paginate request
  const response = await axios.get(endPoint);
  return response?.data;
});

export const nextProductFetch = createAsyncThunk(
  "next/fetch",
  async (endPoint) => {
    console.log(endPoint);

    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(endPoint, options)
      .then((respone) => respone.json())
      .then((data) => {
        return data;
      })
      .catch((x) => {
        console.log(x);
      });
    return response;
  }
);

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
          descriptions: action.payload.descriptions,
        }),
      };

      fetch(endPoint, options)
        .then((respone) => respone.json())
        .then((x) => {
          //refresh token if false clear local and raise alert
          console.log(x);
        });

      console.log("action.payload", action.payload);

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
      state.products = action.payload.results;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [nextProductFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [nextProductFetch.fulfilled]: (state, action) => {
      state.status = "success";

      state.products = action.payload.results;
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    [nextProductFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const { createProduct } = product.actions;
export default product.reducer;
