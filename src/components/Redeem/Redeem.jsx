import './Redeem.css'
import Card from '../Card/Card';

import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

import pokemons from "../../data/pokemons.json";

function Redeem() {

  const navigate = useNavigate()

  const [redeem, setRedeem] = useState(false)
  const [showPrize, setShowPrize] = useState(false)

  // Pega a data atual
  const hoje = new Date();
  hoje.setMinutes(hoje.getMinutes() - hoje.getTimezoneOffset());
  const dataAtual = hoje.toISOString().split("T")[0];

  const [data, setData] = useState(dataAtual)


  const [numero, setNumero] = useState(2);

  //Números que não podem ser sorteados
  const numerosProibidos = new Set([3, 7, 15, 120, 999]);

  function gerarNumero(){ //Gera um número aleatório
    // const min = 0;
    // const max = 1349;

    // let numeroAleatorio;

    // do {
    //   numeroAleatorio =
    //     Math.floor(Math.random() * (max - min + 1)) + min
    // } while (numerosProibidos.has(numeroAleatorio))

    // setNumero(numeroAleatorio)

    setNumero(2)
    setShowPrize(true)
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
          <input type="date" value={data} onChange={(e) => setData(e.target.value)}/>
          <div className='options'>
            <button onClick={() => {setRedeem(false)}}>Cancelar</button>
            <button onClick={gerarNumero}>Resgatar</button>
          </div>
        </div>

        <div className='yourPrize' style={showPrize ? {} : {display: 'none'}}>
          <p>Parabéns!</p>
          <p>Nova carta desbloqueada</p>
          <Card id={pokemons[numero].id} name={pokemons[numero].name} date={data} img={pokemons[numero].images.sprites.default} types={pokemons[numero].types} text="ABC"/>
          <button onClick={() => {navigate("/")}}>Confirmar</button>
        </div>
      </div>
    </div>
  )
}

export default Redeem
