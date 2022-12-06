import React from "react";

class Table_Delete extends React.Component {
    render() {
        const { id, title, number, time, slot, status, total } = this.props.todo
        return (
            <tr className="table-item">
                <th id="bangdatban">
                    <td id="Mahoadon">{id}</td>
                    <td id="Hotentab">{title}</td>
                    <td id="Sdttab">{number}</td>
                    <td id="Time">{time}</td>
                    <td id="Slot">{slot}</td>
                    <td id="Status">{status}</td>
                    <td id="Total">{total}</td>
                    <td id="Delete"><button className="btn-del" onClick={() => this.props.deleteTodo(id)}> Hủy Đặt Bàn </button></td>
                </th>
            </tr>
        );

    }
}
export default Table_Delete;