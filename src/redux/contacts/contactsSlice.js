import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchContactsFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const addContactFulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const checkContactName = state.items.find(
    contact => contact.name.toLowerCase() === action.payload.name.toLowerCase()
  );
  if (checkContactName) {
    alert(`${action.payload.name} is allready in contact!`);
    return;
  } else {
    state.items.push(action.payload);
  }
};

const deleteContactFulfilldReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, pendingReducer)
      .addCase(fetchContacts.rejected, rejectedReducer)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilledReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(addContact.fulfilled, addContactFulfilledReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.rejected, rejectedReducer)
      .addCase(deleteContact.fulfilled, deleteContactFulfilldReducer),
});

export const contactsReducer = contactsSlice.reducer;
