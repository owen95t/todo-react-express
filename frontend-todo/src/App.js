import './App.css';
import {
    HashRouter as HRouter,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <div className="App">
          <h1>
                <HRouter basename='/'>
                    <Switch>
                        <Route
                            path='/'
                            exact component={() => <HomePage/>}
                        />
                    </Switch>
                </HRouter>
          </h1>
      </div>
  );
}

export default App;
