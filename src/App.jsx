import './sass/main.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Feedback from './Feedback';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/feedback">
              <Feedback />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
