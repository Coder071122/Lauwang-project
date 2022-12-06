import React from "react";
import './Admin_Members.css'

import Mem_row from "./Mem_row";
class Admin_infor extends React.Component {
    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }
    mappingDataUser = () => this.props.dataUserProps.map((value,key)=>(
        <Mem_row 
        deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}

        userName={value.title}
        id={value.id}
        key={key} 
        stt={key}
        tel={value.number} 
        />
     ))

    

    render() {
        console.log(this.props.dataUserProps)
        return (
            <div>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Họ và Tên</th>
                    <th scope="col">Số Điện Thoại</th>
                    <th scope="col">Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mappingDataUser()}
                </tbody>
                </table>
            </div>
        );
    }
}
export default Admin_infor;