
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Practice from './Components/Practice/Practice';
import Client from './Components/Client/Client';
import Team from './Components/Team/Team';
import FAQ from './Components/FAQ/FAQ';
import Newletter from './Components/Newletter/Newletter';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Practice/>
    <Client/>
    <Team/>
    <FAQ/>
    <Newletter/>
    <Footer/>
    </div>
  );
}

export default App;
