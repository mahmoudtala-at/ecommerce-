import { Carousel } from 'react-bootstrap';
import carouselOne from "/public/home_carousel/product_carousel1.jpg"
import carouselTwo from "/public/home_carousel/product_carousel2.jpg"
import carouselThree from "/public/home_carousel/product_carousel3.jpg"
function CarouselHome() {
    let carouselItems = [
        {
            src: carouselOne,
            id: 1,
            altText: "Slide 1",
            title: "Products one",
            description: "This is a description for the first slide."
        },
        {
            src: carouselTwo,
            id: 2,
            altText: "Slide 1",
            title: "Products two",
            description: "This is a description for the second slide."
        },
        {
            src: carouselThree,
            id: 3,
            altText: "Slide 1",
            title: "Products three",
            description: "This is a description for the third slide."
        }
    ]
    return (
        <Carousel>
            {
                carouselItems.map(product =>
                    <Carousel.Item key={product.id} className="h-100">
                        <img alt={product.altText} src={product.src} className="h-100"/>
                        <Carousel.Caption>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    );
}

export default CarouselHome;