import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  prRemoveProduct,
  prSaveProductList,
} from "../redux/ProductReducerSlice";
const ProductList = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { productList } = useSelector((state) => state.product);

  let removeProduct = (id) => {
    let isDelete = window.confirm("Are you sure delete ? ");
    dispatch(prRemoveProduct({ isDelete, id }));
  };
  // let getServerList = async () => {
  //   let url = "https://fakestoreapi.com/products";
  //   try {
  //     let response = await fetch(url, { method: "GET" });
  //     // console.log(response); // collect the data from response ==> response.json()
  //     let data = await response.json();
  //     dispatch(prSaveProductList(data));
  //     alert("list update successfully");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  let getServerList = async () => {
    let url = "https://fakestoreapi.com/products";
    try {
      let { data } = await axios.get(url);
      dispatch(prSaveProductList(data));
      alert("list update successfully");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      {/* print product */}
      <center>
        <h1>
          Product List <button onClick={getServerList}>Get Server List</button>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th width="5%">Sr No</th>
              <th width="35%">Name</th>
              <th width="20%">Price</th>
              <th width="20%">Description</th>
              <th width="20%">Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.desc}</td>
                  <td>
                    <button onClick={() => removeProduct(product.id)}>
                      Del
                    </button>
                    &nbsp;
                    <button
                      onClick={() => navigate("/product/edit/" + product.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </center>
    </>
  );
};

export default ProductList;
