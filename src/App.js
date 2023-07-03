import { Routes , Route } from "react-router-dom";

import Header from "./components/header";
import MainPage from "./pages/mainPage/MainPage";
import CirclePage from "./pages/circlePage/circlePage";
import SquarePage from './pages/squarePage/squarePage';

function App() {
  return (
    <div className="wrap" id="canvas-contianer">
      <Header />
      <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/circle" element={<CirclePage />}></Route>
          <Route path="/square" element={<SquarePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
