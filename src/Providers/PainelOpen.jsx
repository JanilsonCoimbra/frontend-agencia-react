import React, { createContext, useState } from "react";

export const PainelContext = createContext({})

export const PainelProvider = (props) => {

        const [Painel, setCarrinho] = useState(true)

    const setPainel = (props) => {
        if(Painel){
            setPainel(false)
        }else{
            setPainel(true)
        }
    }
    
    return (
        <PainelContext.Provider value={{Painel, setCarrinho }}>
            {props.children}
        </PainelContext.Provider>
    )
};

