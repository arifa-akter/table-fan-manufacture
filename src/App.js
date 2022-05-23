import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Blogs from './components/Blogs/Blogs';
import AddProduct from './components/Dashboard/AddProduct';
import AddReview from './components/Dashboard/AddReview';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageOrder from './components/Dashboard/ManageOrder';
import ManageProduct from './components/Dashboard/ManageProduct';
import MyOrder from './components/Dashboard/MyOrder';
import MyProfile from './components/Dashboard/MyProfile';
import Home from './components/HomePage/Home';
import Footer from './components/Shares/Footer/Footer';
import Header from './components/Shares/Header/Header';
import NotFound from './components/Shares/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
        <Route index element={<MyOrder></MyOrder>}></Route>
        <Route path="addReview" element={<AddReview></AddReview>}></Route>
        <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
        <Route path="manageOrder" element={<ManageOrder></ManageOrder>}></Route>
        <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="makeAdmin" element={<MakeAdmin></MakeAdmin>}></Route>
        <Route path="manageProduct" element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
