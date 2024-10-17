import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})
const getUsers = async () => {
    let axiosResponseUsers = await axiosInstance.get('/users');
    return axiosResponseUsers;
};
const getPosts = async () => {
    let axiosResponsePosts = await axiosInstance.get('/posts');
    return axiosResponsePosts;
}
const getComments = async () => {
    let axiosResponseComments = await axiosInstance.get('/comments');
    return axiosResponseComments;
}
export {
    getUsers,
    getPosts,
    getComments
}