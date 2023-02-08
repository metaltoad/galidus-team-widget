import "../../App.css";
import Content from "./Content";
import Cta from "./Cta";

function Hero() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="content-container">
          <Content content="Bem vindo a floresta dos sapos de nivel mais alto" />
          <Cta label="Learn React" url="https://reactjs.org" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
