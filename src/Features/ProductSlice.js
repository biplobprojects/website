import { createSlice } from "@reduxjs/toolkit";
import { AllProductsData } from "../components/AllProductsData";

const initialState = { loading: false, list: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startFetch(state) {
      state.loading = true;
    },
    save(state, action) {
      console.log(action,"aaaaaction")
      const { payload } = action;
      state.loading = false;
      state.list = payload;
    },
  },
});

export const { startFetch, save } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());

  const products = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(AllProductsData);
    }, 800);
  });

  dispatch(save(products));
};

const productsReducer = productsSlice.reducer;

export default productsReducer;
