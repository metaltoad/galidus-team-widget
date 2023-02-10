import "../../App.css";
import {useEffect, useState} from "react";

function Hero({
  alignment = 'center',
  mode = 'dark',
  readability = '0',
  image,
  video,
  height = '100vh',
  contentMaxWidth = '600px',
  containerMaxWidth = 'true',
  contentPadding = '80px',
  title = 'TUI HERO',
  titleColor = '#fff',
  titleSize= '40px',
  subtitle = 'React Component',
  subtitleColor = '#fff',
  subtitleSize = '27px',
  buttonTarget,
  buttonHref,
  buttonLabel,
  buttonBgColor,
  buttonColor
}) {

    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    useEffect(()=> { setShow(true) }, [])

    const heroClassname = `hero ${show ? 'hero--show' : ''} ${mode === 'dark' ? 'hero--dark' : 'hero--light'}`

    const styles = {
        button: {
            backgroundColor: hover ? buttonColor : buttonBgColor,
            color: hover ? buttonBgColor : buttonColor,
        }
    }

    const renderMedia = () => {
        if (video !== null && video !== '') {
            return <div className="hero-media">
                <video width="100%" height="auto" poster={image} autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video></div>
        } else if (image) {
            return <div className="hero-media"><div className="hero-content_image" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}/></div>
        }
    }

  return (
      <div className={heroClassname} style={{height: height}}>
          <div className={`hero-container hero-alignment--${alignment}`}>
              {readability > 0 ? (
                  <span className="hero-container-readability" style={{opacity: readability}} />
                  ) : null}
              {renderMedia()}
              <div className="hero-content" style={{
                  maxWidth: containerMaxWidth,
              }}>
                  <div className="hero-content-block" style={{
                      padding: contentPadding,
                      maxWidth: contentMaxWidth
                  }}>
                      {title ? (
                          <h2 className="hero-content_title" style={{fontSize: titleSize, color: titleColor}}>
                              {title}
                          </h2>
                      ):null}

                      {subtitle ? (
                          <h3 className="hero-content_subtitle" style={{fontSize: subtitleSize, color: subtitleColor}}>
                              {subtitle}
                          </h3>
                      ):null}

                      {buttonLabel ? (
                          <div className="hero-content_cta">
                              <a className="hero-content_link"
                                 target={buttonTarget}
                                 href={buttonHref}
                                 style={styles.button}
                                 onMouseEnter={handleMouseEnter}
                                 onMouseLeave={handleMouseLeave}
                              >
                                  {buttonLabel}
                              </a>
                          </div>
                      ):null}

                  </div>
              </div>
          </div>
      </div>
  );
}

export default Hero;
