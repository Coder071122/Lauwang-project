import React,{Component} from'react';

class Mem_row extends Component{
    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }
    render(){
        return(
                <tr>
                    <td>{this.props.stt+1}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.props.tel}</td>
                    <td>
                    <div className="btn-group">
                        <div className="btn btn-danger btn-block xoa" onClick={(idUser) => this.deleteButtonClick(this.props.id)}><i className="fa fa-delete"/>Xoá</div>
                    </div>
                    </td>
                </tr>
            );
        }
    }
export default Mem_row;