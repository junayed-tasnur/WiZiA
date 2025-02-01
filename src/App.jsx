import Addsds from "./components/Logos";
import AILeadsPage from "./components/AILeadsPage";
import DrawerAppBar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="bg-[#002228]">
        <DrawerAppBar />
        <AILeadsPage />
        <Addsds />
        <Card/>
      </div>
    </>
  );
}

export default App;
