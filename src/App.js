import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menubar from './Component/Menubar/Menubar';
import Footer from './Component/Footer/Footer';
import RegisterForm from './Component/RegisterForm/RegisterForm';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AboutUs from './Component/About Us/AboutUs';
import Doctor from './Component/Doctor/Doctor';
import Contact from './Component/Contact/Contact';
import ServiceDetails from './hooks/ServiceDetails/ServiceDetails';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/doctor">
              <Doctor></Doctor>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/servicedetails/:servicedetailsId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <RegisterForm></RegisterForm>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
