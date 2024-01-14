import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';

interface AppState {
  categories: []; 
  categoryProducts: []; 
  products: [];
  singleProduct: {};
  allProducts:[]

}

const initialState: AppState = {
  categories: [],
  categoryProducts: [],
  products: [],
  singleProduct: {},
  allProducts:[]
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(actions.getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload
    });

    builder.addCase(actions.getCategoryProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(actions.getSingleProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
    });

  },
});

export default appSlice.reducer;



// // reducers.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AppState {
//   categories: string[];
//   currentCategory: string | null;
//   products: string[]; // Adjust the type based on the actual product structure
//   singleProduct: object | null; // Adjust the type based on the actual product structure
// }

// const initialState: AppState = {
//   categories: [],
//   currentCategory: null,
//   products: [],
//   singleProduct: null,
// };

// const appSlice = createSlice({
//   name: 'app',
//   initialState,
//   reducers: {
//     setCategories: (state, action: PayloadAction<string[]>) => {
//       state.categories = action.payload;
//     },
//     setCurrentCategory: (state, action: PayloadAction<string | null>) => {
//       state.currentCategory = action.payload;
//     },
//     setProducts: (state, action: PayloadAction<string[]>) => {
//       state.products = action.payload;
//     },
//     setSingleProduct: (state, action: PayloadAction<string[] | null>) => {
//       state.singleProduct = action.payload;
//     },
//   },
// });

// export const { setCategories, setCurrentCategory, setProducts, setSingleProduct } = appSlice.actions;

// export default appSlice.reducer;
