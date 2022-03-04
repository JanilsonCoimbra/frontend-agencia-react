import styles from './destinos.module.css'
import Cards from './Cards'
import api from '../api'
import { useState } from 'react'
import { useEffect } from 'react'
import { Alert } from '@mui/material'
function Destinos() {
    const [destinos, setDestino] = useState([])
    useEffect(() => {
        api.get('/destinos').then((res) => { setDestino(res.data) }).catch((err) => (Alert(err)))
    }, [])

    return (
        <section className={styles.secoes}>
            {destinos &&
                destinos.map((opcoes) =>
                    <Cards title={opcoes.destinoName} informacoes={opcoes.destinoDescricao} img={opcoes.destinoFoto} data={opcoes.destinoData} volta={opcoes.destinoRetornoData} destinoId={opcoes.destinoId}></Cards>
                )
            }

        </section>
        
    )
}
export default Destinos






