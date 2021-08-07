import './sass/main.scss';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import EventCard from './components/EventCard';
import Testemonial from './components/Testemonial';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="header">
          <img
            className="header__image"
            src="/images/header-canoo.jpg"
            alt="Woman relaxing in a canoo."
          />
          <Searchbar />
        </div>
        <div className="split-cotainer">
          <div className="split split--read-more">
            <div className="split__text-container">
              <span className="split__title">Arranger med iSonen</span>
              <span className="split__subtitle">
                Arrangementsverktøy for idretten
              </span>
            </div>
            <button className="btn btn--blue">Les mer</button>
          </div>
          <div className="split split--login">
            <div className="split__text-container">
              <span className="split__title">Klar til å arrangere</span>
              <span className="split__subtitle">
                Logg inn med Idrettens ID, og opprett arrangement for din klubb
              </span>
            </div>
            <button className="btn btn--white">Les mer</button>
          </div>
        </div>

        <div className="events">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <button className="btn btn--blue events-button">
            Se alle arrangement
          </button>
        </div>

        <div className="testemonials">
          <Testemonial />
          <Testemonial />
          <Testemonial />
        </div>

        <div className="video">VIDEO</div>

        <div className="action">
          <button className="btn btn--blue action-button">Les mer</button>
          <button className="btn btn--blue action-button">Logg inn</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
