import React from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Menu(){
    return(
        <>
        <Header/>
        <div id="menu" style={{padding: "50px",width: "100%", height: "100%"}} > 
            <img src="images/imgMenu/img1.jpg" alt=""  />
        </div>
        <h2 style={{fontSize:"45px",marginTop:"70px"}}>ĐẶT BÀN ONLINE</h2>
            <h3>
                <em style={{color:"#ff6600"}}>
                    <span>
                        — Hotline 1900 0081 —
                    </span>
                </em>
            </h3>
            <div>
                <div style={{width: "40%",height: "580px",float:"left",marginLeft:"20%"}} class="left-column">
                    <img src="https://lauwang.vn/wp-content/uploads/2020/08/ảnh-pro-02-02.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div style={{width: "20%",height: "500px",float:"right",marginRight:"20%"}} class="right-column">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <i style={{color:"#F68921"}} class="bi bi-person-fill"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Họ và tên" aria-label="Username" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <i style={{color:"#F68921"}} class="bi bi-telephone-fill"></i>
                                </span>
                                <input type="text" class="form-control" placeholder="Số điện thoại" aria-label="Phonenumber" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <i style={{color:"#F68921"}} class="bi bi-calendar-event"></i>
                                </span>
                                <input type="datetime-local"  class="form-control" placeholder="Ngày" aria-label="date" aria-describedby="basic-addon1"/>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">
                                    <i style={{color:"#F68921"}} class="bi bi-pin-map-fill"></i>
                                </span>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Chọn cơ sở</option>
                                    <option value="1">134 Trần Đại Nghĩa, HN</option>
                                    <option value="2">Số 21 đường 19/5, HN</option>
                                    <option value="3">17 Tam Khương, HN</option>
                                    <option value="4">81B Nguyễn Khang, HN</option>
                                    <option value="5">265 Tô Hiệu, HN</option>
                                    <option value="6">51A Hồ Tùng Mậu, HN</option>
                                    <option value="7">143 Trâu Quỳ, HN</option>
                                </select>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i style={{color:"#F68921"}} class="bi bi-people-fill"></i>
                                    </span>
                                    <input type="number" min="0" max="100" class="form-control" placeholder="Người lớn" aria-label="human" aria-describedby="basic-addon1"/>
                                    <input type="number" min="0" max="100" class="form-control" placeholder="Trẻ em" aria-label="human" aria-describedby="basic-addon1"/>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i style={{color:"#F68921"}} class="bi bi-pencil-fill"></i>
                                    </span>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Ghi chú" aria-label="note" rows="4"></textarea>
                                </div>
                                <div class="d-grid gap-2 col-4 mx-auto">
                                    <button style={{borderRadius: "20px",backgroundColor:"#F68921",color:"white"}} class="btn" type="button">ĐẶT BÀN</button>
                                </div>
                </div>
            </div>  
        <Footer/>
        </>
    )
}

export default Menu;