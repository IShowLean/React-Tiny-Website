import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "./context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route, idx) =>
                    <Route key={idx} path={route.path} element={<route.component/>} exact={route.exact}/>
                )}
                <Route path="*" element={ <Navigate to="/posts" />}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, idx) =>
                    <Route key={idx} path={route.path} element={<route.component/>} exact={route.exact}/>
                )}
                <Route path="*" element={ <Navigate to="/login" />}/>
            </Routes>
    );
};

export default AppRouter;