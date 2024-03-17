

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  priorityFilter: '',
};

const priorityFilterSlice = createSlice({
  name: 'priorityFilter',
  initialState,
  reducers: {
    setPriorityFilter(state, action) {
      state.priorityFilter = action.payload;
    },
    clearPriorityFilter(state) {
      state.priorityFilter = '';
    },
  },
});

export const { setPriorityFilter, clearPriorityFilter } = priorityFilterSlice.actions;
export default priorityFilterSlice.reducer;
