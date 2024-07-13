import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./Routes/PageRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <PageRoutes></PageRoutes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
