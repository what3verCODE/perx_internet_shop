import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer, PersistConfig } from "redux-persist";

const rootReducer = combineReducers({});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
    key: 'ROOT',
    storage,
    whitelist: ['cart']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);