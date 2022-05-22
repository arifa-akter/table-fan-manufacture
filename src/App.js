import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Blogs from './components/Blogs/Blogs';
import Home from './components/HomePage/Home';
import Header from './components/Shares/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
 
    </div>
  );
}

export default App;
