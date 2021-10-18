import React, { useEffect, useState } from 'react';
import DisplayServices from '../DisplayServices/DisplayServices';

const Services = () => {
    const [gyms, setGyms] = useState([]);
    useEffect(() => {
        fetch('/gym.json')
            .then(res => res.json())
            .then(data => setGyms(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="mt-5 pb-5">Our Services</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        gyms.map(gym => <DisplayServices gym={gym}></DisplayServices>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;