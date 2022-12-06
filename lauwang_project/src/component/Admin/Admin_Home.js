import React from "react";
import { Link } from "react-router-dom";
import Admin_Header from "./Admin_Header";

function Admin_Home(){
    return(
    <>
      <div>
        <Admin_Header/>
        <div className="container-fluid">
          <div className="row" style={{color: 'aliceblue', height: '100%'}}>
            {/* col 1 */}
            <div className="col-3" style={{backgroundColor: '#F68921',width:'20%',textAlign:'start'}}>
              <h2 style={{fontSize: '35px', textAlign: 'center', marginBottom: '20px', paddingTop: '50px'}}>Quản lý danh mục</h2>
              <p style={{textAlign: 'center'}}>-------</p>
              <p style={{color: 'aliceblue', fontSize: '25px',textAlign:'start',fontWeight:'bolder',paddingTop: '50px'}}>
                <i className="bi bi-book-fill" /> Quản lý bài viết
              </p>
              <Link to="/Tatcabaiviet" style={{textDecoration: 'none', color: 'aliceblue', fontSize: '20px'}}> - Tất cả bài viết</Link><br />
              <Link to="/Baivietmoi" style={{textDecoration: 'none', color: 'aliceblue', fontSize: '20px'}}> - Viết bài mới</Link><br />
              <br />
              <p style={{color: 'aliceblue', fontSize: '25px',fontWeight:'bolder',paddingTop: '50px'}}>
                <i className="bi bi-person-video2" /> Thông tin người dùng
              </p>
              <Link to="/Tatcanguoidung" style={{textDecoration: 'none', color: 'aliceblue', fontSize: '20px'}}> - Danh sách người dùng</Link><br />
              <p style={{color: 'aliceblue', fontSize: '25px',fontWeight:'bolder',paddingTop: '50px'}}>
                <i className="bi bi-person-rolodex" /> Thông tin khách hàng
              </p>
              <Link to="/Tatcathanhvien" style={{textDecoration: 'none', color: 'aliceblue', fontSize: '20px'}}> - Danh sách khách hàng</Link><br />
              <p style={{paddingTop: '50px'}}>
                <i className="bi bi-clipboard2-fill" /> 
                <Link to="/Quanlydatban" style={{textDecoration: 'none', color: 'aliceblue', fontSize: '25px',fontWeight:'bolder'}}>Quản lý đặt bàn online</Link><br />
              </p>
              <p style={{fontSize: '40px',paddingTop: '150px'}}>
                <i className="bi bi-box-arrow-right" /> 
                <Link to="/" style={{textDecoration: 'none', color: 'aliceblue'}}>Đăng xuất</Link>
              </p>
            </div>
            {/* col 2 */}
            <div className="col-9">
              {/* header col 2 row1*/}
              <div className="container-fluid">
                <div className="row">
                  <div className="col">
                    <p style={{paddingTop: '20px', color: 'black', fontSize: '25px', fontFamily: 'Charmonman'}}>Dashboard</p>
                  </div>
                  <div className="col">
                    <p /><nav aria-label="breadcrumb">
                      <ol className="breadcrumb" style={{float: 'right'}}>
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                      </ol>
                    </nav><p />
                  </div>
                </div>
              </div>
              {/* body col 2 row2*/}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-3">
                    <div style={{color: 'aliceblue', backgroundColor: 'rgb(104, 163, 240)', textAlign: 'center', borderRadius: '10%', MozBorderRadius: '10%', WebkitBorderRadius: '10%', fontFamily: 'Charmonman', fontSize: '25px'}}>
                      <h3>4</h3>
                      <p>DANH MỤC</p>
                      <a href="#" style={{textDecoration: 'none', color: 'aliceblue', fontSize: '20px', fontFamily: 'Charmonman'}}>Chi tiết 
                        <i className="fa-solid fa-circle-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-3">
                    <div style={{color: 'aliceblue', backgroundColor: 'rgb(211, 119, 119)', textAlign: 'center', borderRadius: '10%', MozBorderRadius: '10%', WebkitBorderRadius: '10%', fontFamily: 'Charmonman', fontSize: '25px'}}>
                      <h3>6</h3>
                      <p>BÀI VIẾT</p>
                      <Link to='/Tatcabaiviet' style={{textDecoration: 'none', color: 'aliceblue', fontSize: '20px', fontFamily: 'Charmonman'}}>Chi tiết 
                        <i className="fa-solid fa-circle-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div style={{color: 'aliceblue', backgroundColor: 'rgb(197, 154, 90)', textAlign: 'center', borderRadius: '10%', MozBorderRadius: '10%', WebkitBorderRadius: '10%', fontFamily: 'Charmonman', fontSize: '25px'}}>
                      <h3>2</h3>
                      <p>THÀNH VIÊN</p>
                      <Link to="/tatcathanhvien" style={{textDecoration: 'none', color: 'aliceblue', fontSize: '20px', fontFamily: 'Charmonman'}}>Chi tiết 
                        <i className="fa-solid fa-circle-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-3">
                    <div style={{color: 'aliceblue', backgroundColor: 'rgb(233, 136, 72)', textAlign: 'center', borderRadius: '10%', MozBorderRadius: '10%', WebkitBorderRadius: '10%', fontFamily: 'Charmonman', fontSize: '25px'}}>
                      <h3>40</h3>
                      <p>BÀN TRỐNG</p>
                      <a href="#" style={{textDecoration: 'none', color: 'aliceblue', fontSize: '20px', fontFamily: 'Charmonman'}}>Chi tiết 
                        <i className="fa-solid fa-circle-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* row 3 col 2 */}
              <div className="container-fluid" style={{paddingTop: '30px'}}>
                <div className="row">
                  <div className="col-6" style={{color: 'black'}}>
                    <h3>$34,657</h3>
                    <p>Tổng thu nhập trong 6 tháng trước</p>
                    <img src="images/imgAdmin/ThuNhap.Admin.PNG" />
                    <hr />
                    <a href="#" style={{textDecoration: 'none', color: 'rgb(108, 58, 173)', fontSize: '15px', fontFamily: 'Charmonman'}}>Thống kê chi tiết</a>
                  </div>
                  <div className="col-6" style={{color: 'black'}}>
                    <h3>250</h3>
                    <p>Số lượng đặt bàn trong 6 ngày qua</p>
                    <img src="images/imgAdmin/ĐonHang.admin.PNG" />
                    <hr />  {/* Đường thẳng */}
                    <a href="#" style={{textDecoration: 'none', color: 'rgb(108, 58, 173)', fontSize: '15px', fontFamily: 'Charmonman'}}>Thống kê chi tiết</a>
                  </div>
                </div>
              </div>
              <div style={{color: 'black', paddingTop: '30px'}}>
                <p>Hoạt động bán hàng gần đây</p>
                <img src="images/imgAdmin/BanHang.PNG" />
                <hr />
                <a href="#" style={{textDecoration: 'none', color: 'rgb(108, 58, 173)', fontSize: '15px', fontFamily: 'Charmonman'}}>Thống kê chi tiết</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}
export default Admin_Home;