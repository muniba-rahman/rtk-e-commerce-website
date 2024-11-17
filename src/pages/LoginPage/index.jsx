import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from "./LoginPage.module.css";
import { useFormik } from 'formik';
import { LoginSchema } from '../../schema/LoginSchema';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/authSlice';

export default function LoginPage() {
    const dispatch = useDispatch();

    const initialValues = {
        name: "",
        email: "",
        password: ""
    };

    const login = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            handleSubmit(values);
        }
    });

    const handleSubmit = (values) => {
        dispatch(loginUser(values));
        console.log(values);
    };

    return (
        <Container>
            <Row className="gy-3">
                <Col md={12}>
                    <h1>Login Here</h1>
                </Col>
                <Col md={12}>
                    <form onSubmit={login.handleSubmit} className="gy-3">
                        <input
                            type="text"
                            placeholder='Full Name'
                            required
                            className={classes.inputClass}
                            value={login.values.name}
                            onChange={login.handleChange("name")}
                        />
                        {login.touched.name && login.errors.name && (
                            <p style={{ color: "red" }}>{login.errors.name}</p>
                        )}
                        <input
                            type="email"
                            placeholder='Email'
                            required
                            className={classes.inputClass}
                            value={login.values.email}
                            onChange={login.handleChange("email")}
                        />
                        {login.touched.email && login.errors.email && (
                            <p style={{ color: "red" }}>{login.errors.email}</p>
                        )}
                        <input
                            type="password"
                            placeholder='Password'
                            required
                            className={classes.inputClass}
                            value={login.values.password}
                            onChange={login.handleChange("password")}
                        />
                        {login.touched.password && login.errors.password && (
                            <p style={{ color: "red" }}>{login.errors.password}</p>
                        )}
                        <button type="submit" className={classes.btn}>Login</button>
                    </form>
                </Col>
                <Col md={3}>
                    <Link to={"/"}>Sign Up</Link>
                </Col>
            </Row>
        </Container>
    );
}
