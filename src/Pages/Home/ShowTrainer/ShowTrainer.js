import React from 'react';
import './ShowTrainer.css';

const ShowTrainer = (props) => {
    const { name, img, specialist } = props.trainer;
    return (
        <>
            <div className="overflow-hidden">
                <div className="col">
                    <div className="card h-100 w-75 mx-auto">
                        <img className=' img-style' src={img} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Specialist: {specialist}</p>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShowTrainer;