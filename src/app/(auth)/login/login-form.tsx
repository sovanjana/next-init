'use client';

import { Button, Form } from "react-bootstrap";

export default function LoginForm() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}