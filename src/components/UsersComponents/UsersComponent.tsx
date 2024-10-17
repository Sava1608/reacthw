import React, {useEffect, useState} from 'react';
import {IUserProps} from "../../interfaces/IUserProps/IUserProps";
import {getUsers} from "../../service/api.service";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserProps[]>([])
    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, []);
    return (
        <div>
            {
                users.map((user:IUserProps,index) => <UserComponent users={user} key={index}/>)
            }
        </div>
    );
};

export default UsersComponent;