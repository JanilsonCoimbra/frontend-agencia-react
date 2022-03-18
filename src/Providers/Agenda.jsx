import React, { createContext, useState } from "react";

export const AgendaContext = createContext({})

export const AgendaProvider = (props) => {
        const [Painel, setPainel] = useState(true)
        const [carrinho, setCarrinho] = useState([])

    const setAgenda = (props) => {

        setCarrinho([...carrinho, JSON.stringify(props)])
        localStorage.setItem('car',carrinho)
    }

    function setPainelState(){
        if(Painel){
            setPainel(false)
        }else{
            setPainel(true)
        }
    }
    
    return (
        <AgendaContext.Provider value={{carrinho, setAgenda, Painel, setPainelState  }}>
            {props.children}
        </AgendaContext.Provider>
    )
};

