import { useRef } from 'react'
import styles from './Contatos.module.css'
import api from '../api'



function Contatos() {

    const name = useRef()
    const email = useRef()
    const mensagem = useRef()

    function enviarMensagem(e) {
        e.preventDefault()
        if (name) {
            if(mensagem){
                if (email.current.value.trim().indexOf('@') > -1) {
                    api.post("/contato/enviar/", {
                        nome: name.current.value.trim(),
                        Email: email.current.value.trim(),
                        Mensagem: mensagem.current.value.trim()
                    }).then(alert("Mensagem enviada com sucesso!")).catch(err => alert(err))
                }else{
                    alert("Preencher email valido")
                }
            }else{
                alert("preencher mesagem")
            }
            
        } else {
            alert("Preenche os nome")
        }
    }
    return (<>
        <section className={styles.contatos}>
            <form className='row'>
                <div className="mb-3 col-11">
                    <label for="exampleInputname" className="form-label">Nome</label>
                    <input type="name" className="form-control" id="exampleInputname" ref={name} required />
                </div>
                <div className="mb-3 col-11">
                    <label for="exampleInputname" className="form-label">Nome</label>
                    <input type="email" className="form-control" id="exampleInputname" ref={email} required />
                </div>
                <div className="mb-3 col-11">
                    <label for="exampleInputEmail1" className="form-label">Mensagem</label>
                    <textarea className="form-text" id="exampleCheck1" ref={mensagem} required />
                </div>
                <button type="submit" className="btn btn-primary col-11" onClick={e => enviarMensagem(e)}>Submit</button>
            </form>
        </section>
    </>)
}
export default Contatos