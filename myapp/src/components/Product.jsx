import { useState } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import EditProduct from "./EditProduct";
// we object or array store my reference ==> spread operator = { ... } or  [ ... ]
const Product = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/product/add"> Add Product</Link>
          </li>
          <li>
            <Link to="/product/view">View Product</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/product/view" replace />} />
        <Route
          path="/product"
          element={<Navigate to="/product/view" replace />}
        />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
        <Route path="/product/view" element={<ProductList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Product;
