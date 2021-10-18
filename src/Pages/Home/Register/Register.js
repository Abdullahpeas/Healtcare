import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {

    const { signInUsingGoogle, handleUserRegister, setName, setUserName, user } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";


    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }




    const handleRegister = () => {

        handleUserRegister(email, password)
            .then((result) => {
                history.push(redirect_uri)
                setUserName(user)
                window.location.reload()

            })


    }



    const handleNameChange = e => {
        setName(e.target.value)


    }
    return (
        <div>

            <form className="mx-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label"></label>
                    <input type="name" className="form-control" id="exampleInputName" placeholder="Enter Your Name" onBlur={handleNameChange} aria-describedby="nameHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
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

                    <label className="form-check-label" htmlFor="exampleCheck1"><Link to="/login">Already Registered?</Link></label>
                </div>
            </form>
            <button onClick={handleRegister} className="btn btn-primary mx-3 my-3">Register</button>
            <br />
            <button className="btn btn-warning" onClick={handleGoogleSignIn}>Google</button>
        </div>
    );
};

export default Register;