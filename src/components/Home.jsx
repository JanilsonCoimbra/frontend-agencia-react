import styles from './Home.module.css'
import Cards from './Cards'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import api from '../api'
import { useEffect, useState } from 'react'

function Main() {
    AOS.init();
    const urlSeach = "/destinos?page=0&size=3"
    const [cardStatus, setCardStatus] = useState(true)
    const [destinos, setDestino] = useState([])
    useEffect(() => {
        api.get(urlSeach).then((res) => ([setDestino(res.data.content), setCardStatus(false)])).catch((err) => (alert(err)))
    }, [])
    return (
        <>
            <div className={styles.imgBanner}>
                <h1>Você acaba de descobrir a melhor forma de viajar</h1>
                <p>Viage para os melhores destinos da Bahia</p>
                <Link to="/Destinos" className="btn waves waves-teal">Destinos</Link>
            </div>
            <section className={styles.sections1}>
                <h3 className={styles.titulo}>Escolha os melhores pontos da Bahia</h3>
                {destinos.map((opcoes) => <Cards title={opcoes.destinoName} informacoes={opcoes.destinoDescricao} img={opcoes.destinoFoto} data={opcoes.destinoData} volta={opcoes.destinoRetornoData} destinoId={opcoes.destinoId}></Cards>)}
            </section>
            <section className={styles.sections2}>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"><img src="../img/undraw_Exploring_re_grb8@2x.png" alt="" /></div>
                <p data-aos="fade-down-right">Viagem com segurança para os melhores destinos</p>
            </section>
            <section className={styles.sections}>
                <p data-aos="fade-down-right">Não se preoculpe vamos cuidar da sua viagem</p>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"><img src="../img/undraw_World_re_768g.png" alt="" /></div>
            </section>
        </>
    )
}
export default Main