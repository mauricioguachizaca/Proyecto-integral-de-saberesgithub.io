import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import EnhancedTable from './EnhancedTableHead.jsx'

function Medidor() {
  const { cerrar } = useAuth(); // Accede al contexto de autenticación y obtén el usuario


  return (
    <div className="bg-blue-gray-50 flex flex-col min-h-screen">
      <nav className='bg-blue-gray-900 justify-center align'>
        <button className='bg-light-blue-200 ml-5 mr-10'>
          <Link>Editar mi perfil</Link>
        </button>
      {/* Muestra el nombre de usuario si está disponible */}
        <button className='bg-purple-300 ml-5 mr-10 '>
          <Link to="/" onClick={() => { cerrar() }}>Cerrar sesión</Link>
        </button>
        </nav>
      <div className="flex justify-between items-center px-4 mt-16">
        <h1 className="text-2xl ml-4">Mis dispositivos</h1>
        <div>
          <button className='bg-teal-700 mr-4'>
            <Link to="/agregarmedidor" >Agregar dispositivo</Link>
          </button>
          <button className='bg-teal-700 mr-4'>Mi último consumo</button>
        </div>
      </div>
      <div className="flex-grow mx-6 my-6">
        <EnhancedTable />
        <button className='ml-2 bg-deep-orange-500'>
          <Link to="/mostrar">
          Calcular mi consumo 
          </Link>
          </button>
      </div>
    </div>
  );
}

export default Medidor;
