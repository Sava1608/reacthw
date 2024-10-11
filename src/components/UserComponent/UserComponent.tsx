import React, {FC} from 'react';
import {IUsers} from "../../interfaces/IUsersProps/IUsers";

interface IProps{
    user:IUsers[]
}

const UserComponent:FC<IProps> = ({user}) => {
    const {id,} = user;

    return (
        <div>
            
        </div>
    );
};

export default UserComponent;