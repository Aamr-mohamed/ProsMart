import { createSlice } from "@reduxjs/toolkit";

export interface AttributesProps {
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  category: string;
  image: { data: { attributes: { formats: { medium: { url: string } } } } };
}

interface cartProps {
  id: number;
  name: string;
  attributes: AttributesProps;
  count?: number;
}

export interface itemProps {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  category: string;
  image: Buffer;
}

interface initialStateProps {
  isCartOpen: boolean;
  cart: cartProps[];
  items: itemProps[];
}

export type RootState = {
  cart: initialStateProps;
};

const initialState: initialStateProps = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
