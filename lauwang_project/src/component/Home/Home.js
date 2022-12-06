import React from "react";
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Home(){
    return(
        <>
            <Header/>
            <div>
            <img src="images/imgHome/img1.jpg" alt="" class="slider"  /> 
            </div>
            
            {/* <!--CÂU CHUYỆN THƯƠNG HIỆU  --> */}
            <section id="story">
            <div class="container">
                <div class="row">
                <div class="title">
                    <h1>CÂU CHUYỆN THƯƠNG HIỆU</h1>
                    
                </div>
                </div>
                <div class="row">
                <div class="col-md-6">
                    <div class="story-intro">
                    <div class="story-intro-info">
                        <p>Lẩu Wang là hệ thống chuỗi nhà hàng buffet lẩu tại Hà Nội được tin tưởng và đánh giá cao về 
                            chất lượng và giá cả các set buffet chỉ từ 129K, khách hàng sẽ được thưởng thức tới gần 50 
                            món ăn từ ba chỉ bò Mỹ, hải sản tổng hợp, khai vị hấp dẫn với gà chiên cay ngọt Hàn Quốc, 
                            ngao xào, salad cùng vô vàn những món ăn, thức uống hấp dẫn khác.</p>
                        <p>Với sự phát triển không ngừng, đến nay Lẩu Wang đã xây dựng và hoạt động 7 cơ sở: </p>
                        <ul>
                            <li>CS1: 134 Trần Đại Nghĩa, Hai Bà Trưng.</li>
                            <li>CS3: Số 21 đường 19/5, Văn Quán, Hà Đông (cổng sau Học Viện An Ninh).</li>
                            <li>CS4: 17 Tam Khương (số 17 ngõ 10 Tôn Thất Tùng).</li>
                            <li>CS5: 81B Nguyễn Khang, Yên Hòa, Cầu Giấy.</li>
                            <li>CS6: 265 Tô Hiệu, Cầu Giấy.</li>
                            <li>CS7: Số 51A Hồ Tùng Mậu, Cầu Giấy.</li>
                            <li>CS8: Số 143 Trâu Qùy, Gia Lâm (gần Học viện Nông Nghiệp).</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="story-intro">
                    <div class="story-intro-img">
                        <img src="images/imgHome/img2.jpg" alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* <!--TINH HOA NGŨ VỊ LẨU  --> */}
            <section id="flavours">
            <div class="container">
                <div class="row">
                    <div class="title">
                        <h1>TINH HOA NGŨ VỊ LẨU</h1>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="flavours-intro">
                            <div class="flavours-intro-img">
                            <img src="images/imgHome/img3.jpg" alt="" />
                            </div>
                        </div>
                        </div> 
                    <div class="col-md-6">
                        <div class="flavours-intro">
                            <div class="flavours-intro-info">
                                <p>Ẩm thực chính là tấm gương phản chiếu văn hóa của mỗi quốc gia. Hiểu được điều này, 
                                    Lẩu Wang luôn kế thừa và giữ gìn cốt lõi vị lẩu bản địa đồng thời phát huy điều chỉnh 
                                    hương vị lẩu để hợp ý người Việt mang lại sự trải nghiệm vẹn toàn với 5 hương vị tuyệt 
                                    vời của tinh hoa sắc vị. </p>
                                <ul>
                                <li>Nước lẩu Wang: Độc quyền nước lẩu thần thánh là sự kết hợp hoàn hảo các loại gia vị lẩu của Thái và Nhật, chua chua cay cay của hương vị thái kết hợp với vừng mè ăn ngon khó cưỡng. </li>
                                <li>Lẩu Thái: Chua cay truyền thống với sự kết hợp của gia vị thật tài tình và hợp lý, đủ chua, đủ cay mang đến sự cảm nhận tê tê đầu lưỡi, thật sự tuyệt hảo. </li>
                                <li>Lẩu Kim chi: Những hương vị cầu kỳ cay nồng mang hương vị chuẩn xứ kim chi.</li>
                                <li>Lẩu Tứ Xuyên: Vị cay nồng hòa quyện với hương thơm của thảo mộc đánh thức vị giác</li>
                                <li>Lẩu Nấm: Thanh tao, ngọt vị phù hợp với mọi lứa tuổi.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            {/* <!-- THỰC ĐƠN --> */}
            <section id="menu">
            <div class="container">
                <div class="row">
                    <div class="title">
                        <h1>THỰC ĐƠN</h1>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="menu-intro">
                            <div class="menu-intro-img">
                            <a href="/Thucdon"><img src="images/imgHome/img4.jpg" alt=""/></a>
                            <p class="mt-5">Buffet 129K thả ga hơn 15 món ăn đặc biệt của Lẩu Wang. Kết hợp cùng nồi lẩu 2 ngăn thoả thích 
                                các bạn lựa chọn vị Lẩu Thái, Lẩu Kim Chi, Lẩu Wang đặc biệt sẽ phù hợp cho nhiều khách hàng với nhiều lựa chọn 
                                vị lẩu khác nhau . (Buffet 129k chỉ áp dụng buổi trưa từ thứ 2 đến thứ 6)</p>
                            </div>
                        </div>
                    </div> 
                    <div class="col-md-4">
                        <div class="menu-intro">
                        <div class="menu-intro-img">
                            <a href="/Thucdon"><img src="images/imgHome/img5.jpg" alt="" /></a>
                            <p class="mt-5">Buffet 169K là thực đơn được nhiều khách hàng lựa chọn nhất. Thả ga với 35 món ăn với nhiều món 
                                khai vị vô cùng đặc biệt như Gà chiên cay ngọt Hàn Quốc, Nộm chân gà pha lê, Salad hoa quả nho khô, Salad rau xanh 
                                Hàn Quốc, Ngao xào sốt Thái, Bánh gạo Hàn Quốc,...</p>
                        </div>
                        </div>
                    </div> 
                    <div class="col-md-4">
                        <div class="menu-intro">
                            <div class="menu-intro-img">
                            <a href="/Thucdon"><img src="images/imgHome/img6.jpg" alt="" /></a>
                            <p class="mt-5">Chỉ thêm 39K thực đơn bổ sung thêm 8 món hải sản tươi ngon như Cá ngừ đại dương fillet, Tôm Sú, 
                                Mực Trứng, Bạch Tuộc, Thanh Cua,... Khách hàng sẽ đắm chìm gần 40 món ăn siêu ngon cùng những vị lẩu vô cùng 
                                đặc biệt chỉ có tại Lẩu Wang ...</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            </section>

        {/* TIN TUC */}
            <section id="news">
            <div class="container">
                <div class="row">
                    <div class="title">
                        <h1>TIN TỨC</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="news-intro">
                        <div class="news-intro-img">
                            <a href="/Trangchu/Tintuc"><img src="images/imgHome/img7.jpg" alt="" /></a>
                            <h4>Học tốt hốt lì xì 22% của Lẩu Wang. Back to school thôi nào!</h4>
                            <p class="mt-3">Sau bao nhiêu ngày mong ngóng thì các trường trên địa bàn Hà Nội đã chính thức có lịch học offline.
                                Điều đó có nghĩa là các bạn sinh viên sau kì nghỉ “bất đắc dĩ” gần 10 tháng đã có mặt tại Hà Nội chuẩn bị cho</p>
                        </div>
                        </div>
                    </div> 
                    <div class="col-md-4">
                        <div class="news-intro">
                            <div class="news-intro-img">
                                
                                <a href="/Trangchu/Tin-tuc"><img src="images/imgHome/img8.jpg" alt="" /></a>
                                <h4>Khai xuân cực vui - Lẩu Wang lì xì cực đã tới 22%</h4>
                                <p class="mt-4">Cung chúc tân xuân Nhâm Dần, Lẩu Wang kính chúc các quý khách hàng năm mới an khang thịnh vượng, 
                                    năm Hổ mạnh như Hổ! Nếu muốn một khởi đầu phát lộc cho năm 2022 thì đặt bàn ngay tại Lẩu Wang để khai xuan và 
                                    dinh ngay lì xì 22% nào! </p>
                            </div>
                        </div>
                    </div> 
                    <div class="col-md-4">
                        <div class="news-intro">
                            <div class="news-intro-img">
                            <a href="/Uudai"><img src="images/imgHome/img1.jpg" alt="" /></a>
                            <h4>Lên đồ đi biển giảm liền 50%. Đến Lẩu Wang thôi!</h4>
                            <p class="mt-3">Mùa hè đến chắc chắn là khoảng thời gian xả stress cực hiệu quả. Và tất nhiên là không thể không 
                                lên đồ đi biển rồi. Nếu bạn chưa có địa điểm lý tưởng nào thì Lẩu Wang xin hân hạnh gửi đến bạn chương</p>
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

export default Home;