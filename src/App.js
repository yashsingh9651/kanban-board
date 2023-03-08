import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import State from "./context/State";
function App() {
  return (
    <>
    <State>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </State>
    </>
  );
}

export default App;
