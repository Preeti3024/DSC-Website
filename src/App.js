import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header, Home, Testimonials, Contact } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">    
          <Header />
          <Home />
          <Testimonials/>
          <Contact />
        </Route>
      </Router>
      <a
        href="https://wa.me/+91797744710"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
