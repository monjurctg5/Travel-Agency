
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './context/AuthProvider';
import Header from './Componennts/Header/Header';
import Home from './Componennts/Home/Home';
import About from './Componennts/About/About';
import Contact from './Componennts/Contact/Contact';
import Login from './Componennts/Login/Login';
import Footer from './Componennts/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Componennts/Register/Register';
import DashBoard from './Componennts/DashBoard/DashBoard';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/dash">
              <DashBoard></DashBoard>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>

          </Switch>
          <Footer/>
        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;
