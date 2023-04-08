import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProduct = (props) => {
  let { id } = useParams();
  let { newProduct, inputText, updateProduct, setEditData } = props;

  // onload load
  useEffect(() => {
    setEditData(id);
  }, []); // run once when component load
  return (
    <>
      {/* add product */}

      <center>
        <h1>Edit Product</h1>
        <form onSubmit={updateProduct}>
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
          <button>Update Product</button>
        </form>
      </center>
    </>
  );
};

export default EditProduct;
