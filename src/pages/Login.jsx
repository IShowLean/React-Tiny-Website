import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../components/context";

const Login = () => {

    const {setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', true)
    }

    return (
        <div>
            <h1 style={{display: 'flex', justifyContent: 'center'}}>Login Page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Login'/>
                <MyInput type="password" placeholder='Password'/>
                <div style={{display: 'flex', justifyContent: 'center'}}><MyButton>Log in</MyButton></div>
            </form>
        </div>
    );
};

export default Login;