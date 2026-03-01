import './App.css'
import Layout from './components/Layout/Layout'
import MyLastCards from './components/MyLastCards/MyLastCards'
import Pokedex from './components/Pokedex/Pokedex'
import Redeem from './components/Redeem/Redeem'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MyLastCards />}/>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/resgatar' element={<Redeem />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
