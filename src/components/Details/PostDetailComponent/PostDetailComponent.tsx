import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {ICommentsProps} from "../../../interfaces/ICommentsProps/ICommentsProps";
import {getCommentsOfPosts} from "../../../service/api.service";

const PostDetailComponent = () => {
    const location = useLocation()
    const post = location.state.posts;
    const [comments, setComments] = useState<ICommentsProps[]>([]);
    useEffect(() => {
        getCommentsOfPosts(post.id).then(value => setComments(value))
    }, [post]);
    return (
        <div>
            <ul>
                <li>ID: {post.id}</li>
                <li>User ID: {post.userId}</li>
                <li>Body: {post.body}</li>
                <li>Title: {post.title}</li>
                {
                    comments.map((comment:ICommentsProps, index) =>
                        <ul key={index}>
                            <p>Comments:</p>
                            <li>ID: {comment.id}</li>
                            <li>Post ID{comment.postId}</li>
                            <li>Name: {comment.name}</li>
                            <li>Body: {comment.body}</li>
                            <li>Email: {comment.email}</li>
                        </ul>)
                }
            </ul>
        </div>
    );
};

export default PostDetailComponent;