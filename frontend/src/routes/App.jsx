import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../index.css';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Upload from '../pages/Upload';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login></Login>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/upload" element={<Upload></Upload>} />
            <Route path="*" element={<NotFound></NotFound>}/>              
        </Routes>      
      </BrowserRouter>

  );
}

export default App;