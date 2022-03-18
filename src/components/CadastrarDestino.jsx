import React, { useRef } from "react"
import api from "../api"

export default function CadastrarDestino() {
    const nome = useRef()
    const descricao = useRef()
    const valor = useRef()
    const foto = useRef()
    const datasaida = useRef()
    const dataretorno = useRef()

    function SalvarDestino(e){
        e.preventDefault()
        const conf = window.confirm("Deseja exluir Editar?")
        if(conf){
            api.post("/destinos/",{
                destinoName: nome.current.value,
                destinoDescricao: descricao.current.value,
                destinoValor: valor.current.value,
                destinoFoto: foto.current.value,
                destinoData: datasaida.current.value,
                destinoRetornoData: dataretorno.current.value            
            }).catch(err => alert(err))
        }else{
            alert("Mantemos os valores")
        }
    }
    return (<><div className="container mt-5 mb-5">
    <form>
        <label>Nome</label>
        <input type="text" ref={nome}></input>
        <label>Descrição</label>
        <input type="text" ref={descricao}></input>
        <label>Valor</label>
        <input type="number" ref={valor}></input>
        <label>Foto (URL)</label>
        <input type="text" ref={foto}></input>
        <label>Data Saida</label>
        <input type="Date" ref={datasaida}></input>
        <label>Data Retorno</label>
        <input type="Date" ref={dataretorno}></input>
        <input type="Submit" onClick={(e)=> SalvarDestino(e)}></input>
    </form>
    </div>
    </>)
}