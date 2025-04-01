import { createContext, useState } from "react";

export const AppContext = createContext();

const ContextProvider = ({children}) => {
    const [foodCount,setFoodCount] = useState(0);
    const [selectedFood, setSelectedFood] = useState([{}]);
    const [selected, setUserFoods] = useState([]);
    const [totalCost, setTotalCost] = useState([0]);
    const [tableNo, setTableNo] = useState();
    const [grandTotal,  setGrandTotal] = useState(0);
    const [tableSelected, setTableSelected] = useState(false);
    const [userName, setUserName] = useState('');

    const values = {
        foodCount, 
        setFoodCount,
        selectedFood,
        setSelectedFood,
        setUserFoods,
        selected,
        totalCost,
        setTotalCost,
        setTableNo,
        tableNo,
        grandTotal,
        setGrandTotal,
        tableSelected,
        setTableSelected,
        userName,
        setUserName
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider