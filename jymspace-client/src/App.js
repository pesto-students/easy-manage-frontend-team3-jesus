

import Hero from'./components/Hero/Hero'
import './App.css';
import Features from './components/Features/Features';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Features/>
      <Reasons/>
      <Plans/>
      <Footer/>
     
    </div>
  );
}

export default App;
