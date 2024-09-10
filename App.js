import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';  // Home page component
import AboutPage from './AboutPage'; // Newly created About page
import ContactPage from './ContactPage';
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact us" element={<ContactPage />} />
        
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
