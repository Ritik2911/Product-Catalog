import { useContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import { AppContext } from "./context/AppContext";
import styled from "styled-components";

const Container = styled.div`
background-color: rgb(203 213 225);
`;

function App() {

  const {settingTotalData,settingCurrentPageProducts,totalProducts,settingTotalPage,currentPage} = useContext(AppContext)

  useEffect(() => {
    settingTotalData();
  },[])

  useEffect(() => {
    settingTotalPage();
    settingCurrentPageProducts();

  },[totalProducts]);

  useEffect(() => {
    settingCurrentPageProducts(currentPage);
  },[currentPage])

  return (
    <div className="App">
      <Container>

      <Navbar />
      <ProductPage />
      </Container>
    </div>
  );
}

export default App;
