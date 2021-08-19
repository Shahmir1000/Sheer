import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./config/routes";

import styles from "./App.module.css";
// Components
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Navbar from "./components/Navbar/Navbar";

library.add(fab, faBars, faEnvelope);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
