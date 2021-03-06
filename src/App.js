import logo from './logo.svg';
import './App.css';
import Header from './Pages/Home/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import AuthProvider from './context/AuthProvider';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Home/Footer/Footer';
import Trainer from './Pages/Home/Trainer/Trainer';
import About from './Pages/Home/About/About';
import NotFound from './Pages/Home/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/services/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/trainer">
              <Trainer></Trainer>
            </PrivateRoute>

            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
