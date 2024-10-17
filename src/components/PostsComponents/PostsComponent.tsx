import React, {useEffect, useState} from 'react';
import {IPostProps} from "../../interfaces/IPostProps/IPostProps";
import {getPosts} from "../../service/api.service";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostProps[]>([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map((post:IPostProps,index) => <PostComponent post={post} key={index}/>)
            }
        </div>
    );
};

export default PostsComponent;