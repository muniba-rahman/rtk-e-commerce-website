import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard/ProductCard';
import { removeProduct } from '../store/cartSlice';

export default function Cart() {
  
  const cartItem = useSelector((state)=> state?.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className='my-3'>
        <Col md={12}><h1>Your Cart</h1></Col>

        {cartItem?.length > 0 ? (cartItem?.map((e,i)=>{
          return(
            <Col md={4} key={i}>
              <ProductCard data={e} btnLabel={"Remove Product"} customBtnStyle={{background: "red"}} onClick={()=> dispatch(removeProduct(e?.id))} />
            </Col>
          )
        })) : (
          <Col md={12}><p>Your Cart is empty...</p></Col>
        )}

      </Row>
    </Container>
  )
}
