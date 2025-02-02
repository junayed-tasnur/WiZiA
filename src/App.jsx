import Addsds from "./components/Logos";
import AILeadsPage from "./components/AILeadsPage";
import DrawerAppBar from "./components/Navbar";
import Card from "./components/Card";
import Train from "./components/Train";

function App() {
  return (
    <>
      <div className="bg-[#002228]">
        <DrawerAppBar />
        <AILeadsPage />
        <Addsds />
        <Card />
        <Train />
      </div>
    </>
  );
}

export default App;
