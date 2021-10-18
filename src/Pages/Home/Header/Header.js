import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>

                    <Navbar.Brand ><span className="logo-style">CROSSFIT</span> GYM
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        {
                            user?.email && <span> {user?.displayName}</span>
                        }
                        {user?.email ?
                            <button className="btn btn-warning" onClick={logOut}>Log out</button> :
                            <Nav.Link as={Link} to="/register">Sing up</Nav.Link>}


                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div >
    );
};

export default Header;