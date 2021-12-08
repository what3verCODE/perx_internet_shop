import {configureStore} from "@reduxjs/toolkit";
import {persistedReducer} from "./reducers";
import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";

const persistActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [...persistActions]
        }
    })
})

export const persistor = persistStore(store);