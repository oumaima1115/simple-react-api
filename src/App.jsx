import './App.css' //activation
// import  Header  from './components/Header.jsx'
// import { Restaurant } from './components/Restaurant.jsx'
// import Home, { Event, EventHandle, Counter, CounterState, CounterStateEffect } from './components/Exemple1.jsx'
// import { Counter } from './components/Counter.jsx'
// import Car from './components/Car.jsx'
// import { CounterState } from './components/Exemple1.jsx'
// import { Event } from './components/Exemple1.jsx'
// import { EventHandle } from './components/Exemple1.jsx'
// import CarManagment from './components/CarManagement.jsx'
// import CarManagment from './components/CarManage.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import PrivateRoute from "./PrivateRoute"
import { useState } from "react";
import Dashboard from "./Pages/Dashboard"
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";

function App() {
  //Partie 1: logique + functions + consoles
  //Partie 2: affichage html + js + CSS 
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>

      {/* <Home /> */}
      {/* <Header /> */}
      {/* <Restaurant /> */}
      {/* <Event/> */}
      {/* <EventHandle/> */}
      {/* <Counter/> */}
      {/* <CounterState/> */}
      {/* <CounterStateEffect/> */}
      {/* <Car/> */}
      {/* <CarManagment /> */}


      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

          <Route
            path="/"
            element={
              <Home isAuth={isAuth} setIsAuth={setIsAuth} />
            }
          />
          <Route path="/products"
            element={
              <PrivateRoute isAuth={isAuth}>
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ProductDetails />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    
    </>
  )
}

export { App as default };