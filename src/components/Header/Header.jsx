import './Header.css'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
      <div className='container'>
        <div className='logo'>
            <img src="./pokeball.png" alt="" />
            <h2>Focusmon</h2>
        </div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/pokedex">Pokédex</Link>
            <Link to="/resgatar">Resgatar</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
