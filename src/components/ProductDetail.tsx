import { FC, useMemo } from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import emptyImage from '../assets/images/emptyImage.jpg';
import LabelWithData from "./control/labelWithData";
import NavigationBreadcrumb, {PageLink} from "./control/NavigationBreadcrumb";

const ProductDetail: FC = () => {
    const pageLinks = useMemo((): Array<PageLink> => {
        return [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: 'Products',
                to: '/products'
            },
            {
                title: 'Product Detail',
                to: '',
                active: true
            }
        ];
    }, [])
    return <>
    <NavigationBreadcrumb pageLinks={pageLinks} />
        <h3>
            Product Detail
        </h3>
        <hr />
        <Card bg="white">
            <Card.Body>
                <Container>
                    <Row className="mb-3">
                        <Col xs="12" className="d-flex justify-content-center">
                            <Image src="" className="mx-auto" thumbnail onError={e => {
                                const target = e.target as HTMLImageElement;
                                target.src = emptyImage;
                            }} />
                        </Col>
                    </Row>
                    <LabelWithData label="Name" data={'Product Name'} />
                    <LabelWithData label="Description" data={'Description'} />
                    <LabelWithData label="Category" data={'Category'} />
                    <LabelWithData label="In Stock" data={`${0}`} />
                    <LabelWithData label="Price" data={`${0}$`} />
                </Container>

            </Card.Body>
            <Card.Body className="d-flex justify-content-end">

                <Button variant="outline-primary ms-2" >Add TO cart</Button>
            </Card.Body>
        </Card>
    </>
}

export default ProductDetail;