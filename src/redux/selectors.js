import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items; // Changed from selectTasks
export const selectFilter = (state) => state.filter.name;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredTasks = createSelector(
  [selectContacts, selectFilter], // Changed from selectTasks
  (contacts, filter) =>
    contacts
      ?.filter((task) => task.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => {
        if (a.priority === "high" && b.priority !== "high") return -1;
        if (a.priority !== "high" && b.priority === "high") return 1;
        if (a.priority === "low" && b.priority !== "low") return 1;
        if (a.priority !== "low" && b.priority === "low") return -1;
        return 0;
      })
);
