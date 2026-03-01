import './Card.css'

function Card({id, name, date, img, types, text}){

  console.log(name)
  return (
    <div className='Card'>
        <p className='date'>{date}</p>
        <img src={img} alt="Bulbasaur" />
        <div className='info'>
            <div className='headerInfo'>
                <p>{name}</p>
                <p>#00{id}</p>
            </div>
            <div className='types'>
                <p>{types[0]}</p>
                <p>{types[1]}</p>
            </div>
        </div>
        <div className='textCard'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Card
