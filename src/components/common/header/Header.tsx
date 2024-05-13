import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import HeaderBasket from '../../eCommerce/headerBasket/HeaderBasket'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className='my-2 d-flex justify-content-between align-items-center'>
                <Nav.Link as={NavLink} to="/">
                    <h1 className='ms-2'><span>Our</span> <Badge bg='info'>Ecom</Badge></h1>
                </Nav.Link>
                
                <HeaderBasket />
                
            </div>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="home" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
                        <Nav.Link as={NavLink} to="about-us">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="login">Login</Nav.Link>
                        <Nav.Link as={NavLink} to="register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header