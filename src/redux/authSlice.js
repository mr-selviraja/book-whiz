import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { setUser, setTokens } = authSlice.actions;
export default authSlice.reducer;
