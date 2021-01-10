import { useEffect } from "react";
import { fetchImages } from "./api";

const Header = () => {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Dog Images</h1>
        </div>
      </div>
    </header>
  );
};

const Image = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={props.src} alt="cute dog" />
        </figure>
      </div>
    </div>
  );
};

const Loading = () => {
  return <p>Loading...</p>;
};

const Gallery = (props) => {
  const { urls } = props;
  if (urls === null) {
    return <Loading />;
  }

  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
};

const Main = () => {
  const urls = null;

  // memo: 初回コンポーネントレンダリング時のみ実行
  useEffect(() => {
    fetchImages("shiba").then((urls) => console.log(urls));
  }, []);
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <p>Dog</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
