import React from "react";
import './Introduce.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Introduce(){
    return(
        <>
        <Header/>
            {/* Gioi thieu */}
            <section id="intro">
            <div class="container">
                <div class="row">
                <div class="col-md-6">
                    <div class="intro">
                    <div class="intro-info">
                        <h1>Giới thiệu</h1>
                        <div class="diliver"></div>
                        <p>Lẩu Wang là hệ thống chuỗi nhà hàng buffet lẩu tại Hà Nội được tin tưởng và đánh giá cao về chất lượng và giá cả. 
                            Với 3 set buffet 129K - 169K - 199K, khách hàng sẽ được thưởng thức tới gần 50 món ăn từ bò Mỹ, hải sản tổng hợp, 
                            khai vị hấp dẫn với cá chiên hoàng bào, ghẹ sữa rang muối, ngao xào cùng vô vàn những món ăn, thức uống hấp dẫn khác…</p>
                        <p>Trong quá trình hình thành và phát triển, Wang đã xây dựng và phát triển 7 cơ sở:</p>
                        <ul>
                            <li>CS1: 134 Trần Đại Nghĩa, Hai Bà Trưng.</li>
                            <li>CS3: Số 21 đường 19/5, Văn Quán, Hà Đông .</li>
                            <li>CS4: 17 Tam Khương .</li>
                            <li>CS5: 81B Nguyễn Khang, Yên Hòa, Cầu Giấy.</li>
                            <li>CS6: 265 Tô Hiệu, Cầu Giấy.</li>
                            <li>CS7: Số 51A Hồ Tùng Mậu, Cầu Giấy.</li>
                            <li>CS8: Số 143 Trâu Qùy, Gia Lâm .</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="intro">
                    <div class="intro-img">
                        <img src="images/imgHome/img2.jpg" alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Thuong Hieu */}
            <section id="label">
            <div class="container">
                <div class="row">
                <div class="col-md-6">
                    <div class="label-intro">
                    <div class="label-intro-img">
                        <img src="images/imgIntro/img2.jpg" alt="" />
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="label-intro">
                    <div class="label-intro-info">
                        <h1>Câu chuyện thương hiệu</h1>
                        <div class="diliver"></div>
                        <p>Điều làm nên giá trị cốt lõi của một thương hiệu không đơn giản chỉ là đồ ăn ngon,
                            giá rẻ mà chính là chất lượng phục vụ từ tận tâm, nhiệt tình chiều khách. Đó cũng 
                            chính là lý do đã đưa Lẩu Wang chỉ trong 2 năm ngắn đã phát triển lên tới 7 cơ sở 
                            và trở thành thương hiệu nổi tiếng và được nhiều bạn giới trẻ yêu thích.</p>
                        <p>Quan trọng là: Lẩu Wang luôn cam kết sử dụng những nguyên liệu tươi, sạch, đảm bảo an toàn vệ sinh thực phẩm.
                             Nhân viên nhiệt tình, mến khách luôn đặt chữ tâm lên hàng đầu vui lòng khách đến, vừa lòng khách đi.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Huong Vi Lau */}
            <section id="flavour">
            <div class="container">
                <div class="row">
                <div class="col-md-6">
                    <div class="intro">
                    <div class="flavour-intro-info">
                        <h1>Hương vị lẩu</h1>
                        <div class="diliver"></div>
                        <p>Linh hồn của một nồi lẩu ngon không phải nằm ở cốt nhân mà chính là công thức nước lẩu siêu Việt.
                            Lẩu Wang luôn kế thừa giữ gìn cốt lõi vị lẩu bản địa đồng thời phát huy điều chỉnh hương vị lẩu
                            để hợp ý người Việt mang lại sự trải nghiệm vẹn toàn.</p>
                        <ul>
                            <li>Nước lẩu Wang: Độc quyền nước lẩu thần thánh là sự kết hợp hoàn hảo các loại gia vị lẩu của Thái và Nhật, chua chua cay cay của hương vị thái kết hợp với vừng mè ăn ngon khó cưỡng.</li>
                            <li>Lẩu Thái: Chua cay truyền thống với sự kết hợp của gia vị thật tài tình và hợp lý, đủ chua, đủ cay mang đến sự cảm nhận tê tê đầu lưỡi, thật sự tuyệt hảo.</li>
                            <li>Lẩu Kim chi: Những hương vị cầu kỳ cay nồng mang hương vị chuẩn xứ kim chi.</li>
                            <li>Lẩu Tứ Xuyên: Vị cay nồng hòa quyện với hương thơm của thảo mộc đánh thức vị giác</li>
                            <li>Lẩu Nấm: Thanh tao, ngọt vị phù hợp với mọi lứa tuổi.</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="flavour-intro">
                    <div class="flavour-intro-img">
                        <img src="images/imgIntro/img3.jpg" alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* Khong gian  */}
            <section id="space">
            <div class="container">
                <div class="row">
                <div class="col-md-6">
                    <div class="space-intro">
                    <div class="space-intro-img">
                        <img src="images/imgIntro/img4.jpg" alt="" />
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="space-intro">
                    <div class="space-intro-info">
                        <h1>Không gian trẻ trung</h1>
                        <div class="diliver"></div>
                        <p>Với mong muốn đem tới trải nghiệm trọn vẹn nhất cho thực khách, Lẩu Wang 
                            luôn chú ý tới từng chi tiết trong thiết kế không gian nhà hàng. Màu chủ đạo cam nồng cháy biểu 
                            trưng cho tuổi trẻ, nhiệt huyết; không gian rộng, sức chứa lớn lên 300 người phù hợp tổ chức sinh nhật, hội họp
                            trọn cuộc vui. Đặc biệt, view sông mộng mơ, hoa phượng nở đỏ thắm tạo không khí lãng mạn giúp khách tận hưởng bữa ăn
                            một cách trọn vẹn “mát nhãn - mát bụng”</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <Footer/>
        </>
    )
}

export default Introduce;