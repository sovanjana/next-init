import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import AuthImg from '../../assets/mandala.jpg';

import './auth.scss';

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <Container fluid className='auth-layout'>
            <Row>
                <Col md={6} className='p-0 h-100'>
                    <Image
                        src={AuthImg}
                        className='auth-image'
                        alt="Auth image"
                    />
                </Col>
                <Col md={6} className='auth-layout__form-container'>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}