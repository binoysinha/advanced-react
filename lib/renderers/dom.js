import React from 'react';
import ReactDOM from 'react-dom';
import StoreApi from 'state-api';

import App from '../components/App';

const store = new StoreApi(window.initialData);

ReactDOM.render( 
    <App store={store}/>,
    document.getElementById('root')
);