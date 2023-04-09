import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  prEditInputText,
  prSetEditData,
  prUpdateProduct,
} from "../redux/ProductReducerSlice";

const EditProduct = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { editProduct } = useSelector((state) => state.product);

  let editInputText = (event) => {
    let { value, name } = event.target;
    dispatch(prEditInputText({ value, name }));
  };

  let updateProduct = (event) => {
    event.preventDefault();
    dispatch(prUpdateProduct());
    navigate("/");
  };
  // onload load
  useEffect(() => {
    dispatch(prSetEditData(id));
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
              value={editProduct.title}
              onChange={editInputText}
            />
          </div>
          <div>
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder="Enter Product price"
              name="price"
              value={editProduct.price}
              onChange={editInputText}
            />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <textarea
              type="text"
              placeholder="Enter Product Details"
              name="desc"
              value={editProduct.desc}
              onChange={editInputText}
            ></textarea>
          </div>
          <button>Update Product</button>
        </form>
      </center>
    </>
  );
};

export default EditProduct;
