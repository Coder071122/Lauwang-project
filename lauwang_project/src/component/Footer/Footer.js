import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"
function Footer() {
    return(
        <div id='Footer' class="card text-center">
            <div class="card-body d-flex justify-content-center">
                <div id="item" class="card-item text-start">
                    <h4 class="card-title">Lẩu Wang – Vua Buffet Lẩu</h4>
                    <hr class="underline"></hr>
                    <p class="card-text">
                        <p>
                            <b>Hotline: </b>
                            1900 0081
                            <br></br>Lẩu Wang là hệ thống chuỗi nhà hàng buffet lẩu tại Hà Nội được đánh giá cao về chất lượng và giá cả. Buffet tại Lẩu Wang gồm: 129K – 169K – 199K, khách hàng sẽ được thưởng thức tới gần 50 món ăn từ ba chỉ bò Mỹ, hải sản tổng hợp, khai vị hấp dẫn với Cá chiên hoàng bào, Ghẹ sữa rang muối, Ngao xào sốt Thái cùng vô vàn những món ăn, thức uống hấp dẫn khác…
                        </p>         
                    </p>
                </div>
                <div id="item" class="card-item text-start">
                    <h4 class="card-title">Hệ thống cơ sở Lẩu Wang</h4>
                    <hr class="underline"></hr>
                        <p id='cardtext' class="card-text">
                            <i class="bi bi-geo-alt-fill"/>
                                <b>Cơ sở 1: </b>
                                143 Trần Đại Nghĩa, HBT, Hà Nội
                            <br></br>
                            <i class="bi bi-geo-alt-fill"/>
                                <b>Cơ sở 2: </b>
                                Số 21 đường 19/5, Hà Đông, Hà Nội
                            <br></br>    
                            <i class="bi bi-geo-alt-fill"/>
                                <b>Cơ sở 3: </b>
                                17 Tam Khương, Đống Đa, Hà Nội
                            <br></br>    
                            <i class="bi bi-geo-alt-fill"/>
                                <b>Cơ sở 4: </b>
                                81B Nguyễn Khang, Cầu Giấy, Hà Nội
                            <br></br>
                            <i class="bi bi-geo-alt-fill"/>
                                <b>Cơ sở 5: </b>
                                265 Tô Hiệu, Cầu Giấy, Hà Nội
                            <br></br>
                            <i class="bi bi-geo-alt-fill"/>
                                <b>Cơ sở 6: </b>
                                51A Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                            <br></br>

                            <i class="bi bi-geo-alt-fill"/>
                                <b>Cơ sở 7: </b>
                                51A Hồ Tùng Mậu, Cầu Giấy, Hà Nội
                            <br></br>
                            <i class="bi bi-geo-alt-fill"/>
                                <b>Cơ sở 8: </b>
                                143 Trâu Quỳ, Gia Lâm, Hà Nội
                        </p>
                </div>
                <div id="item" class="card-item text-start">
                    <h4 class="card-title">Theo dõi chúng tôi</h4>
                    <hr class="underline"></hr>
                    <p>
	                    Theo dõi chúng tôi tại các trang thông tin
                        <br></br>
                        <a href="https://www.facebook.com/buffetlauwang">
                            <i id='icon-footer' class="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/lauwang.buffet/">
                            <i id='icon-footer' class="bi bi-instagram"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCFgIrScG4krCGh7eCPz8DnA/videos">
                            <i id='icon-footer' class="bi bi-youtube"/>
                        </a>
                        <a href="https://tiktok.com/">
                            <i id='icon-footer' class="bi bi-tiktok"></i>
                        </a>
                    </p>
                </div>
            </div>
            <div id='card-footer' class="card-footer">
                <a id="footer-link" href="/Datban">Đặt bàn </a>
                <a id="footer-link" href='https://lauwang.vn/tuyen-dung/'>Tuyển Dụng </a>
                <a id="footer-link" href='#'>Liên hệ</a>
            </div>
        </div>
    );
}

export default Footer