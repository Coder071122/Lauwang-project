import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Header(){
    return(
        <div class="sticky-top">
            <nav id="navbarfull" class="navbar navbar-expand-lg navbar-light">
                <div class="container" >
                    <Link class="logo" to="/"><img width="150" height="56,66" src="https://lauwang.vn/wp-content/uploads/2020/08/logo-L%E1%BA%A9u-Wang-01.png" alt="logo"/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul  class="navbar-nav ms-auto">          
                            <Link id="nav-bar-item" class="nav-link" to="/">TRANG CHỦ</Link>           
                            <Link id="nav-bar-item" class="nav-link" to="/Gioithieu">GIỚI THIỆU</Link> 
                            <Link id="nav-bar-item" class="nav-link" to="/Thucdon">THỰC ĐƠN</Link>
                            <Link id="nav-bar-item" class="nav-link" to="/Uudai">ƯU ĐÃI</Link>
                            <Link id="nav-bar-item" class="nav-link" to="/Datban">ĐẶT BÀN</Link>
                            <Link id="nav-bar-item" class="nav-link" to="/Blog">BLOG</Link>
                        </ul>
                        <ul  class="navbar-nav ms-5 me-auto">     
                            <a href="https://www.facebook.com/buffetlauwang">
                                <i id="icon-header" class="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/lauwang.buffet/">
                                <i id="icon-header" class="bi bi-instagram"/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCFgIrScG4krCGh7eCPz8DnA/videos">
                                <i id="icon-header" class="bi bi-youtube"/>
                            </a>
                        </ul>
                        <span>
                            <Link  class="nav-link login" to="/Dangnhap">Đăng nhập</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;