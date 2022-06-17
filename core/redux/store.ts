import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { apiSlice } from "@/core/redux/api/apiSlice";
import { authReducer } from "@/core/redux/slices/auth";
import { getFromStorage } from "@/utils/localstorage";

const token = getFromStorage("token");
const user = getFromStorage("user");

const initialState = {
  token: token || null,
  user: user || null,
  isAuthenticated: !!token,
};

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  preloadedState: { auth: initialState },
});

store.subscribe(() => {
  if (store.getState().auth.token !== null)
    localStorage.setItem("token", store.getState().auth.token);
  if (store.getState().auth.user !== null)
    localStorage.setItem("user", JSON.stringify(store.getState().auth.user));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
