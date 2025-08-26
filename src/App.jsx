import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashborad'
import Dashboard2 from './components/Dashboard2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <Dashboard /> */}
      <Dashboard2 />
    </>
  )
}

export default App
