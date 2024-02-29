
import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const ShopContext = createContext()
export const ShopProvider = ({ children }) => {

    const initialstate = {
        products: [],
        cartItems: [],
        total:0
    }

    const [state, dispatch] = useReducer(ProductReducer, initialstate)
    return (
        <ShopContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContext