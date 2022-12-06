import React from "react";

class User_Delete extends React.Component {
    render() {
        const { id,Sid , title, number, sex, email } = this.props.todo
        return (
            <tr className="todo-item">
                <th id="Table_User">
                    <td id="Id_User">{Sid}</td>
                    <td id="Name_User">{title}</td>
                    <td id="Number_User">{number}</td>
                    <td id="Sex_User">{sex}</td>
                    <td id="Email_User">{email}</td>
                    <td id="Delete_User"><button className="btn-del" onClick={() => this.props.deleteTodo(id)}> Xóa thành viên </button></td>
                </th>
            </tr>
        );

    }
}
export default User_Delete;