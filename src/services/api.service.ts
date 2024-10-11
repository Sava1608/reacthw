import axios from "axios";
import {IUsers} from "../interfaces/IUsersProps/IUsers";
import {IPosts} from "../interfaces/IPostsProps/IPosts";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'}
});

const getUsers = async ():Promise<IUsers[]> => {
    let axiosResponse = await axiosInstance.get<IUsers[]>('/docs/users')
    return axiosResponse.data;
}
const getPosts = async (user: IUsers) => {
    let response = await axiosInstance.get<IPosts>("/docs/posts/" + user.id);
    return response.data
}
export {
    getUsers,
    getPosts
}