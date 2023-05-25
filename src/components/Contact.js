// import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    // const formInitialDetails = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    // }


// const [formDetails, setFormDetails] = useState(formInitialDetails);
// const [buttonText,setStatus] = useState({});

return(
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="contact us" />
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                    <form >
                        <Row>
                            
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
)


}