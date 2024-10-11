import axios from "axios";
import {IUsers} from "../interfaces/IUsersProps/IUsers";
import {IPosts} from "../interfaces/IPostsProps/IPosts";
import {IResponseUsersModel} from "../interfaces/IUserResponse/IUserResponse";
import {IResponsePostsModel} from "../interfaces/IPostResponce/IPostResponse";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

const getUsers = async ():Promise<IUsers[]> => {
    let axiosResponse = await axiosInstance.get<IResponseUsersModel>('/users')
    return axiosResponse.data.users;
}
const getPosts = async (id: number):Promise<IPosts[]> => {
    let response=  await axiosInstance.get<IResponsePostsModel>("/posts/user/" + id);
    return response.data.posts;


}
export {
    getUsers,
    getPosts
}