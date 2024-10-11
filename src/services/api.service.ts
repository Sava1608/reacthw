import axios from "axios";
import {IUsers} from "../interfaces/IUsersProps/IUsers";
import {IPosts} from "../interfaces/IPostsProps/IPosts";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
});

const getUsers = async ():Promise<IUsers[]> => {
    let axiosResponse = await axiosInstance.get('/users')
    return axiosResponse.data.users;
}
const getPosts = async (postId: number):Promise<IPosts[]> => {
    let response=  await axiosInstance.get("/posts/user/" + postId);
    return response.data.posts;


}
export {
    getUsers,
    getPosts
}