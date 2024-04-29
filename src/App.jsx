import "./App.css"
import Card from '../componentes/Card.jsx';
import Usuarios from '../datos/Usuarios.js';

function App() {
  const ListaUsuarios = Usuarios.map((l,index) => {
    return <Card key={index} nombre={l.nNombre} cargo={l.nCargo} />
  });

  return (

      <div className='App'>
        <h1>Hola desde React</h1>
        <div className='container'>
          {ListaUsuarios}
        </div>
      </div>
  )
}

export default App;