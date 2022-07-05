
import { Route, Router, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./container/About/About";
import Book_Appointment from "./container/Appointment/Book_Appointment";
import List_Appointment from "./container/Appointment/List_Appointment";
import Contact from "./container/Contact/Contact";
import Departments from "./container/Departments/Departments";
import Doctors from "./container/Doctors/Doctors";
import Home from "./container/home/Home";
import Login_signup from "./container/login_signup/Login_signup";
import Medicines from "./container/Medicines/Medicines";
import Reference from "./container/Reference/Reference";

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
        <Route path={'/appointment'} exact component={Book_Appointment}></Route>
        <Route path={'/login_signin'} exact component={Login_signup}></Route>
        <Route path={'/medicines'} exact component={Medicines}></Route>
        <Route path={'/reference'} exact component={Reference}></Route>
        <Route path={'/list_appointment'} exact component={List_Appointment}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

