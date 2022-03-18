import styles from './BtnFloat.module.css'
import { useContext } from 'react'
import { AgendaContext } from '../Providers/Agenda'

function BtnFloat() {
    const {setPainelState } = useContext(AgendaContext)
    function openCadastro() {
        setPainelState()
    }
    return (<>
       <div onClick={openCadastro} className={styles.btn}><img src='./img/aviao.png' alt=""></img></div>

    </>)
}
export default BtnFloat