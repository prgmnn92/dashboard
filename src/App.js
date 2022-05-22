import "./App.css";

import { Layout } from "./components";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
