// All Routers
import Routers from './router/index';

// Routers
import {
  HashRouter as Router,
  // Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routers />
      </Router>
    </div>
  )
}

export default App;
