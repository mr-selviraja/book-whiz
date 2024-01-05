import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  isAuthenticated: false,
  accessToken: null,
  isAuthModalActive: false,
};

// Load user data from localStorage on initial app load
const storedUser = JSON.parse(localStorage.getItem('bookWhizUser'));
if (storedUser) {
  initialState.userId = storedUser.userId;
  initialState.isAuthenticated = storedUser.isAuthenticated;
  initialState.accessToken = storedUser.accessToken;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.isAuthenticated = true;
      localStorage.setItem('bookWhizUser', JSON.stringify(state)); // Save user data to localStorage
    },

    setToken: (state, action) => {
      state.accessToken = action.payload;
    },

    showAuthModal: (state, action) => {
      state.isAuthModalActive = true;
    },

    closeAuthModal: (state, action) => {
      state.isAuthModalActive = false;
    },

    resetUser: (state) => {
      state.userId = null;
      state.isAuthenticated = false;
      state.accessToken = null;
      localStorage.removeItem('bookWhizUser'); // Remove user data from localStorage on logout
    },
  },
});

export const {
  setUser, // similar to login
  setToken, // similar to JWT auth token
  isAuthModalActive,
  showAuthModal,
  closeAuthModal,
  resetUser, // similar to logout
} = authSlice.actions;
export default authSlice.reducer;
