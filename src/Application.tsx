import React from 'react';
import {store, persistor} from "./core/redux";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

export const Application: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router>
                    <Routes>
                        <Route path="/" element={<div>Home</div>}/>
                        <Route path="/cart" element={<div>Cart</div>}/>
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    )
}