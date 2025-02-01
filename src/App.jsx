import Addsds from "./components/Logos";
import AILeadsPage from "./components/AILeadsPage";
import DrawerAppBar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-[#002228]">
        <DrawerAppBar />
        <AILeadsPage />
        <Addsds />
      </div>
    </>
  );
}

export default App;
