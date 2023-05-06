import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, descriptions, imgUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{descriptions}</span>
                </div>
            </div>
        </Col>
    )
}