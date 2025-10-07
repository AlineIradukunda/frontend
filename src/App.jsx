import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Videos from './pages/Videos';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
<Route path="/about/story" element={<About />} />
<Route path="/about/team" element={<About />} />
<Route path="/about/careers" element={<About />} />

            <Route path="/products" element={<Products />} />
            <Route path="/videos" element={<Videos />} />
  <Route path="/contact" element={<Contact type="general" />} />
  <Route path="/contact/custom-orders" element={<Contact type="orders" />} />
  <Route path="/contact/support" element={<Contact type="support" />} />
  <Route path="/contact/feedback" element={<Contact type="feedback" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
