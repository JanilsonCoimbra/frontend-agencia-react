import React from 'react'
import style from './Carrinho.module.css'
import { AgendaContext } from '../Providers/Agenda'


function Carrinho() {

    const { carrinho, setAgenda } = React.useContext(AgendaContext)
    
    return (<><div className="modal p-0 row col-12 mt-3" id="exampleModal" tabindex="5" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <button type="button" class="btn btn-secondary w-25" data-bs-dismiss="modal">Close</button>
                    {carrinho.map((resp) => (<div className="card mb-3">
                            <div className="row g-0 ">
                                <div className="col-3">
                                    <img src={JSON.parse(resp).destinoFoto} className="img-fluid rounded-start w-100" alt="..." />
                                </div>
                                <div className="col-8">
                                    <div className="card-body h-25">
                                        <h5 className="card-title">{JSON.parse(resp).destinoName}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div></>)
}
export default Carrinho