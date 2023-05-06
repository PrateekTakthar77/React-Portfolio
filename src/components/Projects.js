import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est odio ab magni fuga atque maiores consequatur, laudantium dicta magnam? Sed?</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 ">  
                            <Nav.Item>
                                <Nav.Link eventKey="first">Active</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Option 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >option 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
                                                <ProjectCard 
                                                 key={index}
                                                 {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem ipsum </Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipsum </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="" />
        </section>
    )
}