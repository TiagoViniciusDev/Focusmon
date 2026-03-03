import './Card.css'

import pokemon from "../../data/pokemons.json"

function Card({id, date, text}){

  // {id, name, date, img, types, text}

  // let {name, img, types} = pokemon[id - 1]

  let name = pokemon[id - 1].name
  let img = pokemon[id - 1].images.sprites.default
  let types = pokemon[id - 1].types

  let pokemonNumber

  if(id < 10){
    pokemonNumber = `#000${id}` //#0009
  } else if(id < 100){
    pokemonNumber = `#00${id}` //#0099
  } else if(id < 1000){
    pokemonNumber = `#0${id}` //#0999
  } else{
    pokemonNumber = `#${id}` //#9999
  }

  let typeColor = {
    "normal": "#A8A77A",
    "fighting": "#C22E28",
    "flying": "#A98FF3",
    "poison": "#A33EA1",
    "ground": "#E2BF65",
    "rock": "#B6A136",
    "bug": "#A6B91A",
    "ghost": "#735797",
    "steel": "#B7B7CE",
    "fire": "#EE8130",
    "water": "#6390F0",
    "grass": "#7AC74C",
    "electric": "#F7D02C",
    "psychic": "#F95587",
    "ice": "#96D9D6",
    "dragon": "#6F35FC",
    "dark": "#705746",
    "fairy": "#D685AD",
    "stellar": "#4466FF",
    "unknown": "#6E6E6E"
  }

  return (
    <div className='Card'>
        <p className='date'>{date}</p>
        <img src={img} alt="Bulbasaur" />
        <div className='info'>
            <div className='headerInfo'>
                <p>{name}</p>
                <p>{pokemonNumber}</p>
            </div>
            <div className='types'>
                {types.map((type) => (
                    <p key={type} style={{backgroundColor: typeColor[type.toLowerCase()]}}>{type}</p>
                ))}
            </div>
        </div>
        <div className='textCard'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Card
