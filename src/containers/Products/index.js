import React from "react";
import { Button } from "antd";
import { CgMenuGridO } from "react-icons/cg";
import { BsCardList } from "react-icons/bs";
import ProductList from "./Table";
import Cards from "./Cards";
import Wrapper from "./style";
import { Link } from 'react-router-dom';

function Products() {
  const [isTable, setIsTable] = React.useState(false);

  return (
    <Wrapper>
      <div className="product__head">
        <h1 className="product__title">Products</h1>
        <form className="product__search">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </form>
        <div className="product__actions">
          <Link to="/products/add">
            <Button>New Product</Button>
          </Link>
          <Button
            onClick={() => setIsTable(!isTable)}
            className="product__toggle"
          >
            {isTable ? (
              <p className="product__toggle-grid">
                <BsCardList /> <span>Table</span>
              </p>
            ) : (
              <p className="product__toggle-grid">
                <CgMenuGridO /> <span>Cards</span>
              </p>
            )}
          </Button>
        </div>
      </div>
      <div className="product__content">
        {isTable ? <ProductList /> : <Cards />}
      </div>
    </Wrapper>
  );
}

export default Products;
