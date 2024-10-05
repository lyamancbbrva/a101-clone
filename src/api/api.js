import { axiosInstance } from "../config/axiosInstance";

async function getProducts() {
  try {
    const res = await axiosInstance.get("/products");
    return res.data;
  } catch (error) {
    return error;
  }
}
async function getDiscountedproducts() {
  try {
    const res = await axiosInstance.get("/products/discounted");

    return res.data;
  } catch (error) {
    return error;
  }
}
async function getPopularProducts() {
  try {
    const res = await axiosInstance.get("/products/populyar");

    return res.data;
  } catch (error) {
    return error;
  }
}
async function getProductById(id) {
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function searchProduct(query) {
  try {
    const res = await axiosInstance.get(`products/search?name=${query}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function getProductByCatName(id) {
  try {
    const res = await axiosInstance.get(`/products/category/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function getProductBySubcatName(id) {
  try {
    const res = await axiosInstance.get(`/products/subcategory/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function editProduct(id) {
  try {
    const res = await axiosInstance.put(`/products/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function deleteProduct(id) {
  try {
    const res = await axiosInstance.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function createProduct(obj) {
  try {
    const res = await axiosInstance.post(`/products`, obj);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function createCategory(obj) {
  try {
    const res = await axiosInstance.post(`/categories`, obj);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function getCategories() {
  try {
    const res = await axiosInstance.get(`/categories`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function getCategoryById(id) {
  try {
    const res = await axiosInstance.get(`/categories/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function editCategory(id, obj) {
  try {
    const res = await axiosInstance.put(`/categories/${id}`, obj);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function deleteCategory(id) {
  try {
    const res = await axiosInstance.delete(`/categories/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function createSubcategory(obj) {
  try {
    const res = await axiosInstance.post(`/categories/subcategory`, obj);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function editSubcategory(id, obj) {
  try {
    const res = await axiosInstance.put(`/categories/subcategory/${id}`, obj);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function deleteSubcategory(id) {
  try {
    const res = await axiosInstance.delete(`/categories/subcategory/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function createImage(formData) {
  try {
    const res = await axiosInstance.post(`/img`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
}
async function deleteImage(filename) {
  try {
    const res = await axiosInstance.delete(`/img/${filename}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function createSlider(obj) {
  try {
    const res = await axiosInstance.post(`/slider`, obj);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function deleteSlider(id) {
  try {
    const res = await axiosInstance.delete(`/slider/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function getSlider() {
  try {
    const res = await axiosInstance.get(`/slider`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function createAuth(obj) {
  try {
    const res = await axiosInstance.post(`/auth/register`, obj);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function loginAuth(obj) {
  try {
    const res = await axiosInstance.post(`/auth/login`, obj);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function refreshToken() {
  try {
    const res = await axiosInstance.post(`/auth/refresh-token`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function verifyToken() {
  try {
    const res = await axiosInstance.get(`/auth/verify-token`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function deleteAuth(id) {
  try {
    const res = await axiosInstance.delete(`/auth/admin/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function editAuth(id) {
  try {
    const res = await axiosInstance.put(`/auth/admin/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
async function getAuth() {
  try {
    const res = await axiosInstance.get(`/auth/admins`);
    return res.data;
  } catch (error) {
    return error;
  }
}


export {
  createProduct,
  getDiscountedproducts,
  getPopularProducts,
  getProductByCatName,
  getProductById,
  getProductBySubcatName,
  getProducts,
  deleteProduct,
  editProduct,
  searchProduct,
  editCategory,
  editSubcategory,
  getCategories,
  getCategoryById,
  deleteCategory,
  deleteSubcategory,
  createCategory,
  createSubcategory,
  getSlider,
  createImage,
  createSlider,
  deleteImage,
  deleteSlider,
  getAuth,
  deleteAuth,
  createAuth,
  editAuth,
  verifyToken,
  refreshToken,
  loginAuth

};
