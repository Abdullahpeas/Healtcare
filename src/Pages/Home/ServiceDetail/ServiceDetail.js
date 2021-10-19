import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


const ServiceDetail = () => {
    const { id } = useParams();
    const [gyms, setGyms] = useState([]);
    useEffect(() => {
        fetch('/gym.json')
            .then(res => res.json())
            .then(data => {

                setGyms(data)
            })
    }, [])
    const matchingServices = gyms.find((gym) => gym.id === Number(id))

    const history = useHistory();
    const handleServices = () => {

        history.push('/home')
    }
    return (
        <>

            <div>
                <img className="img-fluid" src={matchingServices?.img} alt="" />
                <h3>{matchingServices?.name}</h3>
                <p>{matchingServices?.desc}</p>
                <button className="btn btn-warning" onClick={handleServices}>Services</button>
            </div>


        </>
    );
};

export default ServiceDetail;