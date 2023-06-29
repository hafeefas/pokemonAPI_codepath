import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "../pages/Home";
import Shoes from '../pages/Shoes';
import Shoppers from '../pages/Shoppers'


function App() {
  return (
    <Router>
      <div className="App">
         {/* Navigation */}
         <nav>
          <ul>
              <Link to="/Home">Home</Link>
            <ul>
              <Link to="/Shoes/*">Shoes</Link>
            </ul>
            <ul>
              <Link to = "/Shoppers/*">Shoppers</Link>
            </ul>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Shoes/*" element={<Shoes />} />
          <Route path= "/Shoppers/*" element = {<Shoppers/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
