import './MyLastCards.css'

import { MdKeyboardArrowLeft } from "react-icons/md";
import { supabase } from '../../supabaseClient'

import Card from '../Card/Card';

import { useState, useEffect } from 'react';

function MyLastCards() {

  const [myCards, setMyCards] = useState([])
  const [myShinyCards, setMyShinyCards] = useState([])

  useEffect(() => {
    loadItems()
  }, [])

  async function getItems(table) {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .order('date', { ascending: true })

    if (error) {
      console.log(error)
    }

    return data
  }

  async function loadItems() {
    const data = await getItems("MyCards") //Todos os cards normais
    const data2 = await getItems("MyShinyCards") //Todos os cards shiny
    setMyCards(data)
    setMyShinyCards(data2)
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

            {myShinyCards ? myShinyCards.map((cardInfo) => (
              <Card key={cardInfo.id} id={cardInfo.id} date={cardInfo.date} text={cardInfo.text} shiny={true}/>
            )) : (<p>Não foi possivel carregar as cartas</p>)}
          </div>
        </div>
    </div>
  )
}

export default MyLastCards
