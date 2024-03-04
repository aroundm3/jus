import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface StoreProfileState {
  name: string;
  bankAccount: string;
  bankName: string;
  phoneNumber: string;
  isLoading: boolean;
}

export const initialState: StoreProfileState = {
  name: '',
  bankAccount: '',
  bankName: '',
  phoneNumber: '',
  isLoading: true,
};

export const profileSlice = createSlice({
  name: 'profileStore',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<StoreProfileState>) => {
      return { ...state };
    },
  },
});

export const profileAppAction = profileSlice.actions;
export default profileSlice.reducer;
