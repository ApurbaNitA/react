import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl bg-red-500 p-5 rounded-md'>Vite with Tailwind</h1>
    <Card username="Apurba" designation="SWE" image="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"/>
    <Card username="Sayan" designation="SDE"/>
    <Card />
    </>
  )
}

export default App
