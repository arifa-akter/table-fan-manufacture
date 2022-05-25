import { Route, Routes } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import RequireAdmin from './components/Authentication/RequireAdmin';
import RequireAuth from './components/Authentication/RequireAuth';
import Blogs from './components/Blogs/Blogs';
import AddProduct from './components/Dashboard/AddProduct';
import AddReview from './components/Dashboard/AddReview';
import Dashboard from './components/Dashboard/Dashboard';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import ManageOrder from './components/Dashboard/ManageOrder';
import ManageProduct from './components/Dashboard/ManageProduct';
import MyOrder from './components/Dashboard/MyOrder';
import MyProfile from './components/Dashboard/MyProfile';
import PaymentOrder from './components/Dashboard/PaymentOrder';
import Home from './components/HomePage/Home';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Purchase from './components/Purchase/Purchase';
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
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
        <Route index element={<MyOrder></MyOrder>}></Route>
        <Route path="addReview" element={<AddReview></AddReview>}></Route>
        <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
        <Route path="payment/:id" element={<PaymentOrder></PaymentOrder>}></Route>
        <Route path="manageOrder" element={<RequireAdmin><ManageOrder></ManageOrder></RequireAdmin>}></Route>
        <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
        <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
        <Route path="manageProduct" element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
