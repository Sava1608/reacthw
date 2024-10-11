import React, {FC, useEffect, useState} from 'react';
import {IUsers} from "../../interfaces/IUsersProps/IUsers";
import {getUsers} from "../../services/api.service";
import UserComponent from "../UserComponent/UserComponent";

const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        getUsers().then((value:IUsers[]) => setUsers(value));
    }, []);

    return (
        <div>
            {
                users.map((user) => (<UserComponent key={user.id} user={user}/>))
            }
        </div>
    );
};

export default UsersComponent;