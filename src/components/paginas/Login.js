import React, {useState} from 'react';
import logo from './img/logo.png'
import { Link, useParams,useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Login = () => {
   
    // Hook para redireccionar
   const navigate = useNavigate();
  
    const [mensaje, guardarMensaje] = useState(null);

   // Mutation para crear nuevos usuarios en apollo


   const formik = useFormik({
       initialValues: {
           email: '',
           password: ''
       }, 
       validationSchema: Yup.object({
           email: Yup.string()
                       .email('Email no válido')
                       .required('El email no puede ir vacio'),
           password: Yup.string()
                       .required('Password obligatorio')
       }), 
       onSubmit: async valores => {
         
        navigate('/index');

       
       }
   })    
   
   
   return( 
        <>
            <div className="bg-gray-300 min-h-screen flex flex-col justify-center">
            <img src={logo} className="img-fluid mx-auto d-block rounded" alt=""   />
            <h1 className="text-center text-2xl text-blue font-light">Login</h1>
            


<div className="flex justify-center mt-5">
    <div className="w-full max-w-sm">
        <form
            className="bg-blue-700 rounded shadow-md px-8 pt-6 pb-8 mb-4"
            onSubmit={formik.handleSubmit}
        >
            <div className="mb-4">
                <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>

                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email Usuario"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </div>

            { formik.touched.email && formik.errors.email ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" >
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.email}</p>
                </div>
            ) : null  }

            <div className="mb-4">
                <label className="block text-white-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>

                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password Usuario"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
            </div>

            { formik.touched.password && formik.errors.password ? (
                <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" >
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.password}</p>
                </div>
            ) : null  }

            <input
                type="submit"
                className="bg-gray-800 w-full mt-5 p-2 text-white uppercas hover:cursor-pointer hover:bg-gray-900"
                value="Iniciar Sesión"
            />

        </form>
    </div>
</div>

            </div>
        
     
        </>
     );
}
 
export default Login;