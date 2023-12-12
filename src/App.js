
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addbooks from './components/addBook';
import Navbar from './components/navbar';
import Booklist from './components/booklist.jsx';
import Readbooks from './components/readbook.jsx';
import { useState } from 'react';

function App() {
  const [isEdit, setIsedit] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/books" element={<Booklist setIsedit={setIsedit} />} />
          <Route path="/books/:id" element={<Readbooks />} />
          {isEdit ? <Route path="/editbook/:id" element={<Addbooks isEdit={true} setIsedit={setIsedit} />} />
            : <Route path="/addbook" element={<Addbooks isEdit={false} setIsedit={setIsedit} />} />
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;