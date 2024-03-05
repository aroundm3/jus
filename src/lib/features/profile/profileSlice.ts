import { setProfileRes } from '@/services/profile-service';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface StoreProfileState {
  name: string;
  bankAccount: string;
  bankName: string;
  phoneNumber: string;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

export const initialState: StoreProfileState = {
  name: '',
  bankAccount: '',
  bankName: '',
  phoneNumber: '',
  isLoading: true,
  isError: false,
  isSuccess: false,
  message: '',
};

export const profileSlice = createSlice({
  name: 'profileStore',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;

      return state;
    },
    setProfile: (state, action: PayloadAction<StoreProfileState>) => {
      return { ...state };
    },
    setProfileSuccess(state, action: PayloadAction<setProfileRes>) {
      state = {
        ...state,
        isSuccess: true,
        isError: false,
        message: '',
        isLoading: false,
      };
      return state;
    },
  },
});

export const profileAppAction = profileSlice.actions;
export default profileSlice.reducer;
