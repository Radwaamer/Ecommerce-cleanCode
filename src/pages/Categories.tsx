import Category from "@components/eCommerce/category/Category"
import { Col, Container, Row } from "react-bootstrap"

const Categories = () => {
    return (
        <Container>
            <Row>
                <Col xs="6" md="4" lg="3" className="mb-4">
                    <Category />
                </Col>
            </Row>
        </Container>
    )
}

export default Categories