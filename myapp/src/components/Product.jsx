import { useState } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
// we object or array store my reference ==> spread operator = { ... } or  [ ... ]
const Product = () => {
  // temp nav
  let [page, setPage] = useState("addProduct");
  // store products ==> we need a list i.e array => [{...},{...},{...}]
  let [productList, setProductList] = useState([]); // array will empty
  let initialDetails = {
    title: "",
    price: "",
    desc: "",
  };
  let [newProduct, setNewProduct] = useState({ ...initialDetails });

  let inputText = (event) => {
    //let value = event.target.value;
    //let name = event.target.name;
    let { value, name } = event.target;
    let _newProduct = { ...newProduct };
    _newProduct[name] = value;
    setNewProduct(_newProduct);
  };

  let saveProduct = (event) => {
    // prevent default form submission
    event.preventDefault();
    let _productList = [...productList]; // [{},{},{},{},{}] // re-creating list to avoid reference issue
    _productList.push({ ...newProduct }); // [{},{},{},{},{},{np}] // adding data

    setProductList(_productList); // modifying product list
    setNewProduct({ ...initialDetails }); // resting new product state (for form input)
  };
  return (
    <>
      <nav>
        <ul>
          <li onClick={() => setPage("addProduct")}>Add Product</li>
          <li onClick={() => setPage("viewProduct")}>View Product</li>
        </ul>
      </nav>
      {/* FC */}
      {page === "addProduct" ? (
        <AddProduct
          saveProduct={saveProduct}
          newProduct={newProduct}
          inputText={inputText}
        />
      ) : (
        <>
          {/* Class Component */}
          <ProductList productList={productList} />
        </>
      )}
    </>
  );
};

export default Product;
