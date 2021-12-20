import React from 'react';
import logo from './img2/logo2.png'
import { NavLink } from 'react-router-dom';	

const Sidebar = () => {

   
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-blue-500">
            <img src={logo} className="img-fluid mx-auto d-block rounded" alt=""   />
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">CASA LIMPIA</p>

                <p className="mt-3 text-black-600">Escoge una de las siguientes opciones:</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block hover:bg-yellow-200 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-green-300 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-pink-300 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-gray-400 block hover:bg-purple-600 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;