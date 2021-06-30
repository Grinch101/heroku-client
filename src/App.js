import Formations from "./Components/Formations";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dynos from "./Components/Dynos";

function App() {
  return (
    <Router>
      <div classNam="main-div">
        <h1 className="header">Dyno Management System</h1>
        {/* <Route path="/" exact component={Formations} /> */}
        <Formations />
        {/* <Route path="/AA" exact component={Dynos} /> */}
        {/* <Formations/> */}
      </div>
     </Router>
  );
}

export default App;
