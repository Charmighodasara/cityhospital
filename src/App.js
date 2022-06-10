import { Route, Router, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Departments from "./container/Departments/Departments";
import Home from "./container/home/Home";

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route path={'/'} exact component={Home}></Route>
        <Route path={'/departments'} exact component={Departments}></Route>
        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
