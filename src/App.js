import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Hero from './components/hero';
import Flight from './components/flight';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Routes>
        <Route path="/" element={<Flight />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
