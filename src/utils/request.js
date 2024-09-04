import axios from "axios";

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export const get = async (path, optional = {}) => { //path la query /api/posts, khong phai url
    const response = await request.get(path, optional)
    return response.data
}

export const createUserInDatabase = async (user) => {
    try {
        const isUserExist = await axios.get(`http://localhost:3001/users `);


        const response = await axios.post('http://localhost:3001/users/create', {
            email: user.email,
            username: user.email,
            password: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi tạo người dùng:', error);
        throw error;
    }
}

export default request