import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
//provider is going to keep track of that store which is that global state, that allows us to access the store from anywhere inside of the app; no need to be in a parent/child component; can be accessed anywhere
import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './App'

const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store = {store}>
<App/>
</Provider>
,document.getElementById('root'))