import { FC, useMemo } from "react";
import NavigationBreadcrumb, {PageLink} from "../../components/control/NavigationBreadcrumb";
import SearchInput from "../../components/control/SearchInput";
import { Form } from "react-bootstrap";
import ProductCard from "../../components/control/ProductCard";

const ProductList: FC = () => {
    const pageLinks = useMemo((): Array<PageLink> => {
        return [
            {
                title: 'Home',
                to: '/'
            },
            {
                title: 'Products',
                to: '/products',
                active: true
            }
        ];
    }, []);


    return (<>
        <NavigationBreadcrumb pageLinks={pageLinks} />
        <h3>Product List</h3>
        <hr />
        <div className="d-flex justify-content-end mb-3">
            <div className="d-flex gap-2 align-items-center">
                <div>Search :</div>
                <div>
                    <SearchInput onTextChanged={(searchText: string) => {

                    }} />
                </div>
                <div>Product Category :</div>
                <div>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
            </div>

        </div>
        <div className='d-flex gap-4 p-3 flex-wrap'>
            <>
                {
                    [1, 20, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((p, i) => {
                        return (
                            <ProductCard key={i} productName={`Product ${p}`}
                                productId={p} description={`Description ${p}`}
                                category={`Cate ${p}`}
                                imageUrl='' />
                        )
                    })
                }
            </>
        </div>
    </>)
}

export default ProductList;