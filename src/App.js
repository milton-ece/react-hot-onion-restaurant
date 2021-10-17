import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route>
          <Header></Header>
        </Route>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Route>
          <Footer></Footer>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
