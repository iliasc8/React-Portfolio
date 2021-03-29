import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import './App.css'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
        <Navbar />
    <Router>
      <Switch>

        <Route exact path="/">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>

        <Route exact path="/portfolio">
          <Portfolio />
        </Route>

      </Switch>
    </Router>
        <Footer />
    </>
  );
}

export default App;
