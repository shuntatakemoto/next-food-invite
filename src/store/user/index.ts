import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { uid: '', photoUrl: '', displayName: '', twitterUid: '' },
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { uid: '', photoUrl: '', displayName: '', twitterUid: '' };
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
