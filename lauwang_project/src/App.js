import './App.css';
import Home from './component/Home/Home';
import Menu from './component/Menu/Menu';
import Introduce from './component/Introduce/Introduce';
import Book from './component/Book/Book';
import Login from './component/Login/Login';
import Preferential from './component/Preferential/Preferential';
import Blog from './component/Blog/Blog';
import New1 from './component/New/New1';
import New2 from './component/New/New2';
import Admin_Home from './component/Admin/Admin_Home';
import Admin_AllMembers from './component/Admin/Admin_Members/Admin_AllMembers';
import Admin_AllPost from './component/Admin/Admin_post/Admin_AllPost';
import Admin_Write_a_newPost from './component/Admin/Admin_post/Admin_Write_a_newPost';
import Admin_SetTable from './component/Admin/Admin_SetTable/Admin_SetTable';
import Admin_User from './component/Admin/Admin_User/Admin_User';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <div id="main-content" className="App">
              <Routes>
                <Route path="/" element={<Home />}> </Route>
                <Route path="/Thucdon" element={<Menu />}> </Route>
                <Route path="/Gioithieu" element={<Introduce />}> </Route>
                <Route path="/Datban" element={<Book />}> </Route>
                <Route path="/DangNhap" element={<Login />}> </Route>
                <Route path="/Uudai" element={<Preferential/>}></Route>
                <Route path="/Blog" element={<Blog />}> </Route>
                <Route path="/Trangchu/Tintuc" element={<New1 />}> </Route>
                <Route path="/Trangchu/Tin-tuc" element={<New2 />}> </Route>
                <Route path="/Quanly_Trangchu" element={<Admin_Home />}> </Route>
                <Route path="/Tatcathanhvien" element={<Admin_AllMembers />}> </Route>
                <Route path="/Tatcabaiviet" element={<Admin_AllPost />}> </Route>
                <Route path="/Baivietmoi" element={<Admin_Write_a_newPost />}> </Route>
                <Route path="/Quanlydatban" element={<Admin_SetTable />}> </Route>
                <Route path="/Tatcanguoidung" element={<Admin_User />}> </Route>
              </Routes>
          </div>
    </BrowserRouter>
  );
}

export default App;