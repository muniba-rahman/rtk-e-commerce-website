import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoBagOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logOut } from '../../store/authSlice';

export default function Navbar() {

  const dispatch = useDispatch();
  const cartProducts = useSelector((state)=> state?.cart);
  const user = useSelector((state)=> state?.auth);

  console.log("user: ", user)

  return (
    <Container fluid>
        <Row className='p-3'>
            <Col md={6}>
                <Link to={"/"} style={{textDecoration: "none", color: "black"}}><h3>Home</h3></Link>
            </Col>
            <Col md={1} className='d-flex justify-content-end'>
            <Link to={"/cart"} style={{textDecoration: "none", color: "black"}}><IoBagOutline size={25} /><span>{cartProducts?.length}</span></Link>
            </Col>
            {user[0] && (<Col md={3}><p style={{textAlign: "end"}}>{`${user[0]?.name} ${user[0]?.email}`}</p></Col>)}
            {user[0] && (<Col md={2}><button onClick={()=> dispatch(logOut(user))}>Logout</button></Col>)}
            {!user[0] && (<Col md={2}><Link to={"/login"}>Login</Link></Col>)}
            
        </Row>
    </Container>
  )
}
