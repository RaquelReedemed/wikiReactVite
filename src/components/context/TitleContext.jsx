import React, { createContext, useState } from "react";

//creacion de contexto, se exporta en otros componentes para pasar datos desde un padre a hijo
export const TitleContext = createContext();

export const TitleProvider = ( { children } ) => {

    const [selectedTitle, setSelectedTitle] = useState('');
    console.log('contextTitle', selectedTitle)

    return (
       <TitleContext.Provider value={{ 
        selectedTitle, 
        setSelectedTitle 
        }}>
           {children}
       </TitleContext.Provider>
    )
} 