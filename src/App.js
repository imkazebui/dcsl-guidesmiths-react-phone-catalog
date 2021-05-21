import "./App.css";
import PhoneList from "./components/PhoneList";
import PhoneDetail from "./components/PhoneDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" exact component={PhoneDetail}></Route>
        <Route path="/" component={PhoneList}></Route>
      </Switch>
    </Router>
  );
}

export default App;
