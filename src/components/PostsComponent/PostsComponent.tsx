import React, {FC} from 'react';
import {IPosts} from "../../interfaces/IPostsProps/IPosts";
import PostComponent from "../PostComponent/PostComponent";

interface IProps{
    post:IPosts[]
}

const PostsComponent:FC<IProps> = ({post}) => {


    return (
        <div>
            {
                post.map((post,index) => <PostComponent key={index} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;