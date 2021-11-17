import { BrowserRouter as Router } from "react-router-dom";
import Content from "./compontents/Content";
import Sidebar from "./compontents/Sidebar";
import BottomBar from "./compontents/BottomBar";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </Router>
  );
}

export default App;
