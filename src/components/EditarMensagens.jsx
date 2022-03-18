import { useRef } from 'react'
import styles from './Contatos.module.css'
import api from '../api'



function EditarMensagens(props) {

    let name = useRef()
    let email = useRef()
    let mensagem = useRef()

    function enviarMensagem(e) {
        e.preventDefault()
        if (name) {
            if(mensagem){
                if (email.current.value.trim().indexOf('@') > -1) {
                    api.put("/contato/edit", {
                        id: props.idMensagem,
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
                    <input type="name" className="form-control" id="exampleInputname" ref={name} required placeholder={props.nome}/>
                </div>
                <div className="mb-3 col-11">
                    <label for="exampleInputname" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputnames" ref={email} required placeholder={props.email}/>
                </div>
                <div className="mb-3 col-11">
                    <label for="exampleInputEmail1" className="form-label">Mensagem</label>
                    <textarea className="form-text" id="exampleCheck1" ref={mensagem} required placeholder={props.mensagem}/>
                </div>
                <button type="submit" className="btn btn-primary col-11" onClick={e => enviarMensagem(e)}>Enviar</button>
            </form>
        </section>
    </>)
}
export default EditarMensagens