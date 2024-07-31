import './navigation.style.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg"
                className="navbar">
                <Navbar.Brand className='nav-brand'  href="#home">
                    Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">           
                    <Nav>
                        <Nav.Link href="#contactus">
                            About
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#community">
                            Price
                        </Nav.Link>
                        <Nav.Link href="#contactus">
                            Contact
                        </Nav.Link>
                    </Nav>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    );
};
export default Navigation;