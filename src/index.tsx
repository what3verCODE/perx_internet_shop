import React from 'react';
import ReactDOM from 'react-dom';
import {Application} from './Application';
import './index.scss';

let running = false;

function start() {
    if (running) {
        console.log("Application already running...")
        return;
    }

    running = true;
    ReactDOM.render(
        <React.StrictMode>
            <Application />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

start();