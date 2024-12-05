import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home/WeatherApp.jsx';
import About from './components/About/About.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Contact from './components/Contact/Contact.jsx';
import Services from './components/Services/Services.jsx';
import Footer from './components/Footer/Footer.jsx';
import NotFound from './components/NotFound.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/services',
//         element: <Services />,
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <NotFound/>
//   }
// ]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />        
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>,
);