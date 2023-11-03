import { useState } from "react";
import { createContext } from "react";
import { ProductData } from "../data/Product";

export const AppContext = createContext();


export default function AppContextProvider({children}) {
    const [totalProducts, setTotalProducts] = useState([]);
    const [currentPageProducts, setCurrentPageProducts] = useState([]);
    const [currentPage,setCurrentPage]  = useState(0);
    const [totalPage,setTotalPage]  = useState(0);
    const [category,setCategory] = useState('all');
    const [sortBy, setSortBy] = useState("none");

    function settingTotalData() {
        if(category === 'all'){
            console.log("in al pordicts");
            setTotalProducts(ProductData);
            return;
        }
        console.log(category === 'all');
        setTotalProducts(ProductData.filter((data) => data.category === category));
        console.log("printing",category,"",totalProducts);
    }

    function settingTotalPage() {
        const totalPage = Math.ceil(totalProducts.length/9);
        setTotalPage(totalPage);
    }

    function settingCurrentPageProducts(currentPage=0) {
        const startIndex = currentPage * 9;
        const endIndex = Math.min(startIndex + 9, totalProducts.length);
        const data = totalProducts.slice(startIndex, endIndex);
        setCurrentPageProducts(data);
        console.log("in context",currentPageProducts);
    }

    function settingTotalDataSortBy() {
        console.log("in sort");
        if (sortBy === 'AESC') {
            const sortedProducts = [...totalProducts].sort((a, b) => a.price - b.price);
            setTotalProducts(sortedProducts);
          } else if (sortBy === 'DESC') {
            const sortedProducts = [...totalProducts].sort((a, b) => b.price - a.price);
            setTotalProducts(sortedProducts);
          }
    }

    const value = {
        totalPage,totalProducts,currentPage,currentPageProducts,category,setCategory,setCurrentPage,setTotalPage,setCurrentPageProducts,setTotalProducts,settingCurrentPageProducts,settingTotalData,settingTotalPage,sortBy,setSortBy,settingTotalDataSortBy
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}