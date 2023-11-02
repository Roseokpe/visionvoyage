import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Routes>
         {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
