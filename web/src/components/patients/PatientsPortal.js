import React from 'react';
import { Navbar, Nav, Card, CardDeck, Container, Button } from 'react-bootstrap';
import Comm from '../home/images/comm.jpg';
import Diagnose from '../home/images/diagnose.jpg'
import Tele from '../home/images/tele.png';
import todo from '../home/images/todo.png';
import todo2 from '../home/images/todo2.jpg';
import todo1 from '../home/images/todo1.jpg';
import todo3 from '../home/images/todo3.jpg';
import { useHistory } from 'react-router-dom';
import fire from './fire';


/**
* @author
* @function PatientsPortal
**/

const PatientsPortal = (props) => {
    const history = useHistory()

    const handleLogout = () => {
        fire.auth().signOut()
            .then(() => { history.push('/patients') })
    };

    const navigateTo = (path) => {
        return (
            (e) => {
                e.preventDefault()
                history.push(path)
            }
        )


    }
    return (
        <div>
            <Container fluid>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">ArthuRx</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={navigateTo("/")}>Home</Nav.Link>
                        <Nav.Link onClick={navigateTo("/aboutUs")}>About Us</Nav.Link>
                        <Nav.Link onClick={navigateTo("/contactUs")}>Contact Us</Nav.Link>
                        <Nav.Link onClick={navigateTo("/signUp")}>Sign Up</Nav.Link>
                    </Nav>
                </Navbar>
                <h3>Patients Portal</h3>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Comm} />
                        <Card.Body>
                            <Card.Title>Speak to a doctor</Card.Title>
                            <Card.Text>
                                Our doctors are just a call away...
                         </Card.Text>
                            <Card.Link href="#"></Card.Link>
                            <hr />
                            <Card.Link href="/doctorContacts">Speak to a doctor, book an appointment...</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Our virtual consultation is top notch!</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={Diagnose} />
                        <Card.Body>
                            <Card.Title>Spot on diagnosis!</Card.Title>
                            <Card.Text>
                                Have you tried our virtual consulting rooms?
                         </Card.Text>
                            <Card.Link href="#"></Card.Link>
                            <hr />
                            <Card.Link href="/join">Enter chat room</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Our virtual consultation is top notch!</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={todo2} />
                        <Card.Body>
                            <Card.Title>Keep track of appointments</Card.Title>
                            <Card.Text>
                                Take notes of appointments and things you'd want to do to stay fit
                         </Card.Text>
                            <Card.Link href="#"></Card.Link>
                            <hr />
                            <Card.Link href="/to-do-list">To do list</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Our virtual consultation is top notch!</small>
                        </Card.Footer>
                    </Card>

                </CardDeck>
                <Button variant="dark" onClick={handleLogout} >Logout</Button>
            </Container>
        </div>
    )

}

export default PatientsPortal;