import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed)str+="!@#$%^&*()-_=+[]{}~`"

    for(let i=1; i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    generatePassword()
  },[length, numberAllowed, charAllowed, generatePassword])

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  

  return (
    <div className='bg-gray-700 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-80 text-orange-500'>
      <h1 className='text-white text-center my-3'>
        Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          placeholder='password'
          readOnly
          className='outline-none w-full py-1 px-3'
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard} 
        className='outline-none bg-green-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex items-center gap-x-3'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
            className='cursor-pointer'
            min={8}
            max={40}
            value={length}
            onChange={(e) => setLength(e.target.value)}

          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            value={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }
            }
          />
          <label htmlFor="length">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
            value={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }
            }
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
