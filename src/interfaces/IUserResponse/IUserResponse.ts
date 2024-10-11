import {IUsers} from "../IUsersProps/IUsers";

export interface IResponseUsersModel {
    users: IUsers[],
    total: number,
    skip: number,
    limit: number,
}