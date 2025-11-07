import { Route, Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu/Menu'
import Home from './views/Home/Home'
import Recipes from './views/Recipes/Recipes'

function App() {

  return (
    <>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </>
  )
}

export default App
