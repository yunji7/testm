/**
 * Created by Administrator on 2016/7/19 0019.
 */


import React from 'react' ;
import {Provider} from  'react-redux'
import {render} from 'react-dom';
import { createStore }  from 'redux'
import reducers from  './reducers'

let store = createStore(reducers);


render(
    <Provider  store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root')
)

