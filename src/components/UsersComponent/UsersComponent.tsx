import React, {FC, useEffect, useState} from 'react';
import {IUsers} from "../../interfaces/IUsersProps/IUsers";
import {getPosts, getUsers} from "../../services/api.service";
import UserComponent from "../UserComponent/UserComponent";
import {IPosts} from "../../interfaces/IPostsProps/IPosts";
import PostsComponent from "../PostsComponent/PostsComponent";


const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUsers[]>([]);
    const [posts, setPosts] = useState<IPosts[]>([]);
    const lift = async (id:number) => {
        setPosts(await getPosts(id));
    }


    useEffect(() => {
        getUsers()
            .then((value:IUsers[]) => setUsers(value));
    }, []);

    return (
        <div>
            {
                users.map((user: IUsers) => <UserComponent key={user.id} user={user} lift={lift}/>)
            }
                <PostsComponent post={posts}/>
        </div>
    );
};

export default UsersComponent;