import styles from './Cadastro.module.css'
import { Suspense } from 'react/cjs/react.production.min'
import Load from './Load'
import { Accordion, Form, Button, ListGroup } from 'react-bootstrap'
import api from '../api'
import {memo, useState, useContext } from 'react'
import { AgendaContext } from '../Providers/Agenda'

function Cadastro() {
  const [mensagens, setMensagens] = useState([])
  const {setPainelState } = useContext(AgendaContext)
  api.get("/contato").then((resp) => setMensagens(resp.data.content)).catch(err => alert(err))
  function DeleteMensagem(id){
    api.delete(`/contato/${id}`).catch(err => alert(err))
  }
  function openCadastro() {
    setPainelState()
}
  return (<><section className={styles.cadastro}>
    <header className={styles.headerBox} onClick={openCadastro}>Box de informações</header>
    <Suspense fallback={<Load />}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ver Mensagens</Accordion.Header>
          <Accordion.Body>
            <ListGroup.Item as="li" className="d-block justify-content-between align-items-start">
              {mensagens.map((res) =><ListGroup.Item as="li" className="d-flex w-100 justify-content-between align-items-start"><div className="ms-2 me-auto"><div className="fw-bold">{res.nome}</div>{res.mensagem}<div onClick={(e)=> DeleteMensagem(res.id)}>Excluir</div></div></ListGroup.Item>)}
            </ListGroup.Item>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Cadastrar Destinos</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Destino</Form.Label>
                <Form.Control type="email" placeholder="Nome do Destino" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Descrição</Form.Label>
                <Form.Control type="email" placeholder="Descrição" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Valor</Form.Label>
                <Form.Control type="Number" placeholder="Valor" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Foto</Form.Label>
                <Form.Control type="Number" placeholder="Foto" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Data Saida</Form.Label>
                <Form.Control type="Number" placeholder="Data" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDate">
                <Form.Label>Data Retorno</Form.Label>
                <Form.Control type="Number" placeholder="Data" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Suspense>
  </section>
  </>)
}
export const CadastroStado =  memo(Cadastro)