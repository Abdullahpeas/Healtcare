import React, { useEffect, useState } from 'react';
import ShowTrainer from '../ShowTrainer/ShowTrainer';

const Trainer = () => {
    const [trainers, setTrainers] = useState([])
    useEffect(() => {
        fetch('/gym.json')
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, [])
    return (
        <div>
            <div className="container overflow-hidden">
                <h2>Trainers</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4  col-md-6 cols-12 col-lg-12">
                    {
                        trainers.slice(8, 14).map(trainer => <ShowTrainer
                            key={trainer.key}
                            trainer={trainer}></ShowTrainer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Trainer;