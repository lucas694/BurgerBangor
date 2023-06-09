import './App.css';
import Header from "./Components/Header";
import BurgerBanner from "./Components/BurgerBanner";
import Group from "./Components/Group";
import Banner from "./Components/Banner";
import Frame from "./Components/Frame";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BurgerBanner />
      <Group />
      <Banner />
      <Frame />
      <Footer />
    </div>
  );
}

export default App;
