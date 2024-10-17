import React, {FC} from 'react';
import {IPostProps} from "../../interfaces/IPostProps/IPostProps";
import {Link} from "react-router-dom";

interface IProps{
    post:IPostProps;
}
const PostComponent:FC<IProps> = ({post}) => {

    return (
        <div>
            <div>Title: {post.title}</div>
            <Link state={{posts:post}} to={post.id.toString()}><button>Post Info</button></Link>
            <hr/>
        </div>
    );
};

export default PostComponent;