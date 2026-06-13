import { useState } from "react"
import { ArrowLeft } from '../icons/ArrowLeft';
import { ArrowRight } from '../icons/ArrowRight';
export const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const numberOfImages = images.length;
    const lastIndex = images.length - 1;

    const { src, alt } = images[currentImageIndex];

    const decreaseImageIndex = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1)
        } else {
            setCurrentImageIndex(lastIndex)
        }
    }

    const increaseImageIndex = () => {
        if (currentImageIndex < lastIndex) {
            setCurrentImageIndex(currentImageIndex + 1)
        } else {
            setCurrentImageIndex(0)
        }
    }

    return (
        <div className="carousel">
            <div
                className="carousel-arrow-container carousel-arrow-left"
                onClick={() => decreaseImageIndex()}
                aria-label="Select previous image"
            >
                <ArrowLeft fillColour="#F8F8FF" />
            </div>
            <div className="carousel-image-container">
                <img src={src} alt={alt} />
            </div>
            <div
                className="carousel-arrow-container carousel-arrow-right"
                onClick={() => increaseImageIndex()}
                aria-label="Select next image"
            >
                <ArrowRight fillColour="#F8F8FF" />
            </div>
        </div>
    )
}