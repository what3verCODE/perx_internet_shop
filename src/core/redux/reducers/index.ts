import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer, PersistConfig } from "redux-persist";
import {productsReducer} from "./products";
import {cartReducer} from "./cart";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
    key: 'ROOT',
    storage,
    whitelist: ['cart']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);