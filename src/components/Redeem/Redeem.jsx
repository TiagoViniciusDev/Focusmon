import './Redeem.css'
import Card from '../Card/Card';

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { supabase } from '../../supabaseClient'

function Redeem() {

  const navigate = useNavigate()

  const [redeem, setRedeem] = useState(false)
  const [showPrize, setShowPrize] = useState(false)
  const [currentDate, setCurrentDate] = useState()
  const [numero, setNumero] = useState(null)
  const [allShinyCards, setAllShinyCards] = useState()

  useEffect(() => {
    getCurrentDate()
    getAllShiny()
  },[])

  //Números que não podem ser sorteados (cartas shiny)
  //Se o id de uma carta for sorteado pela segunda vez você recebe essa carta na versão shiny
  //Se você já tiver uma carta shiny significa que ela já foi sorteada 2 vezes e não pode mais ser sorteada
  const numerosProibidos = new Set(allShinyCards);

  function gerarNumero(){ //Gera um número aleatório
    const min = 1;
    const max = 1024;

    let numeroAleatorio;

    do {
      numeroAleatorio =
        Math.floor(Math.random() * (max - min + 1)) + min
    } while (numerosProibidos.has(numeroAleatorio))

    setNumero(numeroAleatorio)

    handleCheck()

    async function handleCheck() {
      const exists = await checkIfExists(numeroAleatorio)

      let table

      if (exists) {
        console.log("ID já existe no banco")
        table = "MyShinyCards"
      } else {
        console.log("ID não existe")
        table = "MyCards"
      }

      addItem({
        "id": numeroAleatorio,
        "date": currentDate, 
        "text": "ABC"
      }, table)
    }

    setShowPrize(true)
  }

  async function addItem(item, table) { //Adiciona a base de dados
    const { data, error } = await supabase
      .from(table)
      .insert([item])

    if (error) {
      console.log("Erro:", error.message)
      alert("Erro ao resgatar carta")
    }

    return data
  }

  async function getAllShiny(){
    const { data, error } = await supabase.from('MyShinyCards').select('id').order('id', { ascending: true })

      if (error) {
        console.log(error)
        alert("Erro ao carregar pokemons shiny")
      }

      // transforma em array simples
      const shinyIds = data.map(item => item.id)

      setAllShinyCards(shinyIds)
    }

  // Pega a data atual
  function getCurrentDate(){
    const hoje = new Date();
    hoje.setMinutes(hoje.getMinutes() - hoje.getTimezoneOffset());
    const dataAtual = hoje.toISOString().split("T")[0];
    setCurrentDate(dataAtual)
  }

  //Verifica se o id existe no banco
  async function checkIfExists(cardId) {
    const { data, error } = await supabase
      .from('MyCards')
      .select('id')
      .eq('id', cardId)
      .limit(1)

    if (error) {
      console.log(error)
      return false
    }

    return data.length > 0
  }

  return (
    <div className='Redeem'>
      <div className='container'>
        <div className='question' style={redeem ? {display: 'none'} : {}}>
          <p>Completou sua meta e quer resgatar seu pokémon ?</p>
          <button onClick={() => {setRedeem(true)}}>Resgatar</button>
        </div>

        <div className='confirmation question' style={redeem ? (showPrize ? {display: 'none'} : {}) : {display: 'none'}}>
          <p>Selecione o dia de resgate</p>
          <input type="date" value={currentDate} onChange={(e) => setCurrentDate(e.target.value)}/>
          <div className='options'>
            <button onClick={() => {setRedeem(false)}}>Cancelar</button>
            <button onClick={gerarNumero}>Resgatar</button>
          </div>
        </div>

        <div className='yourPrize' style={showPrize ? {} : {display: 'none'}}>
          <p>Parabéns!</p>
          <p>Nova carta desbloqueada</p>
          {numero ? (<Card id={numero} date={currentDate} text="ABC"/>) : (<p>Não foi possivel carregar sua carta</p>)}
          <button onClick={() => {navigate("/")}}>Confirmar</button>
        </div>
      </div>
    </div>
  )
}

export default Redeem
