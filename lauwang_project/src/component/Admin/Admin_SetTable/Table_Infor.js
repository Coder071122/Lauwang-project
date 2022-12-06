import React from "react";
import Table_Delete from "./Table_Delete";
import './Admin_Settable.css'

class Table_Infor extends React.Component {
    render() {
        return (
            <div>
                <tr>
                    <th id="bangdatban" style={{background:'#fe4b09'}}>
                        <td id="Mahoadon">Mã hóa đơn</td>
                        <td id="Hotentab">Họ và tên</td>
                        <td id="Sdttab">Số điện thoại</td>
                        <td id="Time">Thời gian đặt bàn</td>
                        <td id="Slot">Số người</td>
                        <td id="Status">Tình trạng đặt</td>
                        <td id="Total">Tổng tiền</td>
                        <td id="Delete">Hủy</td>
                    </th>
                </tr>
                    {this.props.todos.map(todo => (
                        <Table_Delete
                            key={todo.id}
                            todo={todo}                        
                            deleteTodo={this.props.deleteTodo}
                        />
                    ))}
            </div>
        );
    }
}
export default Table_Infor;