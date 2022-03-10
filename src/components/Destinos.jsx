import styles from './destinos.module.css'
import api from '../api'
import {useState } from 'react'
import { useEffect } from 'react'
import { Alert } from '@mui/material'
import Load from './Load'
import Cards from './Cards'

function Destinos() {
    const [cardStatus, setCardStatus] = useState(true)

    const [destinos, setDestino] = useState([])
    useEffect(() => {
        api.get('/destinos').then((res) => ([setDestino(res.data), setCardStatus(false)])).catch((err) => (Alert(err)))
    }, [])

    return (
        <section className={styles.secoes}>
            {!cardStatus 
            ?destinos.map((opcoes) =><Cards title={opcoes.destinoName} informacoes={opcoes.destinoDescricao} img={opcoes.destinoFoto} data={opcoes.destinoData} volta={opcoes.destinoRetornoData} destinoId={opcoes.destinoId}></Cards>)
            :<Load></Load>
            }
        </section>
    )
}
export default Destinos






