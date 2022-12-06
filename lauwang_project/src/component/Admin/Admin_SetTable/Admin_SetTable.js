import React from "react";
import { Link } from "react-router-dom";
import Admin_Header from "../Admin_Header";
import Table_Infor from "./Table_Infor";
class Admin_SetTable extends React.Component {
  state = {
    todos: [
      {
        id: "cs1.062",
        title: "Đỗ Quốc Hưng",
        number: "0853695542",
        time: "7h-10h",
        slot: "28",
        status: "Đã hoàn thành",
        total: "4.460.400"
    },
    {
        id: "cs1.085",
        title: "Nguyễn Minh H",
        number: "0952148668",
        time: "10h10-11h30",
        slot: "8",
        status: "Chưa hoàn thành",
        total: "--"
    },
    {
        id: "cs3.063",
        title: "Trần Việt Phương",
        number: "0912546854",
        time: "7h-10h",
        slot: "8",
        status: "Đã hoàn thành",
        total: "1.360.000"
    },
    {
      id: "cs2.023",
      title: "Larry",
      number: "0982198605",
      time: "20h-22h",
      slot: "2",
      status: "Chưa hoàn thành",
      total: "--"
    },
    {
      id: "cs4.045",
      title: "Nguyễn Văn A",
      number: "0952148668",
      time: "7h-10h",
      slot: "60",
      status: "Đã hoàn thành",
      total: "9.943.000"
    },
    {
      id: "cs3.098",
      title: "May",
      number: "0382188604	",
      time: "17h-19h",
      slot: "6",
      status: "Chưa hoàn thành",
      total: "--"
    },
    {
      id: "cs1.098",
      title: "Bùi Minh C",
      number: "0854521154	",
      time: "19h30-20h30",
      slot: "45",
      status: "Đã hoàn thành",
      total: "7.360.000"
    },
    {
      id: "cs5.075",
      title: "Đinh Trần D",
      number: "0352462252",
      time: "7h-10h",
      slot: "40",
      status: "Đã hoàn thành",
      total: "6.360.000"
    }               
    ]
  };
  deleteTodo = id => {
    this.setState({
        todos: [
            ...this.state.todos.filter(todo => {
                return todo.id !== id;
            })
          ]
      });
  };

  render() {
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
              <Link to="/Tatcathanhvien" style={{textDecoration: 'none', color: 'aliceblue', fontSize: '20px'}}> - Danh sách người dùng</Link><br />
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
              <p style={{paddingTop: '20px', color: 'rgb(0, 0, 0)', fontSize: '25px', fontFamily: 'Charmonman'}}>Quản lý đặt bàn
                online</p>
            </div>
            <div className="col">
              <p>
              </p><nav aria-label="breadcrumb">
                <ol className="breadcrumb" style={{float: 'right'}}>
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Quản lý đặt bàn online</li>
                </ol>
              </nav>
              <p />
            </div>
          </div>
        </div>
        {/* body col 2 row2*/}
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <a href="#" style={{color: 'rgb(236, 143, 81)', fontSize: '23px', fontFamily: 'Charmonman'}}>Danh sách đặt bàn
                trong tháng 6 </a>
            </div>
            <div className="col">
              <div className="btn-group" role="group" aria-label="Basic mixed styles example" style={{float: 'right'}}>
                <button type="button" className="btn btn-danger">Tháng 6</button>
                <button type="button" className="btn btn-warning">năm 2022</button>
              </div>
              <p />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col" style={{color: 'rgb(15, 15, 14)', fontSize: '25px', fontFamily: 'Charmonman'}}>
              Tất cả đơn đặt bàn trong ngày
            </div>
          </div>
        </div><br />
          <div className="containertodo" style={{color: 'black'}}>
              <Table_Infor todos={this.state.todos}
                    deleteTodo={this.deleteTodo} />
          </div>
        </div>
        </div>
        </div>
    </>
    );
  }
}
export default Admin_SetTable;