import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import ContextProvider from './Context.jsx';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
