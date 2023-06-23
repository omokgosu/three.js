import { Routes , Route } from "react-router-dom";

import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Main>
        <Routes>
            <Route path="/"></Route>
        </Routes>
      </Main>
    </div>
  );
}

export default App;
