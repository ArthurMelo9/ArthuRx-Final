import React from 'react'
import { Card, Row, Col, Table, Button } from 'react-bootstrap'
import Doctor from '../home/images/telemedicine-760.jpg'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import fire from './fire';
/**
* @author
* @function DoctorsPortal
**/

const DoctorsPortal = () => {

    const history = useHistory()

    const handleLogout = () => {
        fire.auth().signOut()
            .then(() => { history.push('/doctors') })
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

                <h3>Doctors Portal</h3>
                <Row>
                    <Col>
                        <Card style={{ width: '36rem' }}>
                            <Card.Img variant="top" src={Doctor} />
                            <Card.Body>
                                <Card.Title>Doctors Corner</Card.Title>
                                <Card.Text>
                                    Welcome Doctor! Ready to save some lives?
    </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <Card.Link href="/join">Chat with patient</Card.Link>
                                <hr />
                                <Card.Link href="/appointments">Appointments</Card.Link>
                                <hr />


                                <Button variant="dark" onClick={handleLogout} >Logout</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <br />
                        <br />
                        <h4>Appointment Schedule</h4>
                        <hr />
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Age</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Jerry John</td>
                                    <td>Rawlings</td>
                                    <td>Male</td>
                                    <td>73</td>
                                    <td>14th November, 2020</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>Male</td>
                                    <td>53</td>
                                    <td>16th November, 2020</td>

                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Abigail</td>
                                    <td>Badu</td>
                                    <td>Female</td>
                                    <td>47</td>
                                    <td>20th November, 2020</td>

                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        </div >
    )

}

export default DoctorsPortal;