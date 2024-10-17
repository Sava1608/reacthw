import axios from "axios";
import {IUserProps} from "../interfaces/IUserProps/IUserProps";
import {IPostProps} from "../interfaces/IPostProps/IPostProps";
import {ICommentsProps} from "../interfaces/ICommentsProps/ICommentsProps";

const axiosInstance = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})
const getUsers = async ():Promise<IUserProps[]> => {
    return (await axiosInstance.get('/users')).data;
};
const getPosts = async ():Promise<IPostProps[]> => {
    return (await axiosInstance.get('/posts')).data;
}
const getComments = async ():Promise<ICommentsProps[]> => {
    return (await axiosInstance.get('/comments')).data;
}
const getPostsDetails = async (userId:string):Promise<IPostProps[]> => {
    return (await axiosInstance.get('/posts?userId=' + userId)).data
}
const getCommentsOfPosts = async (postId:string):Promise<ICommentsProps[]> => {
    return (await axiosInstance.get('/comments?postId=' + postId)).data
}
export {
    getUsers,
    getPosts,
    getComments,
    getPostsDetails,
    getCommentsOfPosts
}