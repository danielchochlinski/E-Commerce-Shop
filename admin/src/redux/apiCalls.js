import { publicRequest, userRequest } from "../requestMethods";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  getUserStart,
  getUserSuccess,
  getUserFailure,
} from "./userRedux";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";

//USERS
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

//GET ALL USERS
export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const response = await userRequest.get("/users");
    dispatch(getUserSuccess(response.data));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const response = await publicRequest.get("/products");
    dispatch(getProductSuccess(response.data));
  } catch (error) {
    dispatch(getProductFailure(error));
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const response = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure(error));
  }
};
//UPDATE PRODUCT
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const response = await userRequest.update(`/products/${id}`);
    dispatch(updateProductSuccess(id, response.product));
  } catch (error) {
    dispatch(updateProductFailure(error));
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const response = await userRequest.post(`/products/`, product);
    dispatch(addProductSuccess(response.data));
  } catch (error) {
    dispatch(addProductFailure(error));
  }
};
