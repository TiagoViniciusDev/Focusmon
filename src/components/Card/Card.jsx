import './Card.css'

function Card({id, name, date, img, types, text}){

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
                    <p key={type}>{type}</p>
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
