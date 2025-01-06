import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Notfound from './components/Notfound/Notfound'
import Portfolio from './components/Portfolio/Portfolio'


let x =createBrowserRouter([
  {path :"" , element : <Layout/>, children:[
    {index:true ,element:<Home/>},
    {path:"ABOUT",element:<About/>},
    {path:"Contact",element:<Contact/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"*",element:<Notfound/>}
  ]},
])
function App() {
  const [count, setCount] = useState(0)

  return (
   <RouterProvider router={x}></RouterProvider>
  )
}

export default App
