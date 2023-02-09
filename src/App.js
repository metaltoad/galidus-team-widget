
import "./App.css";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel"
const options = {
  mode: 'dark',
  alignment: 'leftCenter',
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
    padding: '40px',
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

function App() {
  // return <Hero
  //     height={'100vh'}
  //     image={'/rpg_toad.png'}
  //     video={'/tech.mp4'}
  //     readability={0}
  //     alignment='leftCenter'
  //     mode='dark'
  //     options={options}
  // />;
  return <Carousel>
          <Hero height={'100vh'}
              image={'/rpg_toad.png'}
              video={'/tech.mp4'}
              readability={0}
              alignment='leftCenter'
              mode='dark'
              options={options}
          />
          <Hero height={'100vh'}
                image={'/rpg_toad.png'}
                video={'/tech.mp4'}
                readability={0}
                alignment='leftCenter'
                mode='dark'
                options={options}
          />
        </Carousel>
}

export default App;
