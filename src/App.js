import { BrowserRouter } from "react-router-dom";
import Routers from "./Component/Routes/Routers";
function App() {
  return (
    <div className="font-Mukta">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
