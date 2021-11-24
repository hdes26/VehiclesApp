import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const divRoot = document.querySelector('#root');

ReactDOM.render(<Main/>, divRoot );

serviceWorkerRegistration.register();

reportWebVitals();

