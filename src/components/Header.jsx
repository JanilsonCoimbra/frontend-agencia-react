import { Link } from 'react-router-dom'
import styles from './header.module.css'
import IconeAgenda from './IconeAgenda'
import { Navbar, Container, Form, FormControl, Nav, Button } from 'react-bootstrap'

function Header(props) {

    return (<><div className={styles.topo}>
    <Navbar bg="light h-100" expand="lg" >
        <Container fluid className="justify-content">
            <Navbar.Brand href="#"><img className={styles.img} src='./img/logo.png' alt=""/></Navbar.Brand>
            <IconeAgenda notific={props.notific}/>
            <Navbar.Toggle aria-controls="navbarScroll" />
            
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 W-100 p-0"
                    style={{ maxHeight: '550px' }}
                    navbarScroll
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-light w-100">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Destinos">Destinos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Quemsomos">Quem Somos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Contatos">Contatos</Link>
                                </li>   
                                <li>
                                
                                </li>                          
                            </ul>
                </Nav>
                
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
    </div>
    <div className={styles.topoFundo}></div>
    </>
    )
}
export default Header