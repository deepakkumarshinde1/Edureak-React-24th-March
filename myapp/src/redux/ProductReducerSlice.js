import { createSlice } from "@reduxjs/toolkit";

let initialDetails = {
  id: 0,
  title: "",
  price: "",
  desc: "",
};

let ProductReducerSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    newProduct: { ...initialDetails },
    editProduct: { ...initialDetails },
  },
  reducers: {
    prSetEditData: (state, action) => {
      let id = action.payload;
      let editData = state.productList.find((product) => {
        return product.id === Number(id);
      }); // provides index or given value
      if (editData !== undefined) {
        state.editProduct = editData;
      } else {
        window.location.assign("/");
      }
    },
    prEditInputText: (state, action) => {
      let { value, name } = action.payload;
      let _editProduct = { ...state.editProduct };
      _editProduct[name] = value;
      state.editProduct = _editProduct;
    },
    prInputText: (state, action) => {
      let { value, name } = action.payload;
      let _newProduct = { ...state.newProduct }; // avoid issue of refrance
      _newProduct[name] = value;
      state.newProduct = _newProduct;
    },
    prSaveProduct: (state) => {
      state.newProduct.id = Date.now();
      let _productList = [...state.productList]; // [{},{},{},{},{}] // re-creating list to avoid reference issue
      _productList.push({ ...state.newProduct }); // [{},{},{},{},{},{np}] // adding data
      state.productList = _productList; // modifying product list
      state.newProduct = { ...initialDetails }; // resting new product state (for form input)
    },
    prRemoveProduct: (state, action) => {
      let { isDelete, id } = action.payload;
      if (isDelete === true) {
        let delIndex = state.productList.findIndex((product) => {
          return product.id === id;
        }); // provides index or given value
        // if index is not found we get -1
        if (delIndex >= 0) {
          let _productList = [...state.productList];
          _productList.splice(delIndex, 1); // (index,delCount)
          state.productList = _productList;
        }
      }
    },
    prUpdateProduct: (state) => {
      let editIndex = state.productList.findIndex((product) => {
        return product.id === state.editProduct.id;
      });
      if (editIndex >= 0) {
        let _productList = [...state.productList];
        _productList[editIndex] = { ...state.editProduct };
        state.productList = _productList;
        alert("Product Updated Successfully");
      } else {
        alert("Product Not Found");
      }
    },
    prSaveProductList: (state, action) => {
      let list = action.payload;
      state.productList = [...state.productList, ...list];
    },
  },
});

export default ProductReducerSlice;
// reducer method ==> action
export let {
  prInputText,
  prSaveProduct,
  prRemoveProduct,
  prSetEditData,
  prEditInputText,
  prUpdateProduct,
  prSaveProductList,
} = ProductReducerSlice.actions;
