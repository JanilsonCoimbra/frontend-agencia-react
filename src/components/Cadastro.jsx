import styles from './Cadastro.module.css'
import { Suspense } from 'react/cjs/react.production.min'
import Load from './Load'
import { Accordion, Form, Button, ListGroup } from 'react-bootstrap'
import api from '../api'
import { useState } from 'react'

function Cadastro(props) {
  const [mensagens, setMensagens] = useState([])
  api.get("/contato").then((resp) => setMensagens(resp.data.content)).catch(err => alert(err))
  return (<><section className={styles.cadastro}>
    <header className={styles.headerBox}>Box de informações</header>
    <Suspense fallback={<Load />}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ver Mensagens</Accordion.Header>
          <Accordion.Body>
            <ListGroup.Item as="li" className="d-block justify-content-between align-items-start">
              {mensagens.map((res) =><ListGroup.Item as="li" className="d-flex w-100 justify-content-between align-items-start"><div className="ms-2 me-auto"><div className="fw-bold">{res.nome}</div>{res.mensagem}</div></ListGroup.Item>
)}
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
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Nome do Destino" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Nome do Destino" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
export default Cadastro