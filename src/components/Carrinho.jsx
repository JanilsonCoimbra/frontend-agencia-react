import React, { useState } from 'react'
import { AgendaContext } from '../Providers/Agenda'


function Carrinho() {

  const { carrinho } = React.useContext(AgendaContext)
  return (<>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Carrinho</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {carrinho
              && carrinho.map((resp) => (
                <div className="card p-0 row modal-body">
                  <div className="row g-0">
                    <div className='col-6'>
                      <img src={JSON.parse(resp).destinoFoto} className="img-fluid img-thumbnail rounded-start w-100 h-100" alt="..." />
                    </div>
                    <div className='col-6'>
                      <div >
                        <h5 className="card-title">{JSON.parse(resp).destinoName}</h5>
                        <p><small className="text-muted">{JSON.parse(resp).destinoDescricao}</small></p>
                        <p><strong>R${JSON.parse(resp).destinoValor}</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div></>)
}

export default Carrinho