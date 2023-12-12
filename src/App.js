
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addbooks from './components/addBook';
import Navbar from './components/navbar';
import Booklist from './components/booklist.jsx';
import Readbooks from './components/readbook.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/books" element={<Booklist />} />
          <Route path="/books/:id" element={<Readbooks />} />
          <Route path="/book" element={<Addbooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;