import "../../App.css";

function Cta({ children, label, url, target }) {
  return (
    <div className="cta-container content">
      <a
        className="App-link"
        href={url}
        target={target}
        rel="noopener noreferrer"
      >
        {children}
        {label}
      </a>
    </div>
  );
}

export default Cta;
