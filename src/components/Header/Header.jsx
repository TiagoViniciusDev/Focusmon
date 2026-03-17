import './Header.css'

import { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';

import { Link } from 'react-router-dom'

import { MdOutlineFlipCameraAndroid } from "react-icons/md";

function Header() {

  const {flip, setFlip} = useContext(GlobalContext)
  console.log(flip)

  return (
    <div className='Header'>
      <div className='container'>
        <div className='logo'>
            <img src="./pokeball.png" alt="" />
            <h2>Focusmon</h2>
        </div>
        <div className='buttons'>
          <MdOutlineFlipCameraAndroid onClick={() => {setFlip(!flip)}}/>
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
