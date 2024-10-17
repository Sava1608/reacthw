import React, {useEffect, useState} from 'react';
import {ICommentsProps} from "../../interfaces/ICommentsProps/ICommentsProps";
import {getComments} from "../../service/api.service";
import CommentComponent from "./CommentComponent";

const CommentsComponent = () => {
    const [comments, setComments] = useState<ICommentsProps[]>([]);
    useEffect(() => {
        getComments().then(value => setComments(value))
    }, []);
    return (
        <div>
            {
                comments.map((comment:ICommentsProps,index) => <CommentComponent comment={comment} key={index}/>)
            }
        </div>
    );
};

export default CommentsComponent;