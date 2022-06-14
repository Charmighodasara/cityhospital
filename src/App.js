
import { Route, Router, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./container/About/About";
import Appointment from "./container/Appointment/Appointment";
import Contact from "./container/Contact/Contact";
import Departments from "./container/Departments/Departments";
import Doctors from "./container/Doctors/Doctors";
import Home from "./container/home/Home";
import Login_signup from "./container/login/signup/Login_signup";

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route path={'/'} exact component={Home}></Route>
        <Route path={'/departments'} exact component={Departments}></Route>
        <Route path={'/doctor'} exact component={Doctors}></Route>
        <Route path={'/about'} exact component={About}></Route>
        <Route path={'/contact'} exact component={Contact}></Route>
        <Route path={'/appointment'} exact component={Appointment}></Route>
        <Route path={'/login_signup'} exact component={Login_signup}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
