import Formations from "./Components/Formations";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div classNam="main-div">
        <h1 className="header">Dyno Management System</h1>
        <Formations />
      </div>
     </Router>
  );
}

export default App;
