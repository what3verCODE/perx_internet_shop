import React from 'react';
import ReactDOM from 'react-dom';
import {Application} from './Application';
import './index.scss';

interface InitialValues {
    dealers: string[];
}


let running = false;

function start(initialValues?: InitialValues) {
    if (running) {
        console.log("Application already running...")
        return;
    }

    const dealers = initialValues ? initialValues.dealers : [];

    running = true;
    ReactDOM.render(
        <React.StrictMode>
            <Application dealers={dealers} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

(window as any).__APPLICATION__ = {
    start,
}