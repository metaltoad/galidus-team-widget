import "../../App.css";
import Content from "./Content";
import Cta from "./Cta";
import {useEffect, useState} from "react";

function Hero() {

    const [show, setShow] = useState(false)
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    useEffect(()=> { setShow(true) }, [])

    const options = {
        mode: 'dark',
        media: {
            image: {
                url: '/rpg_toad.png'
            },
            video: {
                url: ''
            }
        },
        content: {
            alignment: 'leftCenter',
            maxWidth: '600px',
            containerMaxWidth: '1680px',
            padding: '20x',
            title: {
                text: 'Welcome to the highest level frog forest',
                color: '#ffffff',
                size: '40px'
            },
            subtitle: {
                text: 'Start your journey today',
                color: '#ffffff',
                size: '29px'
            },
        },
        button: {
            target: '_blank',
            href: 'https://github.com/',
            label: 'Join now',
            bgColor: '#000000',
            color: '#ffffff',
        },
        height: "100vh",
        readability: 0.2,
    }

    const heroClassname = `hero ${show ? 'hero--show' : ''} ${options.mode === 'dark' ? 'hero--dark' : 'hero--light'}`

    const styles = {
        button: {
            backgroundColor: hover ? options.button.color : options.button.bgColor,
            color: hover ? options.button.bgColor : options.button.color,
        }
    }

  return (
    // <div className="App">
    //   <div className="App-header">
    //     <div className="content-container">
    //       <Content content="Bem vindo a floresta dos sapos de nivel mais alto" />
    //       <Cta label="Learn React" url="https://reactjs.org" />
    //     </div>
    //   </div>
    // </div>
      <div className={heroClassname} style={{height: options.height}}>
          <div className={`hero-container hero-alignment--${options.content.alignment}`}>
              {options.readability > 0 ? (
                  <span className="hero-container-readability" style={{opacity: options.readability}} />
                  ) : null}
              <div className="hero-media">
                  <div className="hero-content_image" style={{
                      backgroundImage: `url(${options.media.image.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                  }}/>
                  {/* video */}
              </div>
              <div className="hero-content" style={{
                  maxWidth: options.content.containerMaxWidth,
              }}>
                  <div className="hero-content-block" style={{
                      padding: options.content.padding,
                      maxWidth: options.content.maxWidth
                  }}>
                      <h2 className="hero-content_title">
                          {options.content.title.text}
                      </h2>
                      <h3 className="hero-content_subtitle">
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
