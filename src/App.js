import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/layout/Navigation/Navigation";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navigation />
          <main>
            <Switch>
              <Route path="/" exact render={() => <Home />} />
            </Switch>
          </main>
        
      </BrowserRouter>
    </>
  );
}

export default App;
