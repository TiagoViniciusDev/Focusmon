import './MyLastCards.css'

import { MdKeyboardArrowLeft } from "react-icons/md";
import { supabase } from '../../supabaseClient'

import Card from '../Card/Card';

import { useState, useEffect } from 'react';

function MyLastCards() {

  const [myCards, setMyCards] = useState([])

  useEffect(() => {
    loadItems()
  }, [])

  async function getItems() {
    const { data, error } = await supabase
      .from('MyCards')
      .select('*')
      .order('id', { ascending: true })

    if (error) {
      console.log(error)
    }

    return data
  }

  async function loadItems() {
    const data = await getItems()
    setMyCards(data)
  }

  // console.log(myCards)

  return (
    <div className='MyLastCards'>
        <div className='container'>
          <div className='monthSelect'>
            <div className='iconContainer'><MdKeyboardArrowLeft /></div>
            <p>Fevereiro</p>
            <div className='iconContainer'><MdKeyboardArrowLeft /></div>
          </div>

          <div className='cards'>
            {myCards ? myCards.map((cardInfo) => (
              <Card key={cardInfo.id} id={cardInfo.id} date={cardInfo.date} text={cardInfo.text}/>
            )) : (<p>Não foi possivel carregar as cartas</p>)}
          </div>
        </div>
    </div>
  )
}

export default MyLastCards
