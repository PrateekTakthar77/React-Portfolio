import { Container,Row,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
export const Banner = () => {
    return(
        <>
        <section className="banner" id="home">
            <Container>
                <Row className ="align-items-center">
                   <Col xs={12} md={6} xl={7}>
                    <span className="tagline"> Welcome to my Portfolio </span>
                    <h1>{`Hi I'm Prateek Takthar`}<span></span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora voluptatibus aspernatur nostrum distinctio natus blanditiis ratione fugiat quae, ipsam sequi nulla, minus repellendus esse quibusdam saepe molestiae unde autem facilis odio deserunt! Magnam cum laudantium quo exercitationem asperiores sint a, et voluptas commodi error placeat, modi expedita eligendi, eum non.</p>
                    <button onClick={() => console.log("hello from banner button")}>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                   </Col>
                   <Col xs={12} md={6} xl={7}>
                    <img src={headerImg} alt="Header Img" />
                   </Col> 
                </Row>
            </Container>
        </section>
        </>
    )
}