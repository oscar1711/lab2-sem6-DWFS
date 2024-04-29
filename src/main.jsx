import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Usuarios from '../datos/Usuarios.js'
import Usuariosvista from '../vistas/UsuariosVistas.jsx'
// importamos el router
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router =  [
  {
    path:"/",
    element: <App/>
  },
];
Usuarios.forEach((len) =>{
  router.push({
    path: len.nNombre,
    element: <Usuariosvista len = {len}/>

  });
});
const routes =createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {routes}/>
  </React.StrictMode>,
)