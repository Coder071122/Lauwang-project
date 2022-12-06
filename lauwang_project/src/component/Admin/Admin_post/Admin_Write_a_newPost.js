import React from "react";
import { Link } from "react-router-dom";
import Admin_Header from "../Admin_Header";

function Admin_Write_a_newPost() {
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
              <p style={{paddingTop: '20px', color: 'black', fontSize: '25px', fontFamily: 'Charmonman'}}>Viết Bài Mới</p>
            </div>
            <div className="col">
              <p>
              </p><nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{float: 'right'}}>
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Quản lý bài viết</li>
                  <li className="breadcrumb-item active" aria-current="page">Viết Bài mới</li>
                </ol>
              </nav>
              <p />
            </div>
          </div>
        </div>
        {/* body col 2 row2*/}
        <div className="row" style={{color: 'rgb(73, 73, 73)'}}>
          <div className="col-sm-8">
            <h5>Editor</h5>
            <h2>Tiêu đề</h2>
            <div className="col" style={{display: 'flex'}}>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{border: '1px solid black'}}>
                  Times New Roman
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Times New Roman</a></li>
                  <li><a className="dropdown-item" href="#">Arial</a></li>
                  <li><a className="dropdown-item" href="#">Calibri</a></li>
                  <li><a className="dropdown-item" href="#">cursive</a></li>
                </ul>
              </div>
              <div className="dropdown" style={{marginLeft: '5px'}}>
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{border: '1px solid black'}}>
                  10
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">12</a></li>
                  <li><a className="dropdown-item" href="#">15</a></li>
                  <li><a className="dropdown-item" href="#">17</a></li>
                  <li><a className="dropdown-item" href="#">19</a></li>
                  <li><a className="dropdown-item" href="#">21</a></li>
                </ul>
              </div>
              <h3 style={{fontWeight: 'bold', marginLeft: '15px'}}>B</h3>
              <h3 style={{fontStyle: 'italic', marginLeft: '15px'}}>I</h3>
              <div className="col-icon" style={{marginLeft: '20px', fontSize: '23px'}}>
                <i className="fa-solid fa-arrow-rotate-left" />
                <i className="fa-solid fa-arrow-rotate-right" style={{marginLeft: '10px'}} />
                <i className="fa-solid fa-list-ul" style={{marginLeft: '10px'}} />
                <i className="fa-solid fa-list-check" style={{marginLeft: '10px'}} />
                <i className="fa-solid fa-list-ol" style={{marginLeft: '10px'}} />
                <i className="fa-solid fa-align-left" style={{marginLeft: '10px'}} />
                <i className="fa-solid fa-align-justify" style={{marginLeft: '10px'}} />
                <i className="fa-solid fa-align-right" style={{marginLeft: '10px'}} />
                <i className="fa-solid fa-link" style={{marginLeft: '10px'}} />
              </div>
            </div>
            <div className="col" >
              <input style={{margin: '12px',height: '300px', border: '1px solid LightGray'}} type="text" class="form-control" placeholder="Nội dung bài viết" aria-label="content" aria-describedby="basic-addon1"/>
            </div>
            <div className="col" style={{display: 'flex', border: '1px solid LightGray'}}>
              <h7>Số từ: 12/100</h7>
              <h7 style={{marginLeft: '400px'}}>Bản nháp được lưu lúc: 09:45:05</h7>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="col" style={{width: '340px', height: '380px', border: '1px solid LightGray', marginLeft: '10px'}}>
              <div className="col-inner" style={{border: '1px solid LightGray', display: 'flex'}}>
                <h6 style={{padding: '5px'}}>Ngôn ngữ</h6>
                <i className="fa-solid fa-angle-up" style={{marginLeft: '220px', marginTop: '10px'}} />
              </div>
              <h6 style={{marginLeft: '10px'}}>Ngôn ngữ của bài viết này</h6>
              <div className="dropdown" style={{marginLeft: '10px'}}>
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{border: '1px solid LightGray', fontSize: '12px'}}>
                  Tiếng Việt
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Tiếng Anh</a></li>
                  <li><a className="dropdown-item" href="#">Tiếng Trung</a></li>
                  <li><a className="dropdown-item" href="#">Tiếng Nhật</a></li>
                </ul>
              </div>
              <h6 style={{marginLeft: '10px'}}>Đây là một bản dịch của</h6>
              <div className="dropdown" style={{marginLeft: '10px'}}>
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{border: '1px solid LightGray', fontSize: '12px'}}>
                  --Không chọn--
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Tiếng Việt</a></li>
                  <li><a className="dropdown-item" href="#">Tiếng Anh</a></li>
                  <li><a className="dropdown-item" href="#">Tiếng Trung</a></li>
                </ul>
              </div>
              <h6 style={{marginLeft: '10px', marginTop: '90px'}}>Tệp tin muốn đính kèm</h6>
              <div className="col-inner" style={{marginLeft: '10px', fontSize: '15px'}}>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Sao chép tập tin media đã được tải lên sang các bản dịch
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    Sao chép hình ảnh đặc trưng sang các bản dịch
                  </label>
                </div>
              </div>
            </div>
            <div className="col" style={{width: '340px', height: '250px', border: '1px solid LightGray', marginLeft: '10px', marginTop: '20px'}}>
              <div className="col-inner" style={{border: '1px solid LightGray', display: 'flex', marginBottom: '10px'}}>
                <h6 style={{padding: '5px'}}>Đăng bài viết</h6>
                <i className="fa-solid fa-angle-up" style={{marginLeft: '200px', marginTop: '10px'}} />
              </div>
              <button type="button" className="btn btn-outline-dark" style={{fontSize: '12px', marginLeft: '10px'}}>Lưu nháp</button>
              <button type="button" className="btn btn-outline-dark" style={{fontSize: '12px', marginLeft: '170px'}}>Xem thử</button>
              <div className="col-icon">
                <i className="fa-solid fa-key" style={{padding: '10px'}} />
                <h7>Trạng thái:</h7>
                <h7 style={{color: '#2b2a2a'}}>Bản nháp</h7>
                <a href="#">Chỉnh sửa</a>
              </div>
              <div className="col-icon">
                <i className="fa-solid fa-eye" style={{marginLeft: '10px'}} />
                <h7>Chế độ xem:</h7>
                <h7 style={{color: '#2b2a2a'}}>Công khai</h7>
                <a href="#">Chỉnh sửa</a>
              </div>
              <div className="col-icon">
                <i className="fa-solid fa-table-list" style={{padding: '10px'}} />
                <h7>Đăng ngay lập tức </h7>
                <a href="#">Chỉnh sửa</a>
              </div>
              <div className="col-icon" style={{border: '1px solid LightGray', marginTop: '20px', height: '50px'}}>
                <a href="#" style={{color: 'red', marginLeft: '10px', marginBottom: '60px'}}>Bỏ vào thùng rác</a>
                <button type="button" className="btn btn-primary" style={{fontSize: '13px', marginLeft: '90px', marginTop: '10px'}}>Đăng bài viết</button>
              </div>
            </div>
          </div>
        </div>   
        </div>
        </div>
        </div>
    </>
    )
}
export default Admin_Write_a_newPost;