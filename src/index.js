import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterStore from './stores/counter'; 

const counter = new CounterStore(); // 스토어 인스턴스를 만들고

ReactDOM.render(
  <Provider counter={counter}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();