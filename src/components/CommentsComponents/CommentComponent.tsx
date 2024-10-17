import React, {FC} from 'react';
import {ICommentsProps} from "../../interfaces/ICommentsProps/ICommentsProps";

interface IProps{
    comment:ICommentsProps;
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            <div>ID: {comment.id}</div>
            <div>Post ID: {comment.postId}</div>
            <div>Name: {comment.name}</div>
            <div>Body: {comment.body}</div>
            <div>Email: {comment.email}</div>
            <hr/>
        </div>
    );
};

export default CommentComponent;