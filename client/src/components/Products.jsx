import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-betwee;
`;

const Div = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  text-align: center;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        category
          ? `http://localhost:5000/api/products?category=${category}`
          : "http://localhost:5000/api/products"
      );
      setProducts(response.data);
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filters, products]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      <Div>
        <Title>Lates Products</Title>
      </Div>
      <Container>
        {category
          ? filteredProducts.map((item) => (
              <Product item={item} key={item._id} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <Product item={item} key={item._id} />)}
      </Container>
    </Container>
  );
};

export default Products;
