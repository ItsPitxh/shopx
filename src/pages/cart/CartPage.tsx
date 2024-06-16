import { FC, useMemo } from "react";
import NavigationBreadcrumb, { PageLink } from "../../components/control/NavigationBreadcrumb";
import { Card, ListGroup, Image, Badge, Button } from "react-bootstrap";

import emptyImage from '../../assets/images/emptyImage.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPage: FC = () => {

    const pageLinks = useMemo((): Array<PageLink> => {
        return [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: 'Cart',
                to: '',
                active: true
            }
        ];
    }, [])


    return (
        <>
            <NavigationBreadcrumb pageLinks={pageLinks} />
            <h3>Cart Detail</h3>
            <hr />
            <Card bg="white">
                <Card.Body>
                    <ListGroup className="gap-3">
                        {
                            [1, 2, 3, 4, 5].map((product, i) => {
                                return (
                                    <ListGroup.Item key={i} as="div" className="d-flex flex-wrap justify-content-between flex-row" >
                                        <div>
                                            <Image src="" className="object-fit-contain" style={{ height: '6em' }} onError={e => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = emptyImage;
                                            }} />
                                        </div>
                                        <div className="me-auto ms-2 d-flex flex-column justify-content-center">
                                            <div className="fw-bold">ProductName</div>
                                            <div className="small">Description</div>
                                            <div className="small">Price</div>
                                        </div>
                                        <div className="d-flex flex-row gap-2 align-items-center">
                                            <Badge bg="primary" pill>
                                                10
                                            </Badge>
                                            <Button variant="outline-link">
                                                <FontAwesomeIcon icon={faTrash} color="grey" />
                                            </Button>
                                        </div>
                                    </ListGroup.Item>
                                )
                            })
                        }

                    </ListGroup>
                </Card.Body>
                <Card.Body className="d-flex justify-content-end">
                    <Button>Check Out <FontAwesomeIcon icon={faShoppingCart} /></Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CartPage;