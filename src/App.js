import './App.css';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from './components/Home/Home';
import Fal from './components/Fal/Fal';
import Shaer from './components/Shaer/Shaer'
import Ashaar from "./components/Ashaar/Ashaar";
function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path="/" exact element={<Home/>} />
                  <Route path="/fal" exact element={<Fal/>} />
                  <Route path="/shaer" exact element={<Shaer/>} />
                  <Route path="/random/poet" exact element={<Ashaar/>} />
              </Routes>
          </Router>
      </>
  );
}

export default App;
