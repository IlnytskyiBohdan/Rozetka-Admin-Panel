import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_Products } from "../constans/constans";
import axios from "axios";

const apiRequest = async (method, url, data, thunkAPI) => {
  try {
    const response = await axios({ method, url, data });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, thunkAPI) =>
  apiRequest("get", API_Products, null, thunkAPI)
);

export const addProduct = createAsyncThunk("products/addProduct", async (product, thunkAPI) =>
  apiRequest("post", API_Products, product, thunkAPI)
);

export const updateProduct = createAsyncThunk("products/updateProduct", async (product, thunkAPI) =>
  apiRequest("put", `${API_Products}/${product.id}`, product, thunkAPI)
);

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id, thunkAPI) =>
  apiRequest("delete", `${API_Products}/${id}`, null, thunkAPI).then(() => id)
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })

      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default productsSlice.reducer;

