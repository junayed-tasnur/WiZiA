import Addsds from "./components/Logos";
import AILeadsPage from "./components/AILeadsPage";
import DrawerAppBar from "./components/Navbar";
import Card from "./components/Card";
import Train from "./components/Train";
import TestimonialSlider from "./components/Slider";
import Footer from "./components/Footer";
import Embrace from "./components/Embrace";
import Allocate from "./components/Allocate";

function App() {
  return (
    <>
      <div className="bg-[#002228]">
        <DrawerAppBar />
        <AILeadsPage />
        <Addsds />
        <Card />
        <Train />
        <TestimonialSlider />
        <Allocate/>
        <Embrace/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
