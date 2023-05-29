import { createSlice } from '@reduxjs/toolkit';
// import initialContacts from '../../contacts.json';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';
import { fetchContacts } from 'redux/operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: pendingReducer,
    [fetchContacts.rejected]: rejectedReducer,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items.push(action.payload);
    },
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       const checkContactName = state.items.find(
  //         contact =>
  //           contact.name.toLowerCase() === action.payload.name.toLowerCase()
  //       );
  //       if (checkContactName) {
  //         alert(`${action.payload.name} is allready in contact!`);
  //         return;
  //       } else {
  //         state.items.push(action.payload);
  //       }
  //     },
  //   },
  //   deleteContact: {
  //     reducer(state, action) {
  //       state.items = state.items.filter(item => item.id !== action.payload);
  //     },
  //   },
  // },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedReducer = persistReducer(persistConfig, contactsReducer);
