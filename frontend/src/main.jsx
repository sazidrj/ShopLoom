import App from './App.jsx'
import ReactDOM from'react-dom/client';
import './index.css'
import {Provider} from 'react-redux';
import Store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={Store}>
    <App />
  </Provider>,
);
