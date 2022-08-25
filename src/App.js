
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
import ToggleContext from "./context/ThemeContext";
import { store } from "./Redux/Store";
import Privateroute from "./Route/Privateroute";
import Publicroute from "./Route/Publicroute";
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <div >
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          <ToggleContext>
            <Header />
            <Switch>
              <Publicroute path={'/'} exact component={Home} />
              <Publicroute path={'/departments'} exact component={Departments} />
              <Publicroute path={'/doctor'} exact component={Doctors} />
              <Publicroute path={'/about'} exact component={About} />
              <Publicroute path={'/contact'} exact component={Contact} />
              <Publicroute path={'/login_signin'} exact restricted={true} component={Login_signup} />
              <Publicroute path={'/reference'} exact component={Reference} />
              <Publicroute path={'/medicines'} exact component={Medicines} />
              <Privateroute path={'/appointment'} exact component={Book_Appointment} />
              <Privateroute path={'/list_appointment'} exact component={List_Appointment} />
            </Switch>
            <Footer />
          </ToggleContext>
        </Provider>
      </SnackbarProvider>

    </div>
  );
}

export default App;

