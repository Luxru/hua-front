import Header from "./Header";
import Panel from "./Panel";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-slate-100">
      <div className="bg-white min-h-screen w-4/5 grid grid-flow-row shadow-xl mx-auto overflow-auto rounded-2xl">
        <div className="self-start">
          <Header />
        </div>
        <div className="self-center">
          <Panel />
        </div>
        <div className="self-end">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
