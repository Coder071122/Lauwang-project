import React from "react";
import User_Delete from "./User_Delete";
import './Admin_User.css'

class User_infor extends React.Component {
    render() {
        return (
            <div>
                <tr style={{background:'#fe4b09'}}>
                    <th id="Table_User">
                        <td id="Id_User">ID</td>
                        <td id="Name_User">Họ và Tên</td>
                        <td id="Number_User">Số Điện thoại</td>
                        <td id="Sex_User">Giới tính</td>
                        <td id="Email_User">Email</td>
                        <td id="Delete_User">Xoá</td>
                    </th>
                </tr>
                    {this.props.todos.map(todo => (
                        <User_Delete
                            key={todo.id}
                            todo={todo}                        
                            deleteTodo={this.props.deleteTodo}
                        />
                    ))}
            </div>
        );
    }
}
export default User_infor;