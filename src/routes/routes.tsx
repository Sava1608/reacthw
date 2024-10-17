import {createBrowserRouter} from "react-router-dom";
import React from "react";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import UsersPage from "../pages/UsersPage/UsersPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import UsersDetailsPage from "../pages/DetailsPage/UsersDetailsPage/UsersDetailsPage";
import PostDetailComponent from "../components/Details/PostDetailComponent/PostDetailComponent";

export const routes = createBrowserRouter([
    {
        path:'/', element:<MainLayout/>,children:[
            {index:true, element:<HomePage/>},
            {path:'users', element:<UsersPage/>},
            {path:'users/:id', element:<UsersDetailsPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'posts/:id', element:<PostDetailComponent/>},
            {path:'comments', element:<CommentsPage/>}
        ]
    },
])