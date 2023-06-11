import { React, useState } from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Album, Home, Singers, CategoryPage } from './pages';
import { Footer, Navbar, SideBar } from './components';
function App() {
  const [width, setWidth] = useState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ background: '#14182a' }}>
      <BrowserRouter>
        <Navbar
          setWidth={setWidth}
          width={width}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <SideBar
          setWidth={setWidth}
          width={width}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='album' element={<Album />} />
          <Route path='analytics' element={<Singers />} />
          <Route path='category' element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
