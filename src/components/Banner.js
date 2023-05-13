import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Design", "UI/UX Design"];
    const period = 1500;
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={6}>
                            <span className="tagline"> Welcome to my Portfolio </span>
                            <h1>{`Hi I'm Prateek Takthar`}<span className="wrap"> {text}</span></h1>
                            <p> minus repellendus esse quibusdam saepe molestiae unde autem facilis odio deserunt! Magnam cum laudantium quo exercitationem asperiores sint a, et voluptas commodi error placeat, modi expedita eligendi, eum non.</p>
                            <button onClick={() => console.log("hello from banner button")}>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                        </Col>
                        <Col xs={12} md={6} xl={6}>
                            <img src={headerImg} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}