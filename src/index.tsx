import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './internationalization/i18next';

import {rootStore} from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={rootStore}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
