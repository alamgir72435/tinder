import "./App.css";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/chat">
          <h1>I am in chat</h1>
        </Route>
        <Route path="/">
          <TinderCards />
          <SwipeButtons/>
        </Route>
      </Switch>
    </div>
  );
}
{
  /* Tinder card  */
}
{
  /* Button Below tinder cards  */
}
{
  /* chats screen  */
}
{
  /* individual chat screen */
}

export default App;
