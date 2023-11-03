import ProductElement from "./ProductElement";
import Pagination from "./Pagination";
import Filter from "./Filter";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { ProductsDiv } from "../StyledComponents/ProductPage";

const ProductPage = () => {
  const {currentPageProducts} = useContext(AppContext);
  console.log(currentPageProducts);
  return (
    <div>
      {/* <Navbar/> */}
      <Filter />
      <ProductsDiv>
        {currentPageProducts.map((product, productId) => {
          return (
            <div key={productId}>
              <ProductElement product={product} />
            </div>
          );
        })}
      </ProductsDiv>

      <Pagination />
    </div>
  );
};

export default ProductPage;
