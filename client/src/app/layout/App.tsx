import { Route, Switch } from "react-router-dom";
import CoinDetail from "../../features/coin/CoinDetail";
import Playground from "../component/Playground";
import Home from "./Home";



export default function App() {

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/single/:id' component={CoinDetail} />
        <Route exact path='/playground' component={Playground} />
      </Switch>
    </>


  );
}


