import { React, useState } from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './pages';
import { Navbar, SideBar } from './components';
function App() {
  const [width, setWidth] = useState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
          <Route path='/album' element={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
