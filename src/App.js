import Header from './components/Header'
import Rodape from './components/Rodape.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useContext } from 'react'
import Load from './components/Load'
import BtnFloat from './components/BtnFloat'
import Carrinho from './components/Carrinho'
import { AgendaContext } from './Providers/Agenda'
import { DestinosComponents } from './components/Destinos'
import { CadastroStado } from './components/Cadastro'
import { QuemSomosState } from './components/QuemSomos'

function App() {

  const { Painel } = useContext(AgendaContext)
  const Home = lazy(() => import('./components/Home.jsx'))
  const Contatos = lazy(() => import('./components/Contatos'))

  return (
    <>
      <Router>
        <Header />
        <BtnFloat />
        {Painel &&
          <Suspense fallback={<Load />}>
            <CadastroStado />
          </Suspense>
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
          <Route path="/Destinos" element={<DestinosComponents />}/>
          <Route path="/QuemSomos" element={<QuemSomosState />} />
          <Route path="/Contatos" element={
            <Suspense fallback={<Load />}>
              <Contatos />
            </Suspense>
          } />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Rodape />
      </Router>
    </>)
}
export default App;
