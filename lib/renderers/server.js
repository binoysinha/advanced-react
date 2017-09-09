import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StoreApi from 'state-api';

import App from '../components/App';
import config from 'config';


const serverRender = async() => {

    const resp = await axios.get(`http://${config.host}:${config.port}/data`);
    const store = new StoreApi(resp.data);
    
    return { 
        initialMarkup: ReactDOMServer.renderToString(
            <App store={store} />
        ),
        initialData: resp.data
    };
};

export default serverRender;