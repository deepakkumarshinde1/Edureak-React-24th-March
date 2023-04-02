import { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    console.log("init");
    super(props);
    this.state = { count: 0 };
  }
  incCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // set props to state
  static getDerivedStateFromProps(props, state) {
    return { ...state, ...props }; // new states
  }
  // mounting
  componentDidMount() {
    console.log("class ---> api call");
    // run only once
  }

  componentDidUpdate() {
    console.log("class ---> comp is updated");
    // runs every time on state change
  }

  componentWillUnmount() {
    console.log("class ---> unmount");
    // run only once
  }

  render() {
    return (
      <>
        {/* print product */}
        <center>
          <button onClick={this.incCount}>INC {this.state.count}</button>
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
              {this.props.productList.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.desc}</td>
                    <td>
                      <button>Del</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </center>
      </>
    );
  }
}

export default ProductList;
