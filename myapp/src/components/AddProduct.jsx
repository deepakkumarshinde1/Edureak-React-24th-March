import { prInputText, prSaveProduct } from "../redux/ProductReducerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { newProduct } = useSelector((state) => state.product); // get state data

  let inputText = (event) => {
    let { value, name } = event.target;
    dispatch(prInputText({ value, name })); // payload:{ value, name }
  };

  let saveProduct = (event) => {
    // prevent default form submission
    event.preventDefault();
    dispatch(prSaveProduct());
    // navigate to product list
    navigate("/product/view");
  };

  return (
    <>
      {/* add product */}

      <center>
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
