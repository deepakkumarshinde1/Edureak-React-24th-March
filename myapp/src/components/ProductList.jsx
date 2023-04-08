import { useNavigate } from "react-router-dom";
const ProductList = (props) => {
  let navigate = useNavigate();
  let { removeProduct, productList } = props;
  return (
    <>
      {/* print product */}
      <center>
        <h1>Product List</h1>
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
