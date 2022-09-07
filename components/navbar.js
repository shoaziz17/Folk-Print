import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsInstagram, BsTelegram, BsFacebook } from "react-icons/bs";
function NavigationBar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: 100 + 'px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Section 1</Nav.Link>
                        <Nav.Link href="#action2">Section 2</Nav.Link>
                        <Nav.Link href="#action2">Section 3</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><BsInstagram /></Nav.Link>
                        <Nav.Link href="#"><BsTelegram /></Nav.Link>
                        <Nav.Link href="#"><BsFacebook /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;