// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:3000'
// });

// export const signup = async (email, password) => {
//     try {
//         const response = await api.post('/api/auth/signup', { email, password });
//         return response.data;
//     } catch (err) {
//         console.error(err);
//     }
// };

// export const login = async (email, password) => {
//     try {
//         const response = await api.post('/api/auth/login', { email, password });
//         return response.data;
//     } catch (err) {
//         console.error(err);
//     }
// };




import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000'
});

export const signup = async (email, password) => {
    try {
        const response = await api.post('/api/auth/signup', { email, password });
        window.alert("User created successfully");
        return response.data; // Assuming the response contains data
        
    } catch (err) {
        console.error('Signup Error:', err); // Better error logging
        throw err; // Rethrow the error to handle it higher up
    }
};

export const login = async (email, password) => {
    try {
        const response = await api.post('/api/auth/login', { email, password });
        return response.data; // Assuming the response contains data
    } catch (err) {
        console.error('Login Error:', err); // Better error logging
        window.alert("User does not exist");
        throw err; // Rethrow the error to handle it higher up
    }
};
