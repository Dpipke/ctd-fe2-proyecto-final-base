import { configureStore, ThunkAction, Action, PreloadedState, combineReducers } from "@reduxjs/toolkit";
import citaReducer from "../features/quote/citaSlice";

const rootReducer = combineReducers({
  cita: citaReducer
});
export const setupStore = (preloadedState?:PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
