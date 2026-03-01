import './MyLastCards.css'

import { MdKeyboardArrowLeft } from "react-icons/md";

import Card from '../Card/Card';

function MyLastCards() {
  return (
    <div className='MyLastCards'>
        <div className='container'>
          <div className='monthSelect'>
            <div className='iconContainer'><MdKeyboardArrowLeft /></div>
            <p>Fevereiro</p>
            <div className='iconContainer'><MdKeyboardArrowLeft /></div>
          </div>

          <div className='cards'>
            <Card id={1} name="Bulbasaur" date="28/02/2026" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" types={["Grass", "Posion"]} text="ABC"/>
            <Card id={1} name="Bulbasaur" date="28/02/2026" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" types={["Grass", "Posion"]} text="ABC"/>
            <Card id={1} name="Bulbasaur" date="28/02/2026" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" types={["Grass", "Posion"]} text="ABC"/>
            <Card id={1} name="Bulbasaur" date="28/02/2026" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" types={["Grass", "Posion"]} text="ABC"/>
            <Card id={1} name="Bulbasaur" date="28/02/2026" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" types={["Grass", "Posion"]} text="ABC"/>
            <Card id={1} name="Bulbasaur" date="28/02/2026" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" types={["Grass", "Posion"]} text="ABC"/>
            <Card id={1} name="Bulbasaur" date="28/02/2026" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" types={["Grass", "Posion"]} text="ABC"/>
          </div>

        </div>
    </div>
  )
}

export default MyLastCards
