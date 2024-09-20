import axios from "axios";

export const request = axios.create({
    // baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

// export const get = async (path, optional = {}) => { //path la query /api/posts, khong phai url
//     const response = await request.get(path, optional)
//     return response.data
// }

export const createUserInDatabase = async (user) => {
    try {
        const response = await axios.post('http://localhost:3001/users/create', user);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi tạo người dùng:', error);
        throw error;
    }
}

export const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(`http://localhost:3001/users/email/${email}`)
        return response.data
    } catch (error) {
        console.log('Loi khi lay thong tin email: ', email);
    }
}

export default request