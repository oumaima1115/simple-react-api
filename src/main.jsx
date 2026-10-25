import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
// import Ajout from "./Test.jsx"
// import Home from "./Pages/Home2.jsx"
// import {Navbar} from "./components/Greeting.jsx"

import CarManagment from './components/CarManagement.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)