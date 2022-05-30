import { BrowserRouter, HashRouter } from "react-router-dom";
import Routers from "./Component/Routes/Routers";
function App() {
  return (
    <div className="font-Mukta">
      <HashRouter>
        <Routers />
      </HashRouter>
    </div>
  );
}

export default App;
