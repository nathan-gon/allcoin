import { Route, Switch } from "react-router-dom";
import CoinDetail from "../../features/coin/CoinDetail";
import Playground from "../component/Playground";
import Header from "./Header";
import Home from "./Home";



 const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/single/:id' component={CoinDetail} />
      <Route exact path='/playground' component={Playground} />
    </Switch>
  </>
);

export default App;