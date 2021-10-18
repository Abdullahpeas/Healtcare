import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './DisplayServices.css';

const DisplayServices = (props) => {
    const { id, name, img, desc } = props.gym;
    const url = `/services/${id}`
    const history = useHistory();
    const handleBtn = (id) => {
        history.push(`services/${id}`)
    }
    return (
        <div>
            <div className="col">
                <div className="card h-100 w-75 mx-auto">
                    <img className=' img-style' src={img} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{desc}</p>
                        <Link to={url}>
                            <button className="btn btn-warning" onClick={handleBtn}>Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayServices;