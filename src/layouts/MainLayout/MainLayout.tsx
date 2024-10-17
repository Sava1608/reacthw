import React from 'react';
import NavMenuComponent from "../../components/NavMenuComponent/NavMenuComponent";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <NavMenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;