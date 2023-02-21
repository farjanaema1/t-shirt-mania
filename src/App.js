
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './home/home';
import Main from './layout/main';
import Order from './order/order';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
     
      element:<Main></Main>,
      children:[
        {
          path:'/',
          
          element:<Home></Home>
        },
        {
        path:'/order',
        loader: () =>{
         return fetch('tshirt.json')
        },
        element:<Order></Order>
        }
      ]
      
    },
   
    

  ])
  return (
    <div className="App">
      <RouterProvider router ={router}></RouterProvider>
    </div>
  );
}

export default App;
