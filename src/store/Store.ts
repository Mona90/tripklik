// store.ts
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/reducers';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
