import {IPosts} from "../IPostsProps/IPosts";

export interface IResponsePostsModel {
    posts: IPosts[],
    skip: number,
    limit: number,
    total: number
}