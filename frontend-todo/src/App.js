import './App.css';
import {
    HashRouter as HRouter,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import TodoPage from "./components/TodoPage";
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
                        <Route
                            path='/todos'
                            exact component={() => <TodoPage/>}
                        />
                    </Switch>
                </HRouter>
          </h1>
      </div>
  );
}

export default App;
