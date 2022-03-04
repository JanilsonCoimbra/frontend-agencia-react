import styles from './Cards.module.css'
import { agendaStore } from '../stores/agendaStore'
import { Suspense } from 'react'
import Load from './Load'

function Cards(props) {
    function adicionarAgenda() {
        agendaStore.dispatch({ type: props.destinoId})
    }
    return (
        <>
            <div className={styles.tamanho}>
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <Suspense fallback={<Load/>}>
                            <img className="activator" src={props.img} alt=""/>
                        </Suspense>
                       
                    </div>
                    <div className="card-content align-items-center" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
                        <p><sup>Codigo: BH{props.destinoId}</sup></p>
                        <hr></hr>
                        <div className='row'>
                            <div className='bg-primary text-center col-5 text-white rounded-3 rounded-pill'><i className="material-icons">flight_takeoff</i><p>{props.data.split("T")[0]}<span className='d-block'><sup>Saída</sup></span></p></div>
                            <div className='col-2'><i className="material-icons mt-4">connecting_airports</i></div>
                            <div className='bg-info text-center col-5 text-white rounded-pill'><i className="material-icons">flight_land</i><p>{props.volta.split("T")[0]}<span className='d-block'><sup>Retorno</sup></span></p></div>
                        </div>
                        <p><a href="#id" className='activator'>Mais informações</a></p>

                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
                        <p>{props.informacoes}</p>
                        <p><sup>Saída: {props.data.split("T")[0]}</sup></p>
                        <p><sup>Retorno: {props.volta.split("T")[0]}</sup></p>
                        <a href="#id" className='btn' onClick={() => adicionarAgenda()}>Adicionar a Agenda</a>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Cards