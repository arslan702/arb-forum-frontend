import "./App.css";
import Routing from "./components/Routing/Routing";
import { MyProvider } from "./context/MyContext";

function App() {
  return (
    <div>
      <MyProvider>
        <div className="">
          <Routing />
        </div>
      </MyProvider>
    </div>
  );
}

export default App;
