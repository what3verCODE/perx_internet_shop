import React from 'react';
import {store, persistor} from "./core/redux";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import {HomePage, CartPage} from "./pages";

export const Application: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/cart" element={<CartPage />}/>
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    )
}