import { useState } from 'react'
import StFr from './Components/StFr'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Notfound from './Components/Notfound'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout.jsx'
let router= createHashRouter([
 {path: '/' , element: <Layout/> , children:[
  {index:true , element: <StFr/>},
  {path: 'about' , element: <About/>},
  {path: 'portfolio' , element: <Portfolio/>},
  {path: 'contact' , element: <Contact/>},
  {path: '*' , element: <Notfound/>},
 ]}
]
)
export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
  
  
    </>
  )
}


