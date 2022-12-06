import React from "react";

class Admin_Delete extends React.Component {
    render() {
        const { id, title, number } = this.props.todo
        return (
            <tr className="todo-item">
                <th id="bangkhachhang">
                    <td id="Hoten">{title}</td>
                    <td id="Sdt">{number}</td>
                    <td id="Xoa"><button className="btn-del" onClick={() => this.props.deleteTodo(id)}> Xóa Khách hàng </button></td>
                </th>
            </tr>
        );

    }
}
export default Admin_Delete;