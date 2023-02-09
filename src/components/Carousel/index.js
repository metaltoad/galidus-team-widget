import React, {Children, useEffect, useState} from "react"
import './index.css'

const Carousel = ({timeout = 7000, children}) => {
    const countArray = Children.toArray(children).length;
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === countArray-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }
    useEffect(()=> {
        const interval = setInterval(() => {
            carouselInfiniteScroll()
        }, timeout)
        return () => clearInterval(interval)
    }, [])
    let index = 0;
        return (
            <div className='carousel-container'>
                {
                    Children.map(children, child => {
                        index++;
                        return (
                            <div key={index} className='carousel-item'
                                 style={{transform: `translate(-${currentIndex * 100}%)`}}>
                                {child}
                            </div>
                        )
                    })

                }

            </div>
        )
}
export default Carousel
