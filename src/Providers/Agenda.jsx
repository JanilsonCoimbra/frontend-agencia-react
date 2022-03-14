import React, { createContext, useState } from "react";

export const AgendaContext = createContext({})

export const AgendaProvider = (props) => {

    const [carrinho, setCarrinho] = useState([])
    
    const setAgenda = (props) => {
        setCarrinho([...carrinho, JSON.stringify(props)])
    }
    
    return (
        <AgendaContext.Provider value={{carrinho, setAgenda }}>
            {props.children}
        </AgendaContext.Provider>
    )
};

