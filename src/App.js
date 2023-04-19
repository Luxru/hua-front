import Header from "./components/Header";
import Panel from "./components/Panel";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div class="bg-white min-h-screen min-w-screen grid grid-flow-row shadow-md mx-auto">
      <div class="self-start" >
        <Header />
      </div>
      <div class="self-center">
        <Panel />
      </div>
      <div class="self-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
