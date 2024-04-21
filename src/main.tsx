
import ReactDOM from 'react-dom/client'
import { Store } from './redux/store/store.ts'
import { Provider } from "react-redux";
import App from './App.tsx'
import './globals.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
  
  <App />
  
  </Provider>
)