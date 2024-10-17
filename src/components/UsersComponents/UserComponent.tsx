import React, {FC} from 'react';
import {IUserProps} from "../../interfaces/IUserProps/IUserProps";
import {Link} from "react-router-dom";

interface IProps{
    users:IUserProps
}
const UserComponent:FC<IProps> = ({users}) => {

    return (
        <div>
            <div>{users.name} <Link state={{user:users}} to={users.id.toString()}><button>Click</button></Link></div>
        </div>
    );
};

export default UserComponent;