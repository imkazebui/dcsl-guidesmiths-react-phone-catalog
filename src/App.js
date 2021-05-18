import "./App.css";
import PhoneList from "./PhoneList";
import PhoneDetail from "./PhoneDetail";
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
