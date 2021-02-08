import React, {createContext, useState} from "react"

import CANTELLE from "../assets/1.jpg";
import VELVET from "../assets/2.jpg";
import UNSTITCHED from "../assets/3.jpg";
import PRET from "../assets/4.jpg";
import SHAWLS from "../assets/5.jpg";

export const CategoriesContext = createContext();

function CategoriesContextProvider (props){
    const[categories]=useState([
            {id : 1, name: 'CANTELLE CHIFFON', image: CANTELLE},
            {id : 2, name: 'VELVET', image: VELVET},
            {id : 3, name: 'UNSTITISHED', image: UNSTITCHED},
            {id : 4, name: 'PRET', image: PRET},
            {id : 5, name: 'SHAWLS', image: SHAWLS}

    ]);
    return(
        <CategoriesContext.Provider value={{categories:[...categories]}}>
            {props.children}
        </CategoriesContext.Provider>

    );
}

export default CategoriesContextProvider;