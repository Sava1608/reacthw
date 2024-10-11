import React, {FC} from 'react';
import {IPosts} from "../../interfaces/IPostsProps/IPosts";

interface IProps{
    post:IPosts
}

const PostComponent:FC<IProps> = ({post}) => {

    const {id,title,body,tags,reactions,views,userId} = post

    return (
        <div>
            <ul>
                <li>ID: {id}</li>
                <li>Title: {title}</li>
                <li>Body: {body}</li>
                <li>Tags: {tags}</li>
                <ul>
                    <p>Reactions:</p>
                    <li>Likes: {reactions.likes}</li>
                    <li>Dislikes: {reactions.dislikes}</li>
                </ul>
                <li>Views: {views}</li>
                <li>UserID: {userId}</li>
            </ul>
        </div>
    );
};

export default PostComponent;