import React from "react";
import { Link } from "react-router-dom";
function Admin_Header(){
    return(
        <>
            {/* header */}
            <div className="container-fluid header ">
            <div className="row" style={{backgroundColor: '#fe4b09', height: '70px'}}>
            <div className="col-3 title">
              <Link to="/Quanly_Trangchu" style={{textDecoration: 'none',fontSize: '40px', textAlign: 'center', marginBottom: '30px', fontFamily: 'Brush Script MT',color:'White', paddingTop: '10px'}}>Lau Wang Admin</Link>
            </div> 
            <div className="col-1 title" style={{paddingTop: '15px'}}> 
              <Link to="/Quanly_Trangchu" style={{textDecoration: 'none', color: 'White',fontSize: '20px'}}>Trang chủ</Link>
            </div> 
            <div className="col-3 title"> 
              <div style={{paddingTop: '15px'}}  className="input-group">
                <input type="search" placeholder="Nhập từ bạn cần tìm?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                <div className="input-group-append">
                  <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search" /></button>
                </div>
              </div>
            </div>
            <div className="col-5 title" style={{paddingTop: '15px'}}>
              <p style={{float: 'right'}}>
                <button type="button" className="btn position-relative">
                  <i className="bi bi-chat-right-text-fill" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button> 
                <button type="button" className="btn position-relative ms-auto me-5">
                  <i className="bi bi-bell-fill" />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                <a href="#" style={{textDecoration: 'none', color: 'White'}}><img className="user-img" alt="Bootstrap Image Preview" src="images/imgAdmin/avatar.jpg" style={{height: '40px', width: '40px', borderRadius: '50%'}} />
                  Admin
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* /header */}
        </>
    );
}
export default Admin_Header;