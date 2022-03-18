import { MenuSharp } from "@mui/icons-material";
import React, { createContext, useEffect, useState } from "react";

export const AgendaContext = createContext({})

export const AgendaProvider = (props) => {

        const [carrinho, setCarrinho] = useState([])

    const setAgenda = (props) => {

        setCarrinho([...carrinho, JSON.stringify(props)])
        localStorage.setItem('car',carrinho)
    }
    
    return (
        <AgendaContext.Provider value={{carrinho, setAgenda }}>
            {props.children}
        </AgendaContext.Provider>
    )
};

