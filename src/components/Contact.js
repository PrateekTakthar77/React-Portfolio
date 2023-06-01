import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
import TrackVisibiity from 'react-on-screen';
import { response } from "express";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("sending...");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong' });
        }
    };

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col aria-setsize={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) => 
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Get In Touch</h2>
                                <form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <input type="tel" value={formDetails.phone} placeholder="PHone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                        </Col>
                                        <Col size={12} sm={6} className="px-1">
                                            <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                            <button type="submit"><span>{buttonText}</span></button>
                                        </Col>
                                        {
                                            status.message && 
                                            <Col>
                                                <p className={status.success == false ? "danger" : "success"}>{status.message}</p>
                                            </Col>
                                        }
                                    </Row>
                                </form>
                            </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}