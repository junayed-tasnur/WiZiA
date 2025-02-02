import Addsds from "./components/Logos";
import AILeadsPage from "./components/AILeadsPage";
import DrawerAppBar from "./components/Navbar";
import Card from "./components/Card";
import Train from "./components/Train";
import TestimonialSlider from "./components/Slider";
import Footer from "./components/Footer";

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
        <Footer/>
      </div>
    </>
  );
}

export default App;
