import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'


import Layout from './Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import ProcessDas from './Pages/ProcessDas/ProcessDas.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Fruits from './Pages/Fruits/Fruits.jsx'
import Dairy from './Pages/Dairy/Dairy.jsx'
import Seefoods from './Pages/Seefoods/Seefoods.jsx'
import AllProduct from './Pages/AllProduct/AllProduct.jsx'
import ShopePage from './Pages/ShopePage/ShopePage.jsx'
import AddToCart from './Pages/AddTocart/AddToCart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'processdas',
        element: <ProcessDas />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'fruits',
        element: <Fruits />
      },
      {
        path: 'dairy',
        element: <Dairy />
      },
      {
        path: 'seefoods',
        element: <Seefoods />
      },
      {
        path: 'allproduct',
        element: <AllProduct />
      },
      {
        path: 'shopepage',
        element: <ShopePage />
      },
      {
        path: 'addtocart',
        element:<AddToCart/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)