import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/headers/Header";
import { DataProvider } from "./GlobalState";
import MainPages from "./components/mainpages/Pages";
import MouseParticles from "react-mouse-particles";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <MainPages />
          <MouseParticles g={1} color="random" cull="col,image-wrapper" />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
