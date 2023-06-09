import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { AuthenticationReducer } from './slices/authentication/authentication.slice';
import { AppointmentsReducer } from './slices/appointments/appointments.slice';
import { LayoutReducer } from './slices/layout/layout.slice';
import { NutritionistsReducer } from './slices/nutritionists/nutritionists.slice';
import { MedicalPlanReducer } from './slices/medicalPlan/medicalPlan.slice';
import { MyNutritionistReducer } from './slices/myNutritionist/myNutritionist.slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authentication'],
};

const reducer = combineReducers({
  authentication: AuthenticationReducer,
  appointments: AppointmentsReducer,
  layout: LayoutReducer,
  nutritionists: NutritionistsReducer,
  medicalPlan: MedicalPlanReducer,
  myNutritionist: MyNutritionistReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
