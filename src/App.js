import Header from "./components/Header";
import Panel from "./components/Panel";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="bg-slate-100">
      <div class="bg-white min-h-screen w-4/5 grid grid-flow-row shadow-xl mx-auto overflow-auto rounded-2xl">
        <div class="self-start">
          <Header />
        </div>
        <div class="self-center">
          <Panel />
        </div>
        <div class="self-end">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
