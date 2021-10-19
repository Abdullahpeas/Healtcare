import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/CF-Logo-16x9-wide-1024x439-removebg-preview.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar variant="light" bg="light" collapseOnSelect expand="lg" sticky="top">
                <Container>

                    <Navbar.Brand ><img width="110px" src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>

                        <Nav.Link as={Link} to="/trainer">Trainers</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>

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