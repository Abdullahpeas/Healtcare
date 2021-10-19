import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, handleUserLogin, setError } = useAuth();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleLogin = () => {
        handleUserLogin(email, password)
            .then(result => {
                history.push(redirect_uri)
            })


    }



    return (
        <>
            <div className="container col-md-6 cols-12">
                <form >

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email" aria-describedby="emailHelp" onChange={handleEmail} />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label" ></label>
                        <input type="password" placeholder="Enter Your Password" className="form-control" id="exampleInputPassword1" onChange={handlePassword} />
                    </div>
                    <div className="mb-3 form-check">

                        <label className="form-check-label" htmlFor="exampleCheck1"><Link to="/register">New to this website?</Link></label>
                    </div>
                </form>
                <button onClick={handleLogin} className="btn btn-primary my-3">Login</button>
                <br />
                <button className="btn btn-warning" onClick={handleGoogleSignIn}>Google</button>
            </div>

        </>
    );
};

export default Login;