import Header from './components/Header'
import Rodape from './components/Rodape.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import Load from './components/Load'
import BtnFloat from './components/BtnFloat'
import { useState } from 'react'
import { store } from './stores/store'
import { agendaStore } from './stores/agendaStore'
import Carrinho from './components/Carrinho'

function App() {
  const [cadastro, setCadastro] = useState(false)
  const Home = lazy(() => import('./components/Home.jsx'))
  const Destinos = lazy(() => import('./components/Destinos'))
  const Cadastro = lazy(() => import('./components/Cadastro'))
  const QuemSomos = lazy(() => import('./components/QuemSomos'))
  const Contatos = lazy(() => import('./components/Contatos'))

  const [notificar, setNotific] = useState([])
  useEffect(() => {
    store.subscribe(() => {
      setCadastro(store.getState())
    })
  }, [])
  useEffect(() => {
    agendaStore.subscribe(() => {
      setNotific(agendaStore.getState())
    })
  },[])
  return (
    <>
      <Router>
        <Header notific={notificar.length} />
        <BtnFloat />
        {<Carrinho idDestino={notificar}></Carrinho>}
        {cadastro &&
          <Suspense fallback={<Load />}><Cadastro /></Suspense>
        }
        <Routes>
          <Route exact path="/" element={
            <Suspense fallback={<Load />} >
              <Home />
            </Suspense>
          } />
          <Route exact path="/:id" element={
            <Suspense fallback={<Load />} >
              <Home />
            </Suspense>
          } />
          <Route path="/Destinos" element={
            <Suspense fallback={<Load />}>
              <Destinos />
            </Suspense>
          } />
          <Route path="/QuemSomos" element={
            <Suspense fallback={<Load />}>
              <QuemSomos />
            </Suspense>
          } />
          <Route path="/Contatos" element={
            <Suspense fallback={<Load />}>
              <Contatos />
            </Suspense>
          } />
        </Routes>
        <Rodape />
      </Router>
    </>)
}
export default App;
