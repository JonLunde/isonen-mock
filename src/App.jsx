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
              <span className="heading-primary">Arranger med iSonen</span>
              <span className="heading-secondary" style={{ color: '#003a78' }}>
                Arrangementsverktøy for idretten
              </span>
            </div>
            <button className="btn btn--blue">Les mer</button>
          </div>
          <div className="split split--login">
            <div className="split__text-container">
              <span className="heading-primary" style={{ color: '#fff' }}>
                Klar til å arrangere
              </span>
              <span className="heading-secondary" style={{ color: '#fff' }}>
                Logg inn med Idrettens ID, og opprett arrangement for din klubb
              </span>
            </div>
            <button className="btn btn--white">Log inn</button>
          </div>
        </div>

        <div className="events">
          <span className="heading-secondary">Se hva som arrangeres</span>
          <div className="events__container">
            <EventCard
              image="/images/event-card1.jpg"
              host="Fjellhamar FK"
              title="Bama cup"
              location="Fjellhamar stadion"
              date="04.06.2022"
            />
            <EventCard
              image="/images/event-card1.jpg"
              host="Fjellhamar FK"
              title="Bama cup"
              location="Fjellhamar stadion"
              date="04.06.2022"
            />
            <EventCard
              image="/images/event-card1.jpg"
              host="Fjellhamar FK"
              title="Bama cup"
              location="Fjellhamar stadion"
              date="04.06.2022"
            />
            <EventCard
              image="/images/event-card1.jpg"
              host="Fjellhamar FK"
              title="Bama cup"
              location="Fjellhamar stadion"
              date="04.06.2022"
            />
            <EventCard
              image="/images/event-card1.jpg"
              host="Fjellhamar FK"
              title="Bama cup"
              location="Fjellhamar stadion"
              date="04.06.2022"
            />
            <EventCard
              image="/images/event-card1.jpg"
              host="Fjellhamar FK"
              title="Bama cup"
              location="Fjellhamar stadion"
              date="04.06.2022"
            />
          </div>
          <button className="btn btn--blue events__button">
            Se alle arrangement
          </button>
        </div>

        <div className="testemonials">
          <span className="heading-secondary">Se hva andre sier om iSonen</span>
          <div className="testemonials__container">
            <Testemonial
              text="Det er enkelt å opprette arrangementer der og man får oversikt over innmelding og inntektsbeløp. Vi har ukentlig skøyteskole og derfor var det viktig å gjøre innmeldingen enklere. iSonen har vist seg å være veldig effektivt"
              source="Ola Nordmann, Daglig leder i Fjellhamar Fotballklubb"
            />
            <Testemonial
              text="Det er enkelt å opprette arrangementer der og man får oversikt over innmelding og inntektsbeløp. Vi har ukentlig skøyteskole og derfor var det viktig å gjøre innmeldingen enklere. iSonen har vist seg å være veldig effektivt"
              source="Ola Nordmann, Daglig leder i Fjellhamar Fotballklubb"
            />
            <Testemonial
              text="Det er enkelt å opprette arrangementer der og man får oversikt over innmelding og inntektsbeløp. Vi har ukentlig skøyteskole og derfor var det viktig å gjøre innmeldingen enklere. iSonen har vist seg å være veldig effektivt"
              source="Ola Nordmann, Daglig leder i Fjellhamar Fotballklubb"
            />
          </div>
        </div>

        <div className="video">VIDEO</div>

        <div className="action">
          <span className="heading-primary">
            Klar for å arrangere med iSonen?
          </span>
          <div className="action__button-container">
            <button className="btn btn--blue action__button">Les mer</button>
            <button className="btn btn--white action__button">Logg inn</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
