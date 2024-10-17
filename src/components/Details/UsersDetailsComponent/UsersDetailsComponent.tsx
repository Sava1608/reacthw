import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IPostProps} from "../../../interfaces/IPostProps/IPostProps";
import {getPostsDetails} from "../../../service/api.service";

const UsersDetailsComponent = () => {
    const location = useLocation();
    const users = location.state.user;
    const [posts, setPosts] = useState<IPostProps[]>([]);
    useEffect(() => {
        getPostsDetails(users.id).then(value => setPosts(value))
    }, [users]);

    return (
        <div>
            <ul>
                <li>ID: {users.id}</li>
                <li>UserName: {users.username}</li>
                <li>Email: {users.email}</li>
                <li>Phone: {users.phone}</li>
                <li>Website: {users.website}</li>
                <li>Name: {users.name}</li>
                <ul>
                    <p>Company:</p>
                    <li>{users.company.name}</li>
                    <li>{users.company.bs}</li>
                    <li>{users.company.catchPhrase}</li>
                </ul>
                <ul>
                    <p>Address:</p>
                    <li>{users.address.city}</li>
                    <li>{users.address.street}</li>
                    <li>{users.address.suite}</li>
                    <li>{users.address.zipcode}</li>
                    <ul>
                        <p>Geo:</p>
                        <li>{users.address.geo.lat}</li>
                        <li>{users.address.geo.lng}</li>
                    </ul>
                </ul>
            </ul>
            {
                posts.map((posts:IPostProps, index) =>
                    <ul key={index}>
                        <li>Post ID: {posts.id}</li>
                        <li>User ID: {posts.userId}</li>
                        <li>Post Title: {posts.title}</li>
                        <li>Post Body: {posts.body}</li>
                    </ul>)
            }
        </div>
    );
};

export default UsersDetailsComponent;