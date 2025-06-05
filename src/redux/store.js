import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contactsSlice"; // Changed from tasksReducer

export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Changed from tasks
    filter: filterReducer,
  },
});
