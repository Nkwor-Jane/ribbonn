import Homepage from "./compnents/Homepage";
import Activity from "./pages/Activity";
import Earn from "./pages/Earn";
import Wallet from "./pages/Wallet";
import Market from "./pages/Market";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/activity" component={Activity}></Route>
          <Route path="/earn" exact component={Earn}></Route>
          <Route path="/wallet" exact component={Wallet}></Route>
          <Route path="/market" exact component={Market}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
