import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard/ProductCard';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/cartSlice';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const getData = async () => {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products`);
        if (response) {
            const data = await response?.json();
            setProducts(data);
        }
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <Container>
            <Row className='gy-3 my-3'>
                <Col md={12}>
                    <h1>Available Products</h1>
                </Col>

                {loading ? (<p>Loading...</p>) : products?.map((e, i) => {
                    return (
                        <Col md={4} key={i}>
                            <ProductCard onClick={()=> dispatch(addProduct(e))} data={e} btnLabel={"Add To Cart"} />
                        </Col>
                    )
                })}


            </Row>
        </Container>
    )
}
