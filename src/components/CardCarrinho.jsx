import React from 'react';
import api from '../api';
export default function CardCarrinho(props) {
    const dat4 = []
    props.idDestino.map((valor) =>
        api.get("/destinos/" + valor).then((result) => {
            dat4.push(result.data)
        }
        ))
    return (<>
        {dat4.length}
        <hr></hr>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum, accusamus illum temporibus in recusandae earum aperiam iure molestias, explicabo eum, architecto ipsum ducimus minus. Earum, molestiae minus? Vel, unde.</div>
    </>
    )
}