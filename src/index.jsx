import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from 'App';
import { worker } from 'mocks/browser';
import { productsReducer } from 'store/products';
import { cartsReducer } from 'store/carts';

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

worker.start({
  serviceWorker: {
    url: '/react-shopping-cart/mockServiceWorker.js',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
