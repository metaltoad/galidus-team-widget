import React, {Children, useEffect, useState} from "react"
import './index.css'

const Carousel = ({
  autoplay= false,
  timeout = 7000,
  showNav = true,
  buttonColor = '#fff',
  children,
}) => {
    const countArray = Children.toArray(children).length;
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNext = () => {
        if (currentIndex === countArray-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    const doClearInterval = (interval) => {
        clearInterval(interval)
    }

    const goToPrev = () => {
        if (currentIndex === 0) {
           return setCurrentIndex(countArray-1)
        }
        return setCurrentIndex(currentIndex-1)
    }

    const svgIcon = () => {
        return (
            <svg style={{fill: buttonColor}} className="tui_carousel-arrow" viewBox="0 0 100 100">
                <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
            </svg>
        )
    }

    useEffect(()=> {
        if (autoplay) {
            const interval = setInterval(() => {
                goToNext()
            }, timeout)
            return () => doClearInterval(interval)
        }
    }, [currentIndex])
    let index = 0;
        return (
            <div className='tui_carousel'>
                <div className="tui_carousel-container">
                    {
                        Children.map(children, child => {
                            index++;
                            return (
                                <div key={index} className='tui_carousel-item'
                                     style={{transform: `translate(-${currentIndex * 100}%)`}}>
                                    {child}
                                </div>
                            )
                        })
                    }
                </div>
                {
                    showNav ? (
                        <div className="tui_carousel-controls">
                            <button className='tui_carousel-prev' onClick={()=> goToPrev()}>
                                {svgIcon()}
                            </button>
                            <button className='tui_carousel-next' onClick={()=> goToNext()}>
                                {svgIcon()}
                            </button>
                        </div>
                    ) : null
                }
            </div>
        )
}
export default Carousel
