
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Products from './Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './Categories';
import Dashboard from './Dashboard';
import Customers from './Customers';
import Reports from './Reports';
import Error from './Error';
import Category1 from './Category1';
import Category2 from './Category2';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <div className='grid-container'>
          <Header toggleSide={toggleSidebar} />
          <Sidebar openSide={isOpen} toggleSide={toggleSidebar} />

          <main className='main-container'>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="product" element={<Products />} />
              <Route path="/category" element={<Categories />}>
                <Route index element={<Category1 />} />
                <Route path='category2' element={<Category2 />} />
              </Route>
              <Route path="/customer" element={<Customers />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>

        </div>
      </Router>
    </>

  );
}

export default App;
