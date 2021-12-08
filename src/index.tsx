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
    console.log("Application starting with initial values...", initialValues);
    ReactDOM.render(
        <Application dealers={dealers} />,
        document.getElementById('root')
    );
}

(window as any).__APPLICATION__ = {
    start,
}