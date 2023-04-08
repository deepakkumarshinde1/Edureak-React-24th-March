import { useState } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import EditProduct from "./EditProduct";
// we object or array store my reference ==> spread operator = { ... } or  [ ... ]
const Product = () => {
  // instance
  let navigate = useNavigate();
  // store products ==> we need a list i.e array => [{...},{...},{...}]
  let [productList, setProductList] = useState([]); // array will empty
  let initialDetails = {
    id: 0,
    title: "",
    price: "",
    desc: "",
  };
  let [newProduct, setNewProduct] = useState({ ...initialDetails });
  let [editProduct, setEditProduct] = useState({ ...initialDetails });

  let setEditData = (id) => {
    let editData = productList.find((product) => {
      return product.id === Number(id);
    }); // provides index or given value
    if (editData !== undefined) {
      setEditProduct(editData);
    } else {
      window.location.assign("/");
    }
  };

  let editInputText = (event) => {
    let { value, name } = event.target;
    let _editProduct = { ...editProduct };
    _editProduct[name] = value;
    setEditProduct(_editProduct);
  };

  let inputText = (event) => {
    let { value, name } = event.target;
    let _newProduct = { ...newProduct };
    _newProduct[name] = value;
    setNewProduct(_newProduct);
  };

  let saveProduct = (event) => {
    // prevent default form submission
    event.preventDefault();
    newProduct.id = Date.now();
    let _productList = [...productList]; // [{},{},{},{},{}] // re-creating list to avoid reference issue
    _productList.push({ ...newProduct }); // [{},{},{},{},{},{np}] // adding data

    setProductList(_productList); // modifying product list
    setNewProduct({ ...initialDetails }); // resting new product state (for form input)
    // navigate to product list
    navigate("/product/view");
  };

  let removeProduct = (id) => {
    let isDelete = window.confirm("Are you sure delete ? ");
    if (isDelete === true) {
      let delIndex = productList.findIndex((product) => {
        return product.id === id;
      }); // provides index or given value
      // if index is not found we get -1
      if (delIndex >= 0) {
        let _productList = [...productList];
        _productList.splice(delIndex, 1); // (index,delCount)
        setProductList(_productList);
      }
    }
  };

  let updateProduct = (event) => {
    event.preventDefault();
    let editIndex = productList.findIndex((product) => {
      return product.id === editProduct.id;
    });
    if (editIndex >= 0) {
      let _productList = [...productList];
      _productList[editIndex] = { ...editProduct };
      setProductList(_productList);
      alert("Product Updated Successfully");
    } else {
      alert("Product Not Found");
    }

    navigate("/");
  };
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
        <Route
          path="/product/add"
          element={
            <AddProduct
              saveProduct={saveProduct}
              newProduct={newProduct}
              inputText={inputText}
            />
          }
        />
        <Route
          path="/product/edit/:id"
          element={
            <EditProduct
              updateProduct={updateProduct}
              newProduct={editProduct}
              inputText={editInputText}
              setEditData={setEditData}
            />
          }
        />
        <Route
          path="/product/view"
          element={
            <ProductList
              removeProduct={removeProduct}
              productList={productList}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Product;
