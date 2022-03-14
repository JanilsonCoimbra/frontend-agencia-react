import React from 'react'
import { AgendaContext } from '../Providers/Agenda'


function Carrinho() {

    const { carrinho } = React.useContext(AgendaContext)
    
    return (<><div className="modal fade modal-lg" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered w-100">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalToggleLabel">Meus Proximo Destino</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
                    {carrinho.map((resp) => (<div className="card mb-3">
                            <div className="row g-0 ">
                                <div className="col-3">
                                    <img src={JSON.parse(resp).destinoFoto} className="img-fluid rounded-start w-100" alt="..." />
                                </div>
                                <div className="col-8">
                                    <div className="card-body h-25">
                                        <h5 className="card-title">{JSON.parse(resp).destinoName}</h5>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Fazer o pagamento</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Hide this modal and show the first with the button below.
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Voltar</button>
      </div>
    </div>
  </div>
</div>
</>)
}
export default Carrinho