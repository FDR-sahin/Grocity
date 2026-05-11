import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
//import Process from './components/Process/Process.jsx'
import ProcessDas from './Pages/ProcessDas/ProcessDas.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Fruits from './Pages/Fruits/Fruits.jsx'
import Dairy from './Pages/Dairy/Dairy.jsx'
import Seefoods from './Pages/Seefoods/Seefoods.jsx'
import  AiFillProduct  from './Pages/AllProduct/AllProduct.jsx'
import ShopePage from './Pages/ShopePage/ShopePage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'processdas',
        element: <ProcessDas/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'fruits',
        element: <Fruits />
      },
      {
        path: 'dairy',
        element: <Dairy/>
      },
      {
        path: 'seefoods',
        element: <Seefoods/>
      },
      {
        path: 'allproduct',
        element: <AiFillProduct/>
      },
      {
        path: 'shopepage',
        element: <ShopePage/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);





// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
