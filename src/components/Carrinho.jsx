import React from 'react'
import { AgendaContext } from '../Providers/Agenda'
import Style from './Carrinho.module.css'


function Carrinho() {

  const { carrinho } = React.useContext(AgendaContext)
  const totalSoma = 0

  return (<><div className={Style.content}>
  <table class="container table">
  <thead class="table-dark">
    <tr>
      <th>Foto</th>
      <th>Nome</th>
      <th>Data Saida</th>
      <th>Data Retorno</th>          
      <th>Valor</th>  
    </tr>
  </thead>
  <tbody>
  {carrinho
              && carrinho.map((resp) => (
  <tr>
      <td><img src={JSON.parse(resp).destinoFoto} alt={JSON.parse(resp).destinoDescricao}></img></td>
      <td className={Style.descricao}>{JSON.parse(resp).destinoName}</td>
      <td>{parseInt(JSON.parse(resp).destinoData)}</td>
      <td>{parseInt(JSON.parse(resp).destinoRetornoData)}</td>          
      <td>R${parseInt(JSON.parse(resp).destinoValor)}</td>  
    </tr>
    ))}
  </tbody>
</table>
<table class="container table">
  <tbody>
  <tr>
      <th>Cupom Desconto</th>
      <td><form><input type="text"></input><input type="submit"></input></form></td>
    </tr>
    <tr>
      <th>Total</th>
      <td>{totalSoma}</td>
    </tr>
  </tbody>
</table>
</div>
</>)
}

export default Carrinho