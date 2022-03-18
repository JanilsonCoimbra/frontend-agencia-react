import styles from './Cadastro.module.css'
import { Suspense } from 'react/cjs/react.production.min'
import Load from './Load'
import { Accordion, ListGroup } from 'react-bootstrap'
import api from '../api'
import { memo, useState, useContext, useEffect } from 'react'
import { AgendaContext } from '../Providers/Agenda'
import EditarMensagens from './EditarMensagens'

function Cadastro() {
  const [mensagens, setMensagens] = useState([])
  const { setPainelState } = useContext(AgendaContext)
  useEffect(() => {
    api.get("/contato").then((resp) => setMensagens(resp.data.content)).catch(err => alert(err))
  }, [])
  function DeleteMensagem(id) {
    api.delete(`/contato/${id}`).catch(err => alert(err))
  }
  function openCadastro() {
    setPainelState()
  }
  //-------------------------------------------

  return (<><section className={styles.cadastro}>
    <header className={styles.headerBox} onClick={openCadastro}>Box de informações</header>
    <Suspense fallback={<Load />}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ver Mensagens</Accordion.Header>
          <Accordion.Body>
            <ListGroup.Item as="li" className="d-block justify-content-between align-items-start">
              {mensagens.map((res) =>
                <ListGroup.Item as="li" className="d-flex w-100 justify-content-between align-items-start">
                  <div className="ms-2 me-auto d-flex w-100 justify-content-between flex-wrap">
                    <div>
                      
                      <div className="fw-bold">{res.nome}<sup>{res.id}</sup></div>
                      <div>{res.Email}</div>
                      <div>{res.mensagem}</div>
                    </div>
                    <div className='d-flex flex-column'>
                      <div className={styles.icons}><span className="material-icons" onClick={(e) => DeleteMensagem(res.id)}>delete</span></div>
                    </div>
                    <Accordion defaultActiveKey="1" flush className='w-100 p-0'>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header >Editar Mensagem<sup>{res.id}</sup></Accordion.Header>
                        <Accordion.Body>
                            <EditarMensagens idMensagem={res.id} nome={res.nome} email={res.Email} mensagem={res.mensagem}></EditarMensagens>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </ListGroup.Item>)}
            </ListGroup.Item>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Suspense>
  </section>
  </>)
}
export const CadastroStado = memo(Cadastro)