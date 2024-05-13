import Product from "@components/eCommerce/product/Product"
import { Col, Container, Row } from "react-bootstrap"

const Products = () => {
    return (
        <Container>
            <Row>
                <Col xs="6" md="4" lg="3" className="mb-4">
                    <Product />
                </Col>
            </Row>
        </Container>
    )
}

export default Products