import React,{Component} from "react";
import { Link } from "react-router-dom";
import Admin_Header from "../Admin_Header";
import Admin_infor from './Admin_infor';
import Mem_add from "./Mem_add";
import DataUser from "../Data.json"
import { v4 as uuidv4 } from 'uuid';
class Admin_AllMembers extends Component{
  constructor(props){
    super(props);
    this.state={
      data : [],
    }
  }
  componentWillMount()
  {
    if(localStorage.getItem('userData') === null ){
      localStorage.setItem('useData',JSON.stringify(DataUser));
    }
    else{
      var temp =JSON.parse(localStorage.getItem('useData'));
      this.setState({
        data:temp
      });
    }
  }
  getNewUserData = (title,number) => {
    var item = {};
    item.id = uuidv4();
    item.title = title;
    item.number = number;
    var items = this.state.data;

    items.push(item);

    this.setState({
      data:items
    });
    localStorage.setItem('useData',JSON.stringify(items));
  }
  deleteUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
      this.setState({
        data:tempData
      });
      localStorage.setItem('userData',JSON.stringify(tempData));  
  }

  render() {
    //daydulieu
    // localStorage.setItem('userData',JSON.stringify(DataUser));
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
                    <p style={{paddingTop: '20px', color: 'black', fontSize: '25px', fontFamily: 'Charmonman'}}>Tất cả khách hàng</p>
                  </div>
                  <div className="col">
                    <p>
                    </p><nav aria-label="breadcrumb">
                      <ol className="breadcrumb" style={{float: 'right'}}>
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Thông tin khách hàng</li>
                        <li className="breadcrumb-item active" aria-current="page">Danh sách khách hàng</li>
                      </ol>
                    </nav>
                    <p />
                  </div>
                </div>
              </div>
              {/* body col 2 row2*/}
              <h1 style={{color: '#6F6F6F', textAlign: 'center', fontFamily: 'cursive'}}> Chào mừng bạn đến với trang khách hàng
              </h1>
            {/* table */}
            <div className="containertodo" style={{color: 'black'}}>
              <Mem_add add={(title,number) => this.getNewUserData(title,number)}/>
              <Admin_infor 
              deleteUser = {(idUser) => this.deleteUser(idUser)}
              dataUserProps={this.state.data}/>
            </div>
            </div>
          </div>
          </div>
    </>
    );
  }
}
export default Admin_AllMembers;