import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/GetBLogs/`;

/** Get All Blogs */

const getAllBlogs = async() => {
    const response = await axios.get(API_URL)
    return response.data
} 

const getSingleBlog = async(id) => {
    const response = await axios.get(API_URL + id)
    return response.data
} 

const productServices = {getAllBlogs,getSingleBlog}

export default productServices