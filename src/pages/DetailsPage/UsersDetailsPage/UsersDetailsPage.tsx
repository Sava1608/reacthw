import React from 'react';
import UsersDetailsComponent from "../../../components/Details/UsersDetailsComponent/UsersDetailsComponent";
import {Outlet} from "react-router-dom";

const UsersDetailsPage = () => {

    return (
        <div>
            <UsersDetailsComponent/>
            <Outlet/>
        </div>
    );
};

export default UsersDetailsPage;