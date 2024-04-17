'use client';
import { ListGroup } from "react-bootstrap";
import Link from "next/link";

import './blog.scss';

export default function Blog() {
    return (
        <ListGroup className='blog__list'>
            <ListGroup.Item as={Link} href='blog/1'>Blog 1</ListGroup.Item>
            <ListGroup.Item as={Link} href='blog/2'>Blog 2</ListGroup.Item>
            <ListGroup.Item as={Link} href='blog/3'>Blog 3</ListGroup.Item>
            <ListGroup.Item as={Link} href='blog/4'>Blog 4</ListGroup.Item>
            <ListGroup.Item as={Link} href='blog/5'>Blog 5</ListGroup.Item>
        </ListGroup>
    )
}