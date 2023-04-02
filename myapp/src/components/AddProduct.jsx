import { useState } from "react";
import { useEffect } from "react";

const AddProduct = (props) => {
  let { newProduct, inputText, saveProduct } = props;

  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounting");
    // run only once

    return () => {
      console.log("fc ---> unmounting");
    };
  }, []);

  //   useEffect(() => {
  //     console.log("for any state change updating");
  //   });

  useEffect(() => {
    console.log("only one count updating");
  }, [count]);
  return (
    <>
      {/* add product */}

      <center>
        <button onClick={() => setCount(++count)}>Count {count}</button>
        <h1>Add Product</h1>
        <form onSubmit={saveProduct}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              name="title"
              value={newProduct.title}
              onChange={inputText}
            />
          </div>
          <div>
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder="Enter Product price"
              name="price"
              value={newProduct.price}
              onChange={inputText}
            />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              placeholder="Enter Product Details"
              name="desc"
              value={newProduct.desc}
              onChange={inputText}
            ></textarea>
          </div>
          <button>Save Product</button>
        </form>
      </center>
    </>
  );
};

export default AddProduct;
