import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cardItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cardItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cardItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    removeItem(state, action) {
      const id = action.payload;

      const existingItem = state.cardItems.find((item) => item.id === id);
      existingItem.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cardItems = state.cardItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }
      state.totalAmount = state.cardItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cardItems.find((item) => item.id === id);
      if (existingItem) {
        state.cardItems = state.cardItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity;
      }
    },
  },
});

export const cardActions = cardSlice.actions;
export default cardSlice;
