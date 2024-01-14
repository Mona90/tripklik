import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const API_BASE_URL = 'https://api.example.com'; // Replace with your API URL

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const response = await axios.get(`https://fakestoreapi.com/products/categories`);
  return response.data;
});

export const getAllProducts = createAsyncThunk('products/getProducts', async () => {
  const response = await axios.get(`https://fakestoreapi.com/products`);
  return response.data;
});

export const getCategoryProducts = createAsyncThunk(
  'products/getCategoryProducts',
  async (categoryName: string) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
    return response.data;
  }
);

export const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (id: number) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  }
);