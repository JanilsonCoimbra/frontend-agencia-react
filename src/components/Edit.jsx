import React, { useRef } from "react"
import { useParams } from "react-router-dom"
import api from "../api"

export default function Edit() {
    const { id } = useParams()
    const nome = useRef()
    const descricao = useRef()
    const valor = useRef()
    const foto = useRef()
    const datasaida = useRef()
    const dataretorno = useRef()

    function EditDestino(e){
        e.preventDefault()
        const conf = window.confirm("Deseja exluir Editar?")
        if(conf){
            api.put("/destinos/edit",{
                destinoId: id,
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
        <label>ID Destino</label>
        <input type="number" value={id} disable></input>
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
        <input type="Submit" onClick={(e)=> EditDestino(e)}></input>
    </form>
    </div>
    </>)
}