
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
import DashBoard from './Componennts/DashBoard/DashBoard';
import PrivateRoute from './Componennts/PrivateRoute/PrivateRoute';
import PlaceORder from './Componennts/PlaceOrder/PlaceORder';
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
            <PrivateRoute path="/placeOrder/:id">
              <PlaceORder></PlaceORder>
            </PrivateRoute>
            <PrivateRoute path="/dash">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
      

          </Switch>
          <Footer/>
        </Router>

      </AuthProvider>


    </div>
  );
}

export default App;
