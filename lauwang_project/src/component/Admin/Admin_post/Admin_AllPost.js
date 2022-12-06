import React from "react";
import { Link } from "react-router-dom";
import Admin_Header from "../Admin_Header";
function Admin_AllPost() {
    return (
    <>
      <Admin_Header/>
      <div className="container-fluid">
          <div className="row" style={{color: 'aliceblue', height: '100%'}}>
            {/* col 1 */}
            <div className="col-3" style={{backgroundColor: '#F68921',width:'20%',textAlign:'start',height:'1000px'}}>
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
                  <p style={{paddingTop: '20px', color: 'black', fontSize: '25px', fontFamily: 'Charmonman'}}>Tất Cả Bài Viết</p>
                </div>
                <div className="col">
                  <p /><nav aria-label="breadcrumb">
                    <ol className="breadcrumb" style={{float: 'right'}}>
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Quản lý bài viết</li>
                      <li className="breadcrumb-item active" aria-current="page">Tất Cả Bài Viết</li>
                    </ol>
                  </nav><p />
                </div>
              </div>
            </div>
            {/* body col 2 row2*/}
            <div className="col">
              <p /><nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">Tất Cả Bài Viết (6)</li>
                  <li className="breadcrumb-item active" aria-current="page">Đã đăng(6)</li>
                  <li className="breadcrumb-item active" aria-current="page">Đã xóa(0)</li>
                </ol>
              </nav><p />
            </div>
            {/* table */}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tiêu đề</th>
                  <th scope="col">Tác giả</th>
                  <th scope="col">Thẻ</th>
                  <th scope="col">chỉnh sửa</th>
                  <th scope="col">Ngày đăng</th>
                  <th scope="col">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Học tốt hốt lì xì 22% của Lẩu Wang – Back to school thôi nào!</td>
                  <td>Việt Phương</td>
                  <td>--</td>
                  <td>
                    <ol className="breadcrumb">
                      {/* bấm vào để chỉnh sửa */}
                      <li className="breadcrumb-item"><a href="#">Chỉnh sửa</a></li> 
                      {/* Xem chi tiết chỉnh sửa : ngày,time , nội dung của các lần chỉnh sửa trước */}
                      <li className="breadcrumb-item"><a href="#">Chi tiết chỉnh sửa</a></li>
                    </ol>
                  </td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">Đã đăng</li>
                      <li className="breadcrumb-item"><a href="#">20/05/2022</a></li>
                    </ol>
                  </td>
                  <td>--</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Khai xuân cực vui – Lẩu Wang lì xì cực đã tới 22%</td>
                  <td>Việt Phương</td>
                  <td>--</td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Chỉnh sửa</a></li>
                      <li className="breadcrumb-item"><a href="#">Chi tiết chỉnh sửa</a></li>
                    </ol>
                  </td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">Đã đăng</li>
                      <li className="breadcrumb-item"><a href="#">22/05/2022</a></li>
                    </ol>
                  </td>
                  <td>--</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Lên đồ đi biển giảm liền 50% – Đến Lẩu Wang thôi!</td>
                  <td>Quốc Hưng</td>
                  <td>--</td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Chỉnh sửa</a></li>
                      <li className="breadcrumb-item"><a href="#">Chi tiết chỉnh sửa</a></li>
                    </ol>
                  </td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">Đã đăng</li>
                      <li className="breadcrumb-item"><a href="#">29/05/2022</a></li>
                    </ol>
                  </td>
                  <td>--</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Lẩu Wang Ship 24/7 – Alo là lên đơn liền!</td>
                  <td>Việt Phương</td>
                  <td>--</td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Chỉnh sửa</a></li>
                      <li className="breadcrumb-item"><a href="#">Chi tiết chỉnh sửa</a></li>
                    </ol>
                  </td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">Đã đăng</li>
                      <li className="breadcrumb-item"><a href="#">22/05/2022</a></li>
                    </ol>
                  </td>
                  <td>--</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>TINH HOA NGŨ VỊ LẨU</td>
                  <td>Quốc Hưng</td>
                  <td>--</td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Chỉnh sửa</a></li>
                      <li className="breadcrumb-item"><a href="#">Chi tiết chỉnh sửa</a></li>
                    </ol>
                  </td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">Đã đăng</li>
                      <li className="breadcrumb-item"><a href="#">20/05/2022</a></li>
                    </ol>
                  </td>
                  <td>--</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Blog</td>
                  <td>Quốc Hưng</td>
                  <td>--</td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Chỉnh sửa</a></li>
                      <li className="breadcrumb-item"><a href="#">Chi tiết chỉnh sửa</a></li>
                    </ol>
                  </td>
                  <td>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">Đã đăng</li>
                      <li className="breadcrumb-item"><a href="#">20/05/2022</a></li>
                    </ol>
                  </td>
                  <td>--</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
    );
}
export default Admin_AllPost;