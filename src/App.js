import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/login" element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
