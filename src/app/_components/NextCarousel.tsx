'use client';
import Carousel from 'react-bootstrap/Carousel';

const ExampleCarouselImage = ({ text }: { text: string }) => {
    return (
        <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#555"></rect>
            <text x="50%" y="50%" fill="#333" dy=".3em">{text}</text>
        </svg>
    )
}

export default function NextCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <ExampleCarouselImage text="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
