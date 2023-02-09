import "../../App.css";
import {useEffect, useState} from "react";

function Hero({alignment, mode, readability, image, video, options, height}) {

    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    useEffect(()=> { setShow(true) }, [])

    const heroClassname = `hero ${show ? 'hero--show' : ''} ${mode === 'dark' ? 'hero--dark' : 'hero--light'}`

    const styles = {
        button: {
            backgroundColor: hover ? options.button.color : options.button.bgColor,
            color: hover ? options.button.bgColor : options.button.color,
        }
    }

  return (
      <div className={heroClassname} style={{height: height}}>
          <div className={`hero-container hero-alignment--${alignment}`}>
              {readability > 0 ? (
                  <span className="hero-container-readability" style={{opacity: readability}} />
                  ) : null}
              <div className="hero-media">
                  { video ? (
                      <video width="100%" height="auto" autoPlay muted loop>
                          <source src={video} type="video/mp4" />
                      </video>
                  ) : (
                      <div className="hero-content_image" style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                      }}/>
                  )}


              </div>
              <div className="hero-content" style={{
                  maxWidth: options.content.containerMaxWidth,
              }}>
                  <div className="hero-content-block" style={{
                      padding: options.content.padding,
                      maxWidth: options.content.maxWidth
                  }}>
                      <h2 className="hero-content_title" style={{fontSize: options.content.title.size}}>
                          {options.content.title.text}
                      </h2>
                      <h3 className="hero-content_subtitle" style={{fontSize: options.content.subtitle.size}}>
                          {options.content.subtitle.text}
                      </h3>
                      <div className="hero-content_cta">
                          <a className="hero-content_link"
                             target={options.button.target}
                             href={options.button.href}
                             style={styles.button}
                             onMouseEnter={handleMouseEnter}
                             onMouseLeave={handleMouseLeave}
                          >
                              {options.button.label}
                          </a>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  );
}

export default Hero;
